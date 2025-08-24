from datetime import timedelta
from django.core.cache import cache
from rest_framework.throttling import SimpleRateThrottle

class RedisDailyThrottle(SimpleRateThrottle):
    scope = 'daily'
    rate = '1000/day'

    def get_cache_key(self, request, view):
        ident = request.user.pk if request.user.is_authenticated else request.META.get('REMOTE_ADDR')
        if not ident:
            return None
        return self.cache_format % {
            'scope': self.scope,
            'ident': ident
        }
