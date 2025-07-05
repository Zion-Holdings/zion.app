# 📝 Logs Health Summary (2025-07-04)

## Overview
The latest `node scripts/analyze-error-logs.cjs --summary` execution produced a summary file in `logs/summary/summary-1751672127827.log`. Overall system health is fair with a few actionable warnings.

## Findings
- **Environment Variables**: The analysis suggests verifying `NEXT_PUBLIC_REOWN_PROJECT_ID` and other required variables.
- **Map Usage**: "map is not a function" errors were found in `build.log`. Review any array mapping logic for incorrect types or missing data.
- **Router Context**: Warnings about `useNavigate()` hooks used outside of a Router wrapper were detected.
- **Webpack Cache**: Messages indicate conflicts with `cacheUnaffected` and `usedExports`.

## Recommendation
Run `npm run logs:health` periodically and address the hints above to maintain stability.
