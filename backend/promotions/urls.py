from django.urls import path
from . import views

urlpatterns = [
    path('validate', views.validate_coupon, name='validate_coupon'),
]
