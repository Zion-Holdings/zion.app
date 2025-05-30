from django.urls import path, include
from . import views

urlpatterns = [
    path('auth/', include('authentication.urls')),
    path('metrics', views.metrics, name='metrics'),
    path('admin/metrics', views.admin_metrics, name='admin_metrics'),
]
