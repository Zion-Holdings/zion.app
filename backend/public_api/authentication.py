from hashlib import sha256
import secrets
from django.utils.translation import gettext_lazy as _
from rest_framework.authentication import BaseAuthentication
from rest_framework import exceptions
from .models import ApiKey

class ApiKeyAuthentication(BaseAuthentication):
    keyword = 'Api-Key'

    def authenticate(self, request):
        key = request.headers.get('X-API-KEY') or request.headers.get('Authorization')
        if not key:
            return None
        if key.startswith(self.keyword + ' '):
            key = key[len(self.keyword) + 1:]
        prefix = key[:8]
        try:
            api_key = ApiKey.objects.get(prefix=prefix, revoked=False)
        except ApiKey.DoesNotExist:
            raise exceptions.AuthenticationFailed(_('Invalid API key'))
        digest = sha256(key.encode()).hexdigest()
        if not secrets.compare_digest(digest, api_key.hashed_key):
            raise exceptions.AuthenticationFailed(_('Invalid API key'))
        return (api_key.user, None)
