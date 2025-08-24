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
    prefix = secrets.token_hex(4)
    full_key = prefix + secrets.token_hex(16)
    hashed = sha256(full_key.encode()).hexdigest()
    ApiKey.objects.create(user=request.user, prefix=prefix, hashed_key=hashed)
    return Response({'key': full_key, 'prefix': prefix}, status=status.HTTP_201_CREATED)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def revoke_key(request):
    prefix = request.data.get('prefix')
    ApiKey.objects.filter(user=request.user, prefix=prefix).update(revoked=True)
    return Response({'detail': 'revoked'})

@api_view(['GET'])
@authentication_classes([ApiKeyAuthentication])
@throttle_classes([RedisDailyThrottle])
def protected_endpoint(request):
    return Response({'detail': 'success'})


@login_required
def developer_portal(request):
    context = {}
    if request.method == 'POST' and 'generate' in request.POST:
        prefix = secrets.token_hex(4)
        full_key = prefix + secrets.token_hex(16)
        hashed = sha256(full_key.encode()).hexdigest()
        ApiKey.objects.create(user=request.user, prefix=prefix, hashed_key=hashed)
        context['new_key'] = full_key
    if request.method == 'POST' and 'revoke' in request.POST:
        pref = request.POST.get('prefix')
        ApiKey.objects.filter(user=request.user, prefix=pref).update(revoked=True)
    context['keys'] = ApiKey.objects.filter(user=request.user, revoked=False)
    return render(request, 'developer_portal.html', context)
