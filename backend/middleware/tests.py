import time
import unittest # Added for unittest.mock.ANY
from unittest.mock import patch, MagicMock, call
from django.test import TestCase, RequestFactory, override_settings
from django.http import HttpResponse, JsonResponse
from django.conf import settings
from django.core.cache import caches

# Ensure this path is correct based on your project structure
from backend.middleware.error_handler import ErrorHandlingMiddleware

# Configure Django settings if not already configured for tests
# This initial configuration block might be redundant if your Django project's test runner
# already sets up a full environment. However, it's here for robustness in case of
# running tests in a more isolated way or if specific minimal settings are desired.
if not settings.configured:
    settings.configure(
        CACHES={
            'default': {
                'BACKEND': 'django.core.cache.backends.locmem.LocMemCache',
                'LOCATION': 'unique-snowflake-for-middleware-tests', # Unique name
            }
        },
        ROOT_URLCONF=__name__, # Basic root url conf for tests to avoid ImproperlyConfigured errors
        # Define the settings our middleware uses, to ensure tests use these specific values
        # These are more like defaults for the settings object itself if not overridden by @override_settings
        ERROR_RATE_LIMIT_COUNT_TEST = 2,
        ERROR_RATE_LIMIT_WINDOW_SECONDS_TEST = 10,
        IP_BLOCK_DURATION_SECONDS_TEST = 20,
        SLACK_NOTIFICATION_URL_TEST = 'http://test-slack-url/notify',
        CODEX_TRIGGER_URL_TEST = 'http://test-codex-url/trigger',
        CODEX_TRIGGER_COOLDOWN_SECONDS_TEST = 15
    )

# Dummy urlpatterns for ROOT_URLCONF, required if __name__ is used for ROOT_URLCONF
urlpatterns = []


# Use override_settings to ensure these values are used for the duration of these tests
@override_settings(
    ERROR_RATE_LIMIT_COUNT = getattr(settings, 'ERROR_RATE_LIMIT_COUNT_TEST', 2),
    ERROR_RATE_LIMIT_WINDOW_SECONDS = getattr(settings, 'ERROR_RATE_LIMIT_WINDOW_SECONDS_TEST', 10),
    IP_BLOCK_DURATION_SECONDS = getattr(settings, 'IP_BLOCK_DURATION_SECONDS_TEST', 20),
    SLACK_NOTIFICATION_URL = getattr(settings, 'SLACK_NOTIFICATION_URL_TEST', 'http://test-slack-url/notify'),
    CODEX_TRIGGER_URL = getattr(settings, 'CODEX_TRIGGER_URL_TEST', 'http://test-codex-url/trigger'),
    CODEX_TRIGGER_COOLDOWN_SECONDS = getattr(settings, 'CODEX_TRIGGER_COOLDOWN_SECONDS_TEST', 15),
    CACHES={
        'default': {
            'BACKEND': 'django.core.cache.backends.locmem.LocMemCache',
            'LOCATION': 'test-cache-loc-middleware', # Ensure a unique location for tests
        }
    }
)
class ErrorHandlingMiddlewareTests(TestCase):
    def setUp(self):
        self.factory = RequestFactory()
        # Ensure cache is cleared and from the correct overridden settings
        self.cache = caches['default']
        self.cache.clear()

        self.mock_get_response_error = MagicMock(return_value=HttpResponse("Server Error", status=500))
        self.mock_get_response_success = MagicMock(return_value=HttpResponse("OK", status=200))

        # Patch 'requests.post' used in the middleware module
        self.requests_post_patcher = patch('backend.middleware.error_handler.requests.post')
        self.mock_requests_post = self.requests_post_patcher.start()
        self.addCleanup(self.requests_post_patcher.stop) # Ensure patch is stopped after test

        # Patch logger used in the middleware module
        self.logger_patcher = patch('backend.middleware.error_handler.logger')
        self.mock_logger = self.logger_patcher.start()
        self.addCleanup(self.logger_patcher.stop)

    def tearDown(self):
        self.cache.clear() # Clear cache after each test

    def _get_middleware_instance(self, get_response_func):
        # Creates a fresh middleware instance. This is important because the middleware
        # reads settings from django.conf.settings upon its __init__ call.
        # @override_settings ensures that django.conf.settings has the test values.
        return ErrorHandlingMiddleware(get_response_func)

    def _make_request(self, ip_address='123.123.123.123', path='/test/path', use_error_response=True, headers=None):
        get_response_func = self.mock_get_response_error if use_error_response else self.mock_get_response_success
        middleware_to_test = self._get_middleware_instance(get_response_func)

        if headers:
            request = self.factory.get(path, REMOTE_ADDR=ip_address, **headers)
        else:
            request = self.factory.get(path, REMOTE_ADDR=ip_address)
        return middleware_to_test(request)

    def test_ip_blocked_after_exceeding_limit(self):
        limit = settings.ERROR_RATE_LIMIT_COUNT
        ip = '1.1.1.1'

        for i in range(limit):
            self._make_request(ip_address=ip, path=f"/path{i}")

        response = self._make_request(ip_address=ip, path="/path_block_trigger")
        self.assertEqual(response.status_code, 500) # Block applies on the *next* request

        response_blocked = self._make_request(ip_address=ip, path="/another_path", use_error_response=False)
        self.assertEqual(response_blocked.status_code, 429)
        self.assertIn(b'Too many requests', response_blocked.content)

        self.mock_logger.warning.assert_any_call(f"IP {ip} exceeded error limit ({limit + 1} errors). Blocking for {settings.IP_BLOCK_DURATION_SECONDS} seconds.")

        sent_payloads = [c.kwargs['json'] for c in self.mock_requests_post.call_args_list if c.args[0] == settings.SLACK_NOTIFICATION_URL]
        self.assertTrue(any(p['ip_address'] == ip and "IP error limit exceeded" in p['reason'] for p in sent_payloads),
                        "Slack notification for IP block not sent or reason mismatch")

    def test_route_triggers_ip_block_and_codex(self):
        limit = settings.ERROR_RATE_LIMIT_COUNT
        route = '/problematic/route'
        ip1 = '2.2.2.1'

        for _ in range(limit):
             self._make_request(ip_address=ip1, path=route) # Errors up to limit

        # This error from IP1 makes the route exceed its limit & also IP1's own count for this route
        self._make_request(ip_address=ip1, path=route)

        response_blocked_ip1 = self._make_request(ip_address=ip1, path="/any_other_path", use_error_response=False)
        self.assertEqual(response_blocked_ip1.status_code, 429)

        slack_payloads = [c.kwargs['json'] for c in self.mock_requests_post.call_args_list if c.args[0] == settings.SLACK_NOTIFICATION_URL]
        self.assertTrue(any(p['ip_address'] == ip1 and 'Route error limit exceeded' in p['reason'] for p in slack_payloads),
                        "Slack notification for route-based IP block not sent or reason mismatch")

        codex_payloads = [c.kwargs['json'] for c in self.mock_requests_post.call_args_list if c.args[0] == settings.CODEX_TRIGGER_URL]
        self.assertTrue(any(p['route'] == route for p in codex_payloads),
                        "Codex trigger for problematic route not sent")
        self.mock_logger.info.assert_any_call(f"Triggering Codex patch generator for route {route} due to error threshold.")

    def test_block_expires_concept(self):
        # This test conceptually verifies that a block is set.
        # True expiry testing with LocMemCache requires time manipulation (e.g., freezegun)
        # or testing against a cache backend like Redis that strictly enforces TTLs on read.
        ip = '3.3.3.3'
        limit = settings.ERROR_RATE_LIMIT_COUNT

        for _ in range(limit + 1): # Exceed limit
            self._make_request(ip_address=ip)

        response_blocked = self._make_request(ip_address=ip, use_error_response=False)
        self.assertEqual(response_blocked.status_code, 429)

        blocked_key = f"blocked_ip:{ip}"
        # Check that the key was set in cache. We assume the timeout was passed correctly.
        self.assertIsNotNone(self.cache.get(blocked_key), "IP block key was not set in cache.")

        # To truly test expiration:
        # 1. Use freezegun to advance time past IP_BLOCK_DURATION_SECONDS.
        # 2. Make another request and assert a 200 status.
        # Example (if freezegun was available):
        # with freezegun.freeze_time(datetime.datetime.now() + datetime.timedelta(seconds=settings.IP_BLOCK_DURATION_SECONDS + 5)):
        #     unblocked_response = self._make_request(ip_address=ip, use_error_response=False)
        #     self.assertEqual(unblocked_response.status_code, 200)
        self.skipTest("Full cache expiry test requires time manipulation (e.g., freezegun) or a different cache backend for testing.")


    def test_codex_cooldown(self):
        route = '/cooldown/test'
        ip = '5.5.5.5'
        limit = settings.ERROR_RATE_LIMIT_COUNT

        for _ in range(limit + 1): # Trigger route block and first Codex call
            self._make_request(ip_address=ip, path=route)

        codex_calls = [c for c in self.mock_requests_post.call_args_list if c.args[0] == settings.CODEX_TRIGGER_URL]
        self.assertEqual(len(codex_calls), 1, "Codex should be called once for initial route error burst")
        self.assertEqual(codex_calls[0].kwargs['json']['route'], route)

        self.mock_requests_post.reset_mock() # Reset mock before next phase of test

        self._make_request(ip_address=ip, path=route) # Trigger another error on the same route

        additional_codex_calls = [c for c in self.mock_requests_post.call_args_list if c.args[0] == settings.CODEX_TRIGGER_URL]
        self.assertEqual(len(additional_codex_calls), 0, "Codex should not be called again during cooldown period")

        # To truly test cooldown expiry:
        # 1. Use freezegun to advance time past CODEX_TRIGGER_COOLDOWN_SECONDS.
        # 2. Trigger another error and assert Codex is called again.
        self.skipTest("Full Codex cooldown expiry test requires time manipulation (e.g., freezegun).")


    def test_no_action_on_200_status(self):
        middleware = self._get_middleware_instance(self.mock_get_response_success)
        request = self.factory.get('/success/path', REMOTE_ADDR='6.6.6.6')
        response = middleware(request) # Process the request

        self.assertEqual(response.status_code, 200)
        self.mock_requests_post.assert_not_called()
        # Ensure no warning/error logs related to blocking from our middleware
        # Errors from the application itself (if any) are not the target here.
        for log_call in self.mock_logger.warning.call_args_list:
            self.assertNotIn("exceeded error limit", log_call.args[0])
            self.assertNotIn("Blocking IP", log_call.args[0])


    def test_ip_not_blocked_if_limit_not_exceeded(self):
        ip = '7.7.7.7'
        # Trigger errors, but one less than the limit
        for _ in range(settings.ERROR_RATE_LIMIT_COUNT - 1):
            self._make_request(ip_address=ip)

        # This error makes the count reach the limit, but not exceed it for *blocking trigger*
        # The blocking logic checks `count > limit`.
        response = self._make_request(ip_address=ip)
        self.assertEqual(response.status_code, 500) # Should be the original 500 error

        # A subsequent non-error request should pass
        response_after = self._make_request(ip_address=ip, use_error_response=False)
        self.assertEqual(response_after.status_code, 200) # IP should not be blocked

        self.mock_requests_post.assert_not_called() # No notifications should be sent

    def test_get_client_ip_direct(self):
        middleware_instance = self._get_middleware_instance(self.mock_get_response_success)
        req = self.factory.get('/', REMOTE_ADDR='1.2.3.4')
        self.assertEqual(middleware_instance.get_client_ip(req), '1.2.3.4')

    def test_get_client_ip_x_forwarded_for(self):
        middleware_instance = self._get_middleware_instance(self.mock_get_response_success)
        req = self.factory.get('/', REMOTE_ADDR='127.0.0.1', HTTP_X_FORWARDED_FOR='1.2.3.4, 5.6.7.8')
        self.assertEqual(middleware_instance.get_client_ip(req), '1.2.3.4')

    def test_get_client_ip_x_forwarded_for_single(self):
        middleware_instance = self._get_middleware_instance(self.mock_get_response_success)
        req = self.factory.get('/', REMOTE_ADDR='127.0.0.1', HTTP_X_FORWARDED_FOR='1.2.3.4')
        self.assertEqual(middleware_instance.get_client_ip(req), '1.2.3.4')
