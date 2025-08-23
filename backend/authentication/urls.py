from django.urls import path
from . import views

urlpatterns = [
    path('forgot-password', views.forgot_password, name='forgot_password'),
    path('reset-password/<uidb64>/<token>', views.reset_password, name='reset_password'),
]
