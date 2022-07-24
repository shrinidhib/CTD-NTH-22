from django.shortcuts import render, get_object_or_404
from itsdangerous import TimedSerializer
from .serializers import *
import json

# DRF imports
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics, viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

# For lifeline
from datetime import datetime
from time import perf_counter

# Create your views here.

# class UserView(APIView):
#     def get(self,request, *args, **kwargs):
#         print(args,"args")
#         print(kwargs,"kwargs")
#         users = User.objects.all()
#         serializer = UserSerializer(users, many=True)
#         return Response(serializer.data)

class UserViewSet(viewsets.ViewSet):

    # List All Users -- get method
    def list(self, request):
        users = User.objects.all().order_by('-current_level','last_level_updated_time').values()
        print(users)
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)

    # Retrieve Particular User -- get method
    def retrieve(self, request, pk = None):
        queryset = User.objects.all()
        user = get_object_or_404(queryset, pk = pk)
        serializer = UserSerializer(user)
        return Response(serializer.data)

    # Create a new User -- post method
    def create(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    
class QuestionDetail(generics.RetrieveAPIView):
    
    def get(self, request, user_ans = None):
        if request.user.is_authenticated:
            user = request.user
            queryset = Question.objects.all()
            print(user_ans)
            que = get_object_or_404(queryset, level = user.current_level)
            keys_available = user.current_level
            if que.answer == user_ans:
                # For currency lines 56-61
                paidHintCost = (user.currentlevel % 2) + 1
                if paidHintCost <= user.currency and user.paidHintTaken:
                    user.currency = user.currency - paidHintCost
                    print(que.paidHint,' is the extra hint.')
                elif paidHintCost > user.currency:
                    print("Lifeline cannot be taken cuz of less number of keys.")
            
                # if user.current_level >= 8:
                #     if user.doublerTaken:
                #         keys_available = (user.current_level*2)
                #         now = datetime.now()
                #         user.doublerTakenTime = now.strftime("%H:%M:%S")
                #         t1 = perf_counter()
                #         print(user.doubleTakenTime)
                #         print(keys_available)
                        # while keys_available >= (user.current_level%2) and (que.answer != user_ans):
                        #     time1= datetime.now()
                        #     timer = time1.strftime("%H:%M:%S")
                        #     if (timer - user.doublerTakenTime) % 15 == 0:
                        #         keys_available -= 1
                        #         print(keys_available)
                user.current_level += 1
                # For currency line 64
                user.currency += keys_available
                print(user.current_level,"level")
                # For currency line 67
                print(user.currency,"keys")
                user.save()
            que = get_object_or_404(queryset, level = user.current_level)
            print(que)

            serializer = QuestionSerializer(que)
            return Response(serializer.data)
        error_dict = {"status":"Not Authenticated"}
        return Response(json.dumps(error_dict))

class LeaderboardView(APIView):
    def get(self, request, *args, **kwargs):
        queryset = User.objects.all().order_by('-current_level','last_level_updated_time','currency')