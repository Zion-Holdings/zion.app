# Error Handling Middleware

## Overview

The `ErrorHandlingMiddleware` is a Django middleware designed to detect and manage excessive 5xx server errors. It helps protect the application by rate-limiting and temporarily blocking IP addresses that cause frequent errors or originate from routes that are consistently failing.

## Features

-   **5xx Error Detection**: Monitors responses for HTTP 5xx status codes.
-   **IP-Based Error Tracking**: Counts 5xx errors originating from individual IP addresses.
-   **Route-Based Error Tracking**: Counts 5xx errors occurring on specific URL paths.
-   **Rate Limiting & IP Blocking**:
    -   If an IP address causes more than `ERROR_RATE_LIMIT_COUNT` errors within `ERROR_RATE_LIMIT_WINDOW_SECONDS`, that IP is blocked for `IP_BLOCK_DURATION_SECONDS`.
    -   If a specific route experiences more than `ERROR_RATE_LIMIT_COUNT` errors (from any IP) within `ERROR_RATE_LIMIT_WINDOW_SECONDS`, the IP that triggered the last error leading to this threshold will be blocked.
    -   Blocked IPs receive a 429 (Too Many Requests) response.
-   **Slack Notifications**: When an IP is blocked, a notification is sent via a configured webhook to a Slack channel (or other alert system). This is handled by an external Express.js endpoint.
-   **Codex Patch Generator Trigger**: When a route is identified as frequently failing, a trigger is sent to a "Codex Patch Generator" service (via an external Express.js endpoint) to suggest a potential fix. This also respects a cooldown period (`CODEX_TRIGGER_COOLDOWN_SECONDS`) per route.
-   **Redis for State Management**: Uses Redis (via Django's cache framework) to store error counts, blocked IPs, and cooldown flags.

## Configuration

The middleware's behavior can be configured in your Django `settings.py` file. If not set, defaults defined within the middleware are used.

-   `ERROR_RATE_LIMIT_COUNT`: Max errors before action.
    -   Default: 5
    -   Example: `ERROR_RATE_LIMIT_COUNT = 10`

-   `ERROR_RATE_LIMIT_WINDOW_SECONDS`: Time window (in seconds) for counting errors.
    -   Default: 600 (10 minutes)
    -   Example: `ERROR_RATE_LIMIT_WINDOW_SECONDS = 5 * 60`

-   `IP_BLOCK_DURATION_SECONDS`: Duration (in seconds) for which an IP is blocked.
    -   Default: 3600 (1 hour)
    -   Example: `IP_BLOCK_DURATION_SECONDS = 2 * 60 * 60`

-   `SLACK_NOTIFICATION_URL`: URL of the Express.js endpoint for Slack notifications.
    -   Default: `'http://localhost:3001/api/alerts/notify-slack'`
    -   Example: `SLACK_NOTIFICATION_URL = 'http://your-express-server:3001/api/alerts/notify-slack'`

-   `CODEX_TRIGGER_URL`: URL of the Express.js endpoint for triggering the Codex patch generator.
    -   Default: `'http://localhost:3001/api/codex/suggest-fix'`
    -   Example: `CODEX_TRIGGER_URL = 'http://your-express-server:3001/api/codex/suggest-fix'`

-   `CODEX_TRIGGER_COOLDOWN_SECONDS`: Cooldown period (in seconds) before triggering Codex again for the same problematic route.
    -   Default: 600 (10 minutes)
    -   Example: `CODEX_TRIGGER_COOLDOWN_SECONDS = 30 * 60`

**Redis Configuration**:
The middleware uses Django's default cache (`caches['default']`). Ensure this cache is configured to use Redis in your `settings.py`:
```python
CACHES = {
    'default': {
        'BACKEND': 'django_redis.cache.RedisCache',
        'LOCATION': os.environ.get('REDIS_URL', 'redis://127.0.0.1:6379/1'),
        'OPTIONS': {
            'CLIENT_CLASS': 'django_redis.client.DefaultClient',
        }
    }
}
# Ensure REDIS_URL environment variable is set.
```

## Installation

1.  Place the `error_handler.py` file in a suitable location within your Django project (e.g., `your_project/middleware/error_handler.py`).
2.  Ensure `requests` is in your `requirements.txt` for the Django environment.
3.  Add the middleware to the `MIDDLEWARE` list in your `settings.py`. It should be placed relatively high, but its exact position might depend on other middleware. A common placement is after `CommonMiddleware`:
    ```python
    MIDDLEWARE = [
        # ... other middleware ...
        'django.middleware.common.CommonMiddleware',
        'your_project.middleware.error_handler.ErrorHandlingMiddleware', # Adjust path accordingly
        # ... other middleware ...
    ]
    ```

## Checking Blocked IPs

Blocked IPs are stored in Redis with keys following the pattern `blocked_ip:<IP_ADDRESS>`.
You can check for a blocked IP using `redis-cli`:
```sh
GET "blocked_ip:123.123.123.123"
```
If it returns `True` (or any value), the IP is currently blocked. The key will have a TTL corresponding to `IP_BLOCK_DURATION_SECONDS`.

Error counts and cooldown flags are also stored in Redis with specific prefixes (e.g., `error_count:ip:`, `error_count:route:`, `codex_triggered:route:`).
```
