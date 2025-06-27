# Django Backend
This directory contains the Django backend for the Zion platform. It provides specialized services including the IPO Portal, Governance module, Public API key management, and core authentication features like password reset.

## Core Technologies

- Python
- Django
- Django REST Framework (for APIs like Governance)
- PostgreSQL (production database, SQLite for local dev as per settings)
- Redis (for caching and used by Django Channels for websocket features)
- Celery (used for background jobs such as email delivery and long running tasks)
- Gunicorn (for WSGI serving)

## Modules / Key Apps

- `authentication`: Handles password reset and potentially other auth-related utilities.
- `public_api`: Manages external API key generation, validation, and access.
- `ipo_portal`: A comprehensive portal for IPO management, including 2FA, data room, KPI tracking, investor updates (PDFs, email tracking).
- `governance`: Powers the DAO-like proposal and voting system.
- `deployment`: Appears to be related to deployment configurations or tracking.
- `django_otp`: Integrated for Two-Factor Authentication in the IPO Portal.

## Setup and Local Development

1.  **Prerequisites:**
    *   Python 3.x (refer to project's Python version, e.g., 3.10)
    *   Pip (Python package installer)
    *   PostgreSQL server (for production-like setup) or ensure SQLite is sufficient for your needs.
    *   Redis server (required for caching and for Django Channels websocket support)

2.  **Create and Activate a Virtual Environment:**
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows: venv\Scripts\activate
    ```

3.  **Install Dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

4.  **Configure Environment Variables:**
    *   This project likely uses environment variables for sensitive settings (e.g., `SECRET_KEY`, `DATABASE_URL`, `REDIS_URL`, `SENDGRID_API_KEY`).
    *   There might be a `.env.example` file or similar in this directory or the root. If not, create a `.env` file based on `backend/django_backend/settings.py` and populate it.
    *   Key variables to look for:
        *   `SECRET_KEY`
        *   `DEBUG` (True/False)
        *   `DATABASE_URL` (e.g., `postgres://user:password@host:port/dbname`) or individual `DB_NAME`, `DB_USER`, etc.
        *   `REDIS_URL` (e.g., `redis://localhost:6379/1`)
        *   `SENDGRID_API_KEY`
        *   `ALLOWED_HOSTS`

5.  **Database Migrations:**
    ```bash
    python manage.py migrate
    ```

6.  **Create a Superuser (Optional, for Admin Access):**
    ```bash
    python manage.py createsuperuser
    ```

7.  **Run the Development Server:**
    ```bash
    python manage.py runserver
    ```
    The backend will typically be available at `http://127.0.0.1:8000`.

## Running Tests

Run the Django test suite using the built-in `manage.py` command:

```bash
python manage.py test
```

If the project later adopts `pytest`, the same command can be swapped for
`pytest` with any desired flags.

## API Documentation

-   The `public_api` and `governance` apps (and potentially others) expose DRF endpoints.
-   Swagger UI for these APIs is available at `/swagger/` when the development server is running.

## Key Architectural Decisions & Notes

-   Uses Django REST Framework for building robust APIs.
-   Integrates `django-otp` for 2FA.
-   Custom middleware for error handling (`middleware/error_handler.py`) is present.
-   Role-based access control seems to be implemented, especially in `ipo_portal`.
-   Celery workers run alongside the Django app and communicate through Redis, enabling asynchronous task processing for tasks like email delivery.
-   The project follows a modular structure with each domain (authentication, IPO portal, governance) implemented as a dedicated Django app.
-   Environment variables drive configuration so the same container image can be promoted through staging and production without changes.

## Deployment

The backend includes a `Dockerfile` for containerized deployments. The image
copies the source code, installs dependencies from `requirements.txt`, and uses
an entrypoint script (`entrypoint.sh`) to apply database migrations before
starting Gunicorn. A typical build and run sequence looks like:

```bash
docker build -t zion-backend ./backend
docker run -p 8000:8000 zion-backend
```

Integration with the wider platform's Kubernetes or other deployment systems
should invoke this container image and provide environment variables (database
credentials, secret keys, etc.) as appropriate.
