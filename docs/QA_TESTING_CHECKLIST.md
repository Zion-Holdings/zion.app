# QA Testing Checklist

This checklist provides a quick reference for running automated tests and common manual QA steps before a release.

## Automated Tests ✅
- [ ] Install dependencies with `./setup.sh npm`.
- [ ] Run unit tests with `npm run test`.
- [ ] Run end-to-end tests with `npm run cypress:run` (requires a browser installed).
- [ ] Optional: generate a test log with `bash scripts/generate-tests-log.sh`.

## Manual QA 📝
- [ ] Verify user registration and login flows.
- [ ] Complete a checkout in test mode (see `docs/Payments.md`).
- [ ] Test language switching and theme toggle on multiple browsers.
- [ ] Confirm pages load without console errors.

Regularly following this checklist helps catch regressions and ensures the application works as expected in real-world scenarios.
