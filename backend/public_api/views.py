import secrets
from hashlib import sha256
from rest_framework.decorators import api_view, permission_classes, authentication_classes, throttle_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import render
from django.contrib.auth.decorators import login_required

from .models import ApiKey
from .authentication import ApiKeyAuthentication
from .throttling import RedisDailyThrottle

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def generate_key(request):
    """Generate a new API key for the authenticated user."""
    prefix, secret = ApiKey.generate_key()
    name = request.data.get('name', '')
    hashed = ApiKey.hash_secret(secret)
    ApiKey.objects.create(user=request.user, name=name, prefix=prefix, hashed_key=hashed)
    full_key = f"{prefix}.{secret}"
    return Response({'key': full_key, 'prefix': prefix, 'name': name}, status=status.HTTP_201_CREATED)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def revoke_key(request):
    prefix = request.data.get('prefix')
    if not prefix:
        return Response({'error': 'Prefix is required.'}, status=status.HTTP_400_BAD_REQUEST)

    updated = ApiKey.objects.filter(user=request.user, prefix=prefix).update(revoked=True)
    if updated:
        return Response({'message': 'API key revoked successfully.'})
    return Response({'message': 'API key not found or not owned by user.'})

@api_view(['GET'])
@authentication_classes([ApiKeyAuthentication])
@throttle_classes([RedisDailyThrottle])
def protected_endpoint(request):
    return Response({'detail': 'success'})


@login_required
def developer_portal(request):
    context = {}
    if request.method == 'POST' and 'generate' in request.POST:
        prefix, secret = ApiKey.generate_key()
        name = request.POST.get('name', '')
        hashed = ApiKey.hash_secret(secret)
        ApiKey.objects.create(user=request.user, name=name, prefix=prefix, hashed_key=hashed)
        context['new_key'] = f"{prefix}.{secret}"
    if request.method == 'POST' and 'revoke' in request.POST:
        pref = request.POST.get('prefix')
        ApiKey.objects.filter(user=request.user, prefix=pref).update(revoked=True)
    context['keys'] = ApiKey.objects.filter(user=request.user, revoked=False)
    return render(request, 'developer_portal.html', context)
