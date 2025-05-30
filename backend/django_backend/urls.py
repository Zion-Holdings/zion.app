from django.urls import path, include

urlpatterns = [
    path('auth/', include('authentication.urls')),
    path('cart/', include('backend.cart.urls')),
]
