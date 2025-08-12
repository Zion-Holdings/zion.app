# ⏰ Scheduled Audits Enhancement

## ✅ Overview
- Weekly workflow now performs automatic dependency and security checks.
- Added build and performance analysis to catch regressions early.

## 🚀 Implementation Details
1. **Workflow Update**
   - `.github/workflows/scheduled-audits.yml` now installs dependencies, runs security audits, builds the app, and executes `scripts/performance-check.cjs`.
   - Performance output is saved as an artifact (`performance-report.log`).
2. **Performance Script**
   - `scripts/performance-check.cjs` analyzes bundle size, TypeScript compilation, vulnerability status and dependency counts.
   - Ensures the production build stays healthy over time.

## 📂 Key Files
- Updated workflow: `.github/workflows/scheduled-audits.yml`
- Summary documentation: `SCHEDULED_AUDITS_SUMMARY.md`
