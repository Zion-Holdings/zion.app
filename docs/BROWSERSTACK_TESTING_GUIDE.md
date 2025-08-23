# Cross-Browser and Device Testing Guide

This guide explains how to run the Playwright end-to-end tests on BrowserStack to ensure the Zion application works across multiple browsers and mobile devices.

## Configuration

1. **Credentials**: Set the following environment variables with your BrowserStack credentials:
   - `BROWSERSTACK_USERNAME`
   - `BROWSERSTACK_ACCESS_KEY`

2. **BrowserStack Config**: The `browserstack.config.ts` file defines Playwright projects for common desktop and mobile browsers. It reuses the tests in `tests/e2e` and outputs reports to `playwright-logs/`.

## Running Tests

Use the npm script to execute the tests on BrowserStack:

```bash
npm run test:browserstack
```

The script invokes Playwright with the BrowserStack configuration and will run the suite on Chrome, Firefox, Safari, and popular mobile devices.

## Viewing Results

After the run completes, detailed results are available in the BrowserStack dashboard. A local HTML report is also generated under `playwright-logs/html-report` for reference.
