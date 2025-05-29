from django.urls import path
from .views import UserRegistrationView

app_name = 'users' # Optional, but good practice for namespacing

urlpatterns = [
    path('register/', UserRegistrationView.as_view(), name='register'),
]
