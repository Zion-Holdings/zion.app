# Monitoring and Alerting System

This directory contains modules related to application monitoring, including performance checks and alerting.

## Hourly Notifications

The system can send hourly notifications summarizing key operational data. This is typically triggered by a scheduled job (e.g., a GitHub Actions workflow like `.github/workflows/hourly-jest.yml`).

### Features

The hourly notification can include:
-   **Slow Endpoints**: A list of application endpoints that have exceeded latency thresholds. (Note: Data for this needs to be populated into `notification_data/slow_endpoints.json` by a separate process if desired for the hourly summary).
-   **Patched Packages**: A list of npm packages that were automatically updated by `npm audit fix`.
-   **Test Status**: A summary of the latest automated test run, including pass/fail counts and code coverage percentage.
-   **Commit Link**: A direct link to the latest commit in the repository at the time of the notification.
-   **Custom Message**: A general message can also be included.

### Configuration

To enable and configure the hourly notifications, the following environment variables must be set in the environment where the notification script (`scripts/gather-notification-data.sh` which then calls `monitoring/src/send-alert-cli.ts`) is executed:

-   `ALERT_WEBHOOK_URL`: **Required**. The webhook URL for the desired notification channel (e.g., Slack, Discord). The notification is sent as a JSON payload with a `text` field containing the formatted message.
-   `GITHUB_REPOSITORY`: **Recommended**. The owner and repository name (e.g., `your-org/your-repo`). Used to construct direct commit links. Automatically available in GitHub Actions.
-   `GITHUB_SERVER_URL`: **Recommended**. The base URL of the GitHub instance (e.g., `https://github.com`). Used to construct direct commit links. Automatically available in GitHub Actions.
-   `GITHUB_WORKSPACE`: **Recommended (for local testing, auto in Actions)**. The path to the root of the repository. Used by scripts to define temporary data paths (e.g., for `notification_data/`). Automatically available in GitHub Actions.


### How it Works

1.  **Data Collection Scripts** (typically run in this order by a CI job):
    -   `scripts/hourly-npm-audit.sh`: Runs `npm audit fix --force --json`, extracts information about packages that were actually patched, and saves it to `$GITHUB_WORKSPACE/notification_data/patched_packages.json`.
    -   `scripts/run-hourly-tests.sh`: Runs Jest tests with coverage. This script also ensures Jest outputs its full results to `logs/tests/hourly-jest-results.json` and coverage reports (including `coverage-summary.json`) are generated.
    -   `scripts/check_coverage_and_notify.js` (called by `run-hourly-tests.sh`): Reads the Jest results from `logs/tests/hourly-jest-results.json` (for test counts) and `coverage-summary.json` (for coverage percentage). It then saves a formatted test status object to `$GITHUB_WORKSPACE/notification_data/test_status.json`.

2.  **Notification Assembly**:
    -   `scripts/gather-notification-data.sh`: This script is run after all data collection scripts. It:
        - Reads the JSON files created by the previous scripts (`patched_packages.json`, `test_status.json`).
        - Optionally reads `slow_endpoints.json` if populated by another process.
        - Gets the latest commit hash and constructs a commit link using `GITHUB_REPOSITORY` and `GITHUB_SERVER_URL`.
        - Assembles a comprehensive JSON payload (`NotificationPayload`).

3.  **Notification Dispatch**:
    -   If the assembled payload is not empty (i.e., it contains more than just a default commit link or empty data arrays) and `ALERT_WEBHOOK_URL` is set, `scripts/gather-notification-data.sh` calls the CLI: `node ./monitoring/dist/send-alert-cli.js "$PAYLOAD_JSON"` (or uses `ts-node` as a fallback).
    -   `monitoring/src/send-alert-cli.ts` (compiled to `.js`): Parses the JSON payload argument.
    -   It then uses the `sendWebhookNotification` function from `monitoring/src/alerter.ts` to send the assembled payload to the configured `ALERT_WEBHOOK_URL`.

### `alerter.ts` Module

-   **`sendWebhookNotification(payload: NotificationPayload)`**: This is the core function responsible for formatting the final message string from the `NotificationPayload` and sending it via an HTTP POST request (using `axios`) to the `ALERT_WEBHOOK_URL`.
-   **`triggerAlerts(result: EndpointTestResult)`**: This function is designed for real-time high-latency alerts. If an endpoint's latency exceeds `ALERT_THRESHOLD_MS`, it calls `sendWebhookNotification` with a payload focused on that specific slow endpoint and can also attempt to restart the associated service (e.g., via `pm2 restart`). This function is not directly part of the hourly aggregated notification but uses the same underlying `sendWebhookNotification` mechanism.
-   **Interfaces**: Defines `NotificationPayload`, `PatchedPackageInfo`, `TestStatusInfo` which structure the data for notifications.

### Customization

-   **Message Format**: The detailed message formatting logic is located in `monitoring/src/alerter.ts` within the `sendWebhookNotification` function. This can be customized (e.g., to use Slack's Block Kit UI instead of plain text) by modifying the message construction part of this function.
-   **Data Sources**: To add more information to the hourly notification:
    1.  Create or modify a script to collect the new data and save it as a JSON file in the `${GITHUB_WORKSPACE:-/tmp}/notification_data` directory.
    2.  Update `scripts/gather-notification-data.sh` to read this new JSON file and merge its content into the main payload.
    3.  If necessary, update the `NotificationPayload` interface in `monitoring/src/alerter.ts` to include a type definition for the new data.
    4.  Update `sendWebhookNotification` in `monitoring/src/alerter.ts` to include the new data in its formatted output.
-   **Alerting Thresholds**: The high-latency alert threshold (`ALERT_THRESHOLD_MS`) is defined in `monitoring/src/alerter.ts`. Coverage thresholds (`COVERAGE_THRESHOLD`) are in `scripts/check_coverage_and_notify.js`.

### Local Testing of Notifications

1.  Compile the TypeScript files in `monitoring/src/` to JavaScript in `monitoring/dist/` (e.g., using `tsc -p monitoring/tsconfig.json`).
2.  Manually create JSON files in a `notification_data` directory (e.g., `/tmp/notification_data/test_status.json` with some test data).
3.  Set the required environment variables:
    ```bash
    export ALERT_WEBHOOK_URL="your_test_webhook_url"
    export GITHUB_REPOSITORY="your-org/your-repo"
    export GITHUB_SERVER_URL="https://github.com"
    export GITHUB_WORKSPACE="/path/to/your/local/repo/root" # Or where notification_data is
    ```
4.  Run the gather script: `bash scripts/gather-notification-data.sh`
    This will attempt to send a notification to your test webhook URL. Check the script's output for the payload it constructed and any errors.
```
