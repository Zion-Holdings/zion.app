# Django Backend

This directory contains the Django services that power core APIs for the Zion platform.

## Setup

1. Install Python 3.10 or newer and `virtualenv`.
2. Create a virtual environment and activate it:
   ```bash
   python -m venv venv
   source venv/bin/activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Apply database migrations and start the server:
   ```bash
   python manage.py migrate
   python manage.py runserver
   ```

Environment variables can be configured in a `.env` file. See `../.env.example` for common variables.
