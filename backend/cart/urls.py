from django.urls import path
from . import views

urlpatterns = [
    path('snapshot', views.snapshot, name='cart-snapshot'),
    path('restore/<str:token>', views.load_snapshot, name='cart-restore'),
]
