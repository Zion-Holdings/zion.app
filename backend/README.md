# Django Backend

This directory contains the Django backend for the Zion platform. It provides specialized services including the IPO Portal, Governance module, Public API key management, and core authentication features like password reset.

## Core Technologies

- Python
- Django
- Django REST Framework (for APIs like Governance)
- PostgreSQL (production database, SQLite for local dev as per settings)
- Redis (for caching)
- Celery (Assumed for background tasks, though not explicitly verified - **TODO: Verify if Celery or another task queue is used and update**)
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
    *   Redis server (for caching and potentially Django Channels if used - **TODO: Verify Redis usage scope**)

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

-   **TODO:** Add instructions on how to run backend-specific tests (e.g., `python manage.py test <app_name>`, or if `pytest` is used). Include any specific setup needed for the test environment.

## API Documentation

-   The `public_api` and `governance` apps (and potentially others) expose DRF endpoints.
-   Swagger UI for these APIs is available at `/swagger/` when the development server is running.

## Key Architectural Decisions & Notes

-   Uses Django REST Framework for building robust APIs.
-   Integrates `django-otp` for 2FA.
-   Custom middleware for error handling (`middleware/error_handler.py`) is present.
-   Role-based access control seems to be implemented, especially in `ipo_portal`.
-   **TODO:** Document any significant architectural patterns, choice of specific libraries, or important configurations developers should be aware of.

## Deployment

-   **TODO:** Add details about how this Django application is containerized (if it is) and deployed to staging/production environments. Reference any specific Dockerfiles or deployment scripts if they are separate from the root ones.
