from pathlib import Path
import os

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
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'middleware.error_handler.ErrorHandlingMiddleware', # Added
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django_otp.middleware.OTPMiddleware',
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
