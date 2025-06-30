import uuid
import threading
import logging

logger = logging.getLogger(__name__)

_request_config = threading.local()

class CorrelationIDMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        # Check for existing correlation ID or generate a new one
        correlation_id = request.headers.get('X-Correlation-ID') or \
                         request.headers.get('X-Request-ID') or \
                         str(uuid.uuid4())

        _request_config.correlation_id = correlation_id

        user_id_for_log = 'anonymous'
        if hasattr(request, 'user') and request.user.is_authenticated:
            user_id_for_log = str(request.user.id) # Ensure it's a string
            _request_config.user_id = user_id_for_log
        else:
            _request_config.user_id = 'anonymous' # Set explicitly for filter

        logger.info(
            f"Incoming request: {request.method} {request.path}",
            extra={
                # correlation_id and user_id will be added by the filter if formatter uses them
                # but including here ensures they are in this specific log's context if needed
                'correlation_id_mw': correlation_id,
                'user_id_mw': user_id_for_log,
                'request_method': request.method,
                'request_path': request.path,
                'remote_addr': request.META.get('REMOTE_ADDR'),
                'http_user_agent': request.META.get('HTTP_USER_AGENT'),
            }
        )

        response = self.get_response(request)

        # Add correlation ID to response headers
        if correlation_id:
            response['X-Correlation-ID'] = correlation_id

        # Log outgoing response
        # user_id_for_log would be the same as on request unless state changed unexpectedly
        logger.info(
            f"Outgoing response: {response.status_code} for {request.method} {request.path}",
            extra={
                'correlation_id_mw': correlation_id,
                'user_id_mw': user_id_for_log, # from request phase
                'response_status_code': response.status_code,
                'request_method': request.method,
                'request_path': request.path,
            }
        )

        # Clean up thread local
        if hasattr(_request_config, 'correlation_id'):
            del _request_config.correlation_id
        if hasattr(_request_config, 'user_id'):
            del _request_config.user_id

        return response

class RequestIdFilter(logging.Filter):
    def filter(self, record):
        record.correlation_id = getattr(_request_config, 'correlation_id', 'N/A')
        record.user_id = getattr(_request_config, 'user_id', 'anonymous')
        return True

def get_correlation_id():
    """Utility function to get the current correlation ID."""
    return getattr(_request_config, 'correlation_id', None)

def get_current_user_for_log():
    """Utility function to get current user for logging, if available."""
    # This would need to be set in middleware after AuthenticationMiddleware
    # e.g., _request_config.user_id = request.user.id
    return getattr(_request_config, 'user_id', 'anonymous')
