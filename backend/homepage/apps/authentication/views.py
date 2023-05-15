from authentication.models import User
from authentication.serializers import UserSerializer
from rest_framework import routers, viewsets


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_object(self):
        username = self.kwargs.get('pk')
        return self.queryset.filter(username=username).first()

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)

from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from authentication.serializers import UserSerializer


class GetUserInfo(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        serializer = UserSerializer(user)
        return Response(serializer.data)
