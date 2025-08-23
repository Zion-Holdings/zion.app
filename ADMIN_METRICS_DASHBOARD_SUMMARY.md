# Admin Metrics Dashboard

## Overview
- Adds a private `/admin/performance` route showing system metrics.
- Reuses the existing development dashboard UI behind an admin gate.
- Only `founder`, `admin` and `finance` roles can access the page.
- Displays a loading skeleton while checking auth and fetching metrics.
