import time
import logging
import requests
import threading
from django.conf import settings
from django.core.cache import caches
from django.http import JsonResponse
from datetime import datetime

logger = logging.getLogger(__name__)

ERROR_RATE_LIMIT_COUNT = getattr(settings, 'ERROR_RATE_LIMIT_COUNT', 5)
ERROR_RATE_LIMIT_WINDOW = getattr(settings, 'ERROR_RATE_LIMIT_WINDOW_SECONDS', 10 * 60)
IP_BLOCK_DURATION = getattr(settings, 'IP_BLOCK_DURATION_SECONDS', 1 * 60 * 60)
SLACK_NOTIFICATION_URL = getattr(settings, 'SLACK_NOTIFICATION_URL', 'http://localhost:3001/api/alerts/notify-slack')
CODEX_TRIGGER_URL = getattr(settings, 'CODEX_TRIGGER_URL', 'http://localhost:3001/api/codex/suggest-fix') # Assuming Express server runs on 3001
CODEX_TRIGGER_COOLDOWN_SECONDS = getattr(settings, 'CODEX_TRIGGER_COOLDOWN_SECONDS', 10 * 60) # 10 minutes


CACHE_ALIAS = 'default'

# Helper function to send notification without blocking
def send_slack_notification_async(payload):
    def send_request():
        try:
            response = requests.post(SLACK_NOTIFICATION_URL, json=payload, timeout=5) # 5 second timeout
            if response.status_code == 200:
                logger.info(f"Successfully sent Slack notification for IP {payload.get('ip_address')}")
            else:
                logger.error(f"Failed to send Slack notification. Status: {response.status_code}, Body: {response.text}")
        except requests.exceptions.RequestException as e:
            logger.error(f"Error sending Slack notification: {e}")

    thread = threading.Thread(target=send_request)
    thread.start()

# Helper function to trigger Codex patch generator
def trigger_codex_patch_async(payload):
    def send_request():
        try:
            response = requests.post(CODEX_TRIGGER_URL, json=payload, timeout=10) # 10 second timeout
            if response.status_code == 200:
                logger.info(f"Successfully triggered Codex patch for route {payload.get('route')}")
            else:
                logger.error(f"Failed to trigger Codex patch. Status: {response.status_code}, Body: {response.text}")
        except requests.exceptions.RequestException as e:
            logger.error(f"Error triggering Codex patch: {e}")

    thread = threading.Thread(target=send_request)
    thread.start()

class ErrorHandlingMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response
        self.cache = caches[CACHE_ALIAS]

    def __call__(self, request):
        ip_address = self.get_client_ip(request)
        blocked_ips_key = f"blocked_ip:{ip_address}"

        if self.cache.get(blocked_ips_key):
            logger.warning(f"Blocked IP {ip_address} attempted access to {request.path}")
            return JsonResponse({'error': 'Too many requests. Please try again later.'}, status=429)

        response = self.get_response(request)

        if response.status_code >= 500:
            self.handle_server_error(request, response, ip_address)

        return response

    def get_client_ip(self, request):
        x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
        if x_forwarded_for:
            ip = x_forwarded_for.split(',')[0]
        else:
            ip = request.META.get('REMOTE_ADDR')
        return ip

    def handle_server_error(self, request, response, ip_address):
        current_time = int(time.time())
        current_timestamp_iso = datetime.utcnow().isoformat()
        route_path = request.path

        logger.error(
            f"Server error {response.status_code} on route {route_path} from IP {ip_address}. "
            f"Response content: {response.content[:500]}"
        )

        ip_error_key_prefix = f"error_count:ip:{ip_address}"
        self.cache.set(f"{ip_error_key_prefix}:{current_time}", 1, timeout=ERROR_RATE_LIMIT_WINDOW)
        ip_error_timestamps = self.cache.keys(f"{ip_error_key_prefix}:*")
        ip_error_count = len(ip_error_timestamps)

        notification_sent_key = f"notification_sent:ip:{ip_address}"
        codex_triggered_key_route = f"codex_triggered:route:{route_path}" # Key for route-specific cooldown

        # --- IP-based blocking and notifications ---
        if ip_error_count > ERROR_RATE_LIMIT_COUNT:
            blocked_ips_key = f"blocked_ip:{ip_address}" # Define here for clarity
            if not self.cache.get(blocked_ips_key):
                logger.warning(f"IP {ip_address} exceeded error limit ({ip_error_count} errors). Blocking for {IP_BLOCK_DURATION} seconds.")
                self.cache.set(blocked_ips_key, True, timeout=IP_BLOCK_DURATION)

                if not self.cache.get(notification_sent_key):
                    slack_payload = {
                        'ip_address': ip_address,
                        'route': route_path, # Route that led to IP block
                        'reason': f'IP error limit exceeded ({ip_error_count} errors).',
                        'timestamp': current_timestamp_iso
                    }
                    send_slack_notification_async(slack_payload)
                    self.cache.set(notification_sent_key, True, timeout=60)

            # Trigger Codex if route limit also exceeded by this IP's error, or if IP block itself warrants it (current logic ties to route)
            # This part is tricky: should an IP block alone trigger codex for a specific route?
            # Let's assume Codex is triggered if the *route* is problematic.

        # --- Route-based blocking and notifications ---
        route_error_key_prefix = f"error_count:route:{route_path}"
        self.cache.set(f"{route_error_key_prefix}:{current_time}", 1, timeout=ERROR_RATE_LIMIT_WINDOW)
        route_error_timestamps = self.cache.keys(f"{route_error_key_prefix}:*")
        route_error_count = len(route_error_timestamps)

        if route_error_count > ERROR_RATE_LIMIT_COUNT:
            logger.warning(f"Route {route_path} exceeded error limit ({route_error_count} errors). IP {ip_address} contributed.")
            blocked_ips_key = f"blocked_ip:{ip_address}" # Define here
            if not self.cache.get(blocked_ips_key):
                 logger.warning(f"Blocking IP {ip_address} due to route {route_path} error limit for {IP_BLOCK_DURATION} seconds.")
                 self.cache.set(blocked_ips_key, True, timeout=IP_BLOCK_DURATION)

                 if not self.cache.get(notification_sent_key):
                     slack_payload = {
                         'ip_address': ip_address,
                         'route': route_path,
                         'reason': f'Route error limit exceeded ({route_error_count} errors on this route by this IP).',
                         'timestamp': current_timestamp_iso
                     }
                     send_slack_notification_async(slack_payload)
                     self.cache.set(notification_sent_key, True, timeout=60)

            # Trigger Codex for the problematic route if cooldown has passed
            if not self.cache.get(codex_triggered_key_route):
                logger.info(f"Triggering Codex patch generator for route {route_path} due to error threshold.")
                codex_payload = {'route': route_path, 'timestamp': current_timestamp_iso}
                trigger_codex_patch_async(codex_payload)
                self.cache.set(codex_triggered_key_route, True, timeout=CODEX_TRIGGER_COOLDOWN_SECONDS)
