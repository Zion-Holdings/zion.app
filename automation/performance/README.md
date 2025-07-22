# Performance Automation Scripts

This directory contains scripts to automatically scan for and fix common performance issues in both the frontend (React/Next.js) and backend (Django) codebases, as well as update dependencies.

## Scripts

- `frontend-fix.js`: Scans the frontend for performance anti-patterns (missing memoization, lack of virtualization, missing dynamic imports), suggests and applies fixes, and outputs a report.
- `backend-fix.py`: Scans the backend for performance anti-patterns (N+1 queries, missing select_related/prefetch_related, missing caching), suggests and applies fixes, and outputs a report.
- `dependency-update.js`: Checks for outdated npm/yarn dependencies in the frontend and updates them.
- `dependency-update.py`: Checks for outdated pip dependencies in the backend and updates them.

## Usage

### Frontend Performance Fix
```sh
cd automation/performance
node frontend-fix.js
```

### Backend Performance Fix
```sh
cd automation/performance
python3 backend-fix.py
```

### Frontend Dependency Update
```sh
cd automation/performance
node dependency-update.js
```

### Backend Dependency Update
```sh
cd automation/performance
python3 dependency-update.py
```

## Notes
- These scripts are designed to be run independently and can be integrated into CI/CD pipelines.
- The fix scripts currently output suggestions and are scaffolds for further automation.
- Always review changes before deploying to production. 