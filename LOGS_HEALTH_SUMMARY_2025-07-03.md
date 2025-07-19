# 📝 Logs Health Summary (2025-07-03)

## Overview

The latest `npm run logs:summary` execution shows no active runtime errors, but a few configuration issues remain. Overall system health is good.

## Findings

- **Environment Variables**: Detected suggestion to check `NEXT_PUBLIC_REOWN_PROJECT_ID`. Ensure this variable is defined and not a placeholder.
- **Map Usage**: Log analysis flagged "map is not a function" errors. Review any array mapping logic for incorrect types.
- **Router Context**: Warnings indicate `useNavigate()` hooks might be called outside of a Router. Wrap affected components in a Router provider.
- **Missing Translation Keys**: Several i18n keys such as `nav.cart` and `nav.marketplace_overview` are missing across locales.

## Recommendation

Run `npm run logs:health` regularly and address the hints above to keep the project in a stable state.
