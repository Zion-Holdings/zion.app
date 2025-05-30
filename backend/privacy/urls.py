from django.urls import path
from . import views

urlpatterns = [
    path('export', views.request_export, name='request_export'),
    path('delete', views.request_deletion, name='request_deletion'),
]
