from django.shortcuts import render, get_object_or_404
from .serializers import *
import json
import random
from datetime import datetime
import pytz
from difflib import SequenceMatcher

# DRF imports
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics, viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

# Create your views here.

# class UserView(APIView):
#     def get(self,request, *args, **kwargs):
#         print(args,"args")
#         print(kwargs,"kwargs")
#         users = User.objects.all()
#         serializer = UserSerializer(users, many=True)
#         return Response(serializer.data)

# class UserViewSet(viewsets.ViewSet):

#     # List All Users -- get method
#     def list(self, request):
#         users = User.objects.filter(hidden_on_leaderboard=False).order_by('-current_level','last_level_updated_time')
#         serializer = UserSerializer(users, many=True)
#         return Response(serializer.data)

#     # Retrieve Particular User -- get method
#     def retrieve(self, request, pk = None):
#         queryset = User.objects.all()
#         user = get_object_or_404(queryset, pk = pk)
#         serializer = UserSerializer(user)
#         return Response(serializer.data)

#     # Create a new User -- post method
#     def create(self, request):
#         serializer = UserSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors)
    
    # Scheduler 
    # def addKey():
    #     queryset = User.objects.all()
    #     print("scheduler called")
    #     for user in queryset:
    #         user.keys += 1
    #         user.save()
    
class QuestionDetail(generics.RetrieveAPIView):
    
    def get(self, request, user_ans = None):
        if request.user.is_authenticated:
            user = request.user
            queryset = Question.objects.all()
            que = get_object_or_404(queryset, level = user.current_level)
            isCorrect = False
            match = SequenceMatcher(None, user_ans, que.answer).ratio()
            promocode = Timer.objects.all().first()

            # Check for promocode
            if promocode.promo_code_active and not user.promo_used:
                if user_ans == promocode.promocode:
                    user.current_level += 1
                    user.paidHintTaken = False
                    user.promo_used = True
                    user.save()
                    isCorrect = True
                que = get_object_or_404(queryset, level = user.current_level)

            # Evaluate The Answer
            elif que.answer == user_ans:
                user.keys += user.current_level
                user.current_level += 1
                user.paidHintTaken = False
                print(user.current_level,"level")
                user.save()
                isCorrect = True
                que = get_object_or_404(queryset, level = user.current_level)
            
            # Keyword Check for prompts
            elif match >= 0.7:
                responses = ["You are close.", "Almost There!"]
                serializer = QuestionSerializer(que)
                print(serializer.data)
                data = serializer.data
                data["promts"] = random.choice(responses)
                return Response(data)

            serializer = QuestionSerializer(que)
            data = serializer.data
            if isCorrect:
                data["promts"] = f"Congratulations!! Advancing to level {user.current_level}."
            else:
                data["promts"] = f"Wrong Answer!"
            return Response(data)
        error_dict = {"status":"Not Authenticated"}
        return Response(json.dumps(error_dict))


class LeaderboardView(APIView):
    def get(self, request, *args, **kwargs):
        users = User.objects.filter(hidden_on_leaderboard=False).order_by('-current_level','last_level_updated_time')[:10]
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)

class ExtraHintView(APIView):
    def post(self, request):
        authentication_classes = [TokenAuthentication]
        permission_classes = [IsAuthenticated]
        # username = request.data["username"]
        res_dict = {"status":"You Don't Have Enough Keys"}
        user = request.user
        que = get_object_or_404(Question, level = user.current_level)
        print(que.paidHint, "bhat")
        if(user.paidHintTaken):
            # res_dict = {"status":"You have already taken a hint!"}
            res_dict = {"extraHint":que.paidHint}
            return Response(res_dict)
        if user.keys >= user.current_level + 1:
            user.keys -= (user.current_level + 1)
            user.paidHintTaken = True
            user.save()
            res_dict = {"extraHint":que.paidHint}
            return Response(res_dict)
        return Response(res_dict)


class TimerView(APIView):
    def get(request,*args, **kwargs):
        utc = pytz.UTC
        timer = Timer.objects.all().first()
        start_time = timer.time.replace(tzinfo=utc)
        print(start_time > utc.localize(datetime.now()))
        print(start_time)
        print(start_time.timetz)
        print(utc.localize(datetime.now()))
        serializer = TimerSerializer(timer)
        return Response(serializer.data)
