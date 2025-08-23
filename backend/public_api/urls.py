from django.urls import path
from . import views

urlpatterns = [
    path('generate/', views.generate_key, name='generate_key'),
    path('revoke/', views.revoke_key, name='revoke_key'),
    path('ping/', views.protected_endpoint, name='protected'),
    path('developer/', views.developer_portal, name='developer_portal'),
]
