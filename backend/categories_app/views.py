from rest_framework import viewsets
from .models import Category
from .serializers import CategorySerializer
from rest_framework.permissions import AllowAny # Or IsAuthenticated if you want to protect it

class CategoryViewSet(viewsets.ReadOnlyModelViewSet): # ReadOnly as we are only listing
    queryset = Category.objects.filter(active=True)
    serializer_class = CategorySerializer
    permission_classes = [AllowAny] # Allows public access
