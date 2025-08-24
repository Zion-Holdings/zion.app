#!/bin/sh

# Apply database migrations
python manage.py migrate --noinput

# Collect static files if needed (uncomment if using collectstatic)
# python manage.py collectstatic --noinput

# Start Gunicorn server
exec gunicorn django_backend.wsgi:application --bind 0.0.0.0:8000 --workers 3
