import time
from django.utils.deprecation import MiddlewareMixin
from .observability import request_latency

class PrometheusMiddleware(MiddlewareMixin):
    def process_request(self, request):
        request._start_time = time.perf_counter()

    def process_response(self, request, response):
        start = getattr(request, '_start_time', None)
        if start is not None:
            duration = time.perf_counter() - start
            request_latency.labels(method=request.method, path=request.path).observe(duration)
        return response
