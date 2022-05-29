from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework import status
from rest_framework import serializers
import uuid

# class RegistrationAPIView(generics.GenericAPIView):
#     serializer_class = RegistrationSerializer
#
#     def post(self, request):
#         serializer = self.get_serializer(data=request.data)
#         # serializer.is_valid(raise_exception = True)
#         # serializer.save()
#         if (serializer.is_valid()):
#             serializer.save()
#             return Response({
#                 "RequestId": str(uuid.uuid4()),
#                 "Message": "User created successfully",
#                 "User": serializer.data}, status=status.HTTP_201_CREATED
#             )
#
#         return Response({"Errors": serializers.errors}, status=status.HTTP_400_BAD_REQUEST)

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        # ...

        return token


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['POST'])
def getRoutes(request):
    routes = [
        '/api/token',
        '/api/token/refresh',
    ]

    return Response(routes)
