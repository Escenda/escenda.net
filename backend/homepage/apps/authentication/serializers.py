from authentication.models import User
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password', 'icon_location', 'is_staff', 'is_superuser']
        extra_kwargs = {
            'username': {'validators': []},
        }

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user