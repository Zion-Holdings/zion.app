from django.urls import path, include

urlpatterns = [
    path('auth/', include('authentication.urls')),
    path('products/', include('backend.products.urls')),
]
