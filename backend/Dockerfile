# backend/Dockerfile
FROM python:3.10-slim

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /app

# Install system dependencies (if any are needed, e.g., for psycopg2, Pillow)
# RUN apt-get update && apt-get install -y ... && rm -rf /var/lib/apt/lists/*

# Install Poetry (if project were using Poetry) or just pip
# RUN pip install poetry
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
# COPY poetry.lock pyproject.toml ./
# RUN poetry install --no-dev --no-interaction --no-ansi

COPY . .

# Collect static files (if not using a separate static file server like S3/WhiteNoise with runserver off)
# RUN python manage.py collectstatic --noinput

# Expose the port Gunicorn will run on
EXPOSE 8000

# Copy entrypoint script and use it as the container's entrypoint. This script
# handles database migrations before starting Gunicorn.
COPY entrypoint.sh /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh

ENTRYPOINT ["/app/entrypoint.sh"]
