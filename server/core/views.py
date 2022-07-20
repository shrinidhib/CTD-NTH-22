from django.shortcuts import render, get_object_or_404
from .serializers import *
import json

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

class UserViewSet(viewsets.ViewSet):

    # List All Users -- get method
    def list(self, request):
        users = User.objects.all()
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
    # queryset = Question.objects.all()
    # serializer_class = QuestionSerializer
    # lookup_field = "level"
    # def get(self, request, *args, **kwargs):
    #     level = kwargs['level']
    #     return self.retrieve(request, level = level)
    
    def get(self, request, user_ans = None):
        if request.user.is_authenticated:
            user = request.user
            queryset = Question.objects.all()
            print(user_ans)
            que = get_object_or_404(queryset, level = user.current_level)
            if que.answer == user_ans:
                user.current_level += 1
                print(user.current_level,"level")
                user.save()
            que = get_object_or_404(queryset, level = user.current_level)
            print(que)

            serializer = QuestionSerializer(que)
            return Response(serializer.data)
        error_dict = {"status":"Not Authenticated"}
        return Response(json.dumps(error_dict))