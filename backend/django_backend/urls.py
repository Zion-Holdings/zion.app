from django.urls import path, include

urlpatterns = [
    path('auth/', include('authentication.urls')),
    path('privacy/', include('privacy.urls')),
]
