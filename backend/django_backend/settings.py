from pathlib import Path
import os
import logging # Required for Sentry LoggingIntegration level

BASE_DIR = Path(__file__).resolve().parent.parent
SECRET_KEY = 'django-insecure-placeholder'
DEBUG = True
ALLOWED_HOSTS = ['*']

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'django_filters',
    'drf_yasg',
    'authentication',
    'public_api',
    'ipo_portal',
    'django_otp',
    'django_otp.plugins.otp_totp',
    'governance.apps.GovernanceConfig',
    'deployment', # Added new deployment app - corrected path
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware', # Session data available
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware', # User data available
    'django_otp.middleware.OTPMiddleware',
    'middleware.request_logging.CorrelationIDMiddleware', # Added - Correlation ID and request logging
    'middleware.error_handler.ErrorHandlingMiddleware', # Custom error handler
    'django.contrib.messages.middleware.MessageMiddleware',
]

ROOT_URLCONF = 'django_backend.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR / 'authentication' / 'templates'],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'django_backend.wsgi.application'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

# -----------------------------------------------------------------------------
# ERROR HANDLING MIDDLEWARE SETTINGS
# -----------------------------------------------------------------------------
# These settings are used by the custom ErrorHandlingMiddleware.
# Defaults are defined in the middleware file if not set here.

# Maximum number of 5xx errors from an IP or for a route before triggering actions.
# ERROR_RATE_LIMIT_COUNT = 5

# Time window (in seconds) for counting errors.
# ERROR_RATE_LIMIT_WINDOW_SECONDS = 10 * 60  # 10 minutes

# Duration (in seconds) for which an IP should be blocked.
# IP_BLOCK_DURATION_SECONDS = 1 * 60 * 60  # 1 hour

# URL for the Express.js endpoint that triggers Slack notifications.
# SLACK_NOTIFICATION_URL = 'http://localhost:3001/api/alerts/notify-slack' # Ensure port matches Express server

# URL for the Express.js endpoint that triggers the Codex patch generator.
# CODEX_TRIGGER_URL = 'http://localhost:3001/api/codex/suggest-fix' # Ensure port matches Express server

# Cooldown period (in seconds) before triggering Codex again for the same route.
# CODEX_TRIGGER_COOLDOWN_SECONDS = 10 * 60 # 10 minutes

# Note: REDIS_URL for the cache is configured in the CACHES setting using
# os.environ.get('REDIS_URL', 'redis://127.0.0.1:6379/1')

AUTH_PASSWORD_VALIDATORS = []

LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_TZ = True

STATIC_URL = '/static/'
# STATIC_ROOT = BASE_DIR / 'staticfiles' # For production 'collectstatic'

# Media files (user uploads)
MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'


CACHES = {
    'default': {
        'BACKEND': 'django_redis.cache.RedisCache', # Corrected for django-redis 5.x
        'LOCATION': os.environ.get('REDIS_URL', 'redis://127.0.0.1:6379/1'),
    }
}

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

EMAIL_BACKEND = 'sendgrid_backend.SendgridBackend'
SENDGRID_API_KEY = os.environ.get('SENDGRID_API_KEY')

PASSWORD_RESET_TIMEOUT = 900  # 15 minutes

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'public_api.authentication.ApiKeyAuthentication',
    ],
    'DEFAULT_THROTTLE_CLASSES': [
        'public_api.throttling.RedisDailyThrottle',
    ],
    'DEFAULT_FILTER_BACKENDS': [
        'django_filters.rest_framework.DjangoFilterBackend',
    ],
}

SWAGGER_SETTINGS = {
    'SECURITY_DEFINITIONS': {
        'ApiKeyAuth': {
            'type': 'apiKey',
            'in': 'header',
            'name': 'X-API-KEY'
        }
    }
}

# Sentry SDK Initialization
SENTRY_DSN_DJANGO = os.environ.get('SENTRY_DSN_DJANGO')
SENTRY_RELEASE = os.environ.get('SENTRY_RELEASE', 'zion-backend@1.0.0') # Example release
SENTRY_ENVIRONMENT = os.environ.get('SENTRY_ENVIRONMENT', 'development' if DEBUG else 'production')

if SENTRY_DSN_DJANGO:
    import sentry_sdk
    from sentry_sdk.integrations.django import DjangoIntegration
    from sentry_sdk.integrations.logging import LoggingIntegration

    # Ensure logs directory exists for file handler
    LOGS_DIR = BASE_DIR / 'logs'
    LOGS_DIR.mkdir(parents=True, exist_ok=True)

    sentry_logging = LoggingIntegration(
        level=logging.INFO,        # Capture info and above as breadcrumbs
        event_level=logging.ERROR  # Send errors as events
    )

    sentry_sdk.init(
        dsn=SENTRY_DSN_DJANGO,
        integrations=[DjangoIntegration(), sentry_logging],
        release=SENTRY_RELEASE,
        environment=SENTRY_ENVIRONMENT,
        traces_sample_rate=0.1,  # Adjust as needed
        send_default_pii=False
    )
    print(f"Sentry initialized for Django with DSN: {SENTRY_DSN_DJANGO[:20]}... Release: {SENTRY_RELEASE} Env: {SENTRY_ENVIRONMENT}")
else:
    print("Sentry DSN for Django not found. Sentry integration disabled for backend.")


LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'filters': {
        'request_id_filter': {
            '()': 'middleware.request_logging.RequestIdFilter',
        }
    },
    'formatters': {
        'verbose': {
            'format': '{levelname} {asctime} {module} {process:d} {thread:d} {message}',
            'style': '{',
        },
        'simple': {
            'format': '{levelname} {asctime} {module}: {message}',
            'style': '{',
        },
        'json': {
            '()': 'pythonjsonlogger.jsonlogger.JsonFormatter',
            'format': '%(levelname)s %(asctime)s %(correlation_id)s %(user_id)s %(module)s %(process)d %(thread)d %(name)s %(pathname)s %(funcName)s %(lineno)d %(message)s',
        },
    },
    'handlers': {
        'console': {
            'level': 'DEBUG' if DEBUG else 'INFO',
            'class': 'logging.StreamHandler',
            'formatter': 'simple' if DEBUG else 'json',
            'filters': ['request_id_filter'],
        },
        'logfile_json': {
            'level': 'INFO',
            'class': 'logging.handlers.RotatingFileHandler',
            'filename': BASE_DIR / 'logs' / 'django_json.log',
            'maxBytes': 1024 * 1024 * 5,  # 5 MB
            'backupCount': 5,
            'formatter': 'json',
            'filters': ['request_id_filter'],
        },
        # Sentry handler is configured by sentry_sdk.init() if DSN is present
    },
    'loggers': {
        'django': {
            'handlers': ['console'] if DEBUG else ['console', 'logfile_json'],
            'level': 'INFO',
            'propagate': True, # Propagate to root so root handler filters apply
        },
        'django.request': {
            'handlers': ['console'] if DEBUG else ['console', 'logfile_json'],
            'level': 'WARNING',
            'propagate': False,
        },
        'django.db.backends': {
            'handlers': ['console'] if DEBUG else ['console', 'logfile_json'],
            'level': 'INFO',
            'propagate': False,
        },
        'middleware': {
            'handlers': ['console'] if DEBUG else ['console', 'logfile_json'],
            'level': 'INFO',
            'propagate': True,
        },
        'middleware.request_logging': { # Specific logger for the new middleware
            'handlers': ['console'] if DEBUG else ['console', 'logfile_json'],
            'level': 'INFO', # Or DEBUG if more verbose request/response logging is desired
            'propagate': False, # Usually False for specific middleware loggers if handled by root
        },
        'zion_backend': {
            'handlers': ['console'] if DEBUG else ['console', 'logfile_json'],
            'level': 'DEBUG' if DEBUG else 'INFO',
            'propagate': True,
        },
        'sentry_sdk': {
            'handlers': ['console'],
            'level': 'WARNING',
            'propagate': False,
        }
    },
    'root': {
        'handlers': ['console'] if DEBUG else ['console', 'logfile_json'],
        'level': 'DEBUG' if DEBUG else 'INFO',
        'filters': ['request_id_filter'], # Apply to root as well for any direct root logs
    },
}

# If Sentry is enabled, its LoggingIntegration will add its handler automatically
# to loggers based on its own level settings.
# The 'sentry' handler defined in some examples is often not needed if using LoggingIntegration.
