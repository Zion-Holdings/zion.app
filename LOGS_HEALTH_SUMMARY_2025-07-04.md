# 📝 Logs Health Summary (2025-07-04)

## Overview

A quick log scan using `scripts/analyze-error-logs.cjs` flagged potential runtime issues. The most notable recurring message was `"map is not a function"` which can occur when API responses are null.

## Findings

- **Map Usage**: Several service and hook functions used `data.map(...)` without verifying that `data` is an array.
- **Environment Variables**: Warnings suggest verifying `NEXT_PUBLIC_REOWN_PROJECT_ID` and other `.env` values.
- **Router Context**: Some logs mention `useNavigate` outside of a Router.

## Fixes Implemented

- Updated multiple hooks and services to safely map over `(data ?? [])`.
- Added comments explaining the fallback logic.

Run `node scripts/analyze-error-logs.cjs . --summary` regularly to catch new issues early.
