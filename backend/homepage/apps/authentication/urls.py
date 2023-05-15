from django.urls import path

from .views import GetUserInfo

app_name = 'authentication'

urlpatterns = [
    path('get_info/', GetUserInfo.as_view(), name='get_info'),
]
