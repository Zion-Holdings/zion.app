# Hourly NPM Audit and Auto-Fix Setup

This document describes how to set up and use the `scripts/hourly_audit.sh` script, which performs an hourly NPM audit, attempts to fix critical vulnerabilities, logs its actions, and sends a webhook notification.

## Prerequisites

1.  **`jq`**: This script uses `jq` to parse the JSON output from `npm audit`. If `jq` is not installed, the script will log an error (and notify via webhook if configured) and exit.
    *   To install `jq` (example for Debian/Ubuntu):
        ```bash
        sudo apt-get update
        sudo apt-get install jq
        ```
    *   For other systems, please refer to the official `jq` installation guide: [https://stedolan.github.io/jq/download/](https://stedolan.github.io/jq/download/)

2.  **`curl`**: This script uses `curl` to send webhook notifications. If `curl` is not installed and a webhook URL is provided, the script will log an error and exit.
    *   To install `curl` (example for Debian/Ubuntu):
        ```bash
        sudo apt-get update
        sudo apt-get install curl
        ```

3.  **`npm`**: The script relies on `npm` (version 7 or higher recommended for `npm audit` consistency) being installed and available in the environment where the script is run. It should be set up for your project (i.e., `package.json` and `package-lock.json` should exist).

## Script Overview

The `scripts/hourly_audit.sh` script performs the following actions:

1.  **Checks for `jq` and `curl`**: Ensures necessary tools are available.
2.  **Runs `npm audit --json`**: Gathers vulnerability information for your project.
3.  **Logs Actions**: All significant actions and outcomes are logged to `logs/security/hourly-fix.log` within your project directory. The `logs/security/` directory will be created if it doesn't exist.
4.  **Parses Vulnerabilities**: Uses `jq` to parse the audit results and count vulnerabilities by severity (critical, high, moderate, low, info).
5.  **Auto-fixes Critical Vulnerabilities**: If any critical vulnerabilities are detected, the script automatically runs `npm audit fix --force` to attempt to resolve them.
6.  **Sends Webhook Notification**: After processing, it sends a JSON payload to a configured `WEBHOOK_URL` with a summary of the audit, including:
    *   A general status message.
    *   Counts of vulnerabilities by severity (pre-fix attempt).
    *   A flag indicating if an attempt was made to fix critical vulnerabilities.

## Configuration

### Webhook URL

The script sends notifications to a webhook URL. This URL must be provided via an environment variable named `YOUR_WEBHOOK_URL_ENV_VAR`.

When setting up the CRON job, you'll need to ensure this environment variable is available to the script. For example:

```cron
0 * * * * YOUR_WEBHOOK_URL_ENV_VAR="https://your.webhook.receiver/endpoint" /path/to/your/project/scripts/hourly_audit.sh
```

Replace `https://your.webhook.receiver/endpoint` with your actual webhook URL.

If `YOUR_WEBHOOK_URL_ENV_VAR` is not set or is empty, the script will log a warning and skip the notification step.

## CRON Job Setup

To run the script hourly, you need to add an entry to your crontab.

1.  Open your crontab for editing:
    ```bash
    crontab -e
    ```

2.  Add a line similar to the following, adjusting the path to your project:

    ```cron
    0 * * * * YOUR_WEBHOOK_URL_ENV_VAR="https://your.webhook.receiver/endpoint" /path/to/your/project/scripts/hourly_audit.sh > /path/to/your/project/logs/security/cron.log 2>&1
    ```

    **Explanation:**
    *   `0 * * * *`: This specifies that the job should run at minute 0 of every hour, every day, every month, and every day of the week.
    *   `YOUR_WEBHOOK_URL_ENV_VAR="https://your.webhook.receiver/endpoint"`: Sets the environment variable for the webhook URL directly in the cron command. **Remember to replace the URL.**
    *   `/path/to/your/project/scripts/hourly_audit.sh`: **Replace this with the absolute path** to the `hourly_audit.sh` script in your project directory. Using an absolute path is crucial for cron jobs.
    *   `> /path/to/your/project/logs/security/cron.log 2>&1`: This redirects both standard output (stdout) and standard error (stderr) of the script to a separate cron log file. This is useful for debugging the cron job execution itself, while the script's own detailed logging goes to `logs/security/hourly-fix.log`. Ensure `/path/to/your/project/logs/security/` exists or that the script has permissions to create it if this specific log is desired. The main script log `hourly-fix.log` is created by the script itself.

3.  Save and close the crontab file. Your system's cron daemon will automatically pick up the changes.

## Log Files

*   **Application Log**: `logs/security/hourly-fix.log` (relative to your project root)
    *   Contains detailed, timestamped logs of the script's operations, including audit results, fix attempts, and webhook status.
*   **Cron Job Log (Optional but Recommended)**: `logs/security/cron.log` (or your chosen path)
    *   Contains stdout/stderr from the cron job execution itself. Useful for troubleshooting issues with the cron job not running or environment problems.

Make sure the `logs/security` directory is writable by the user running the cron job. The `hourly_audit.sh` script attempts to create this directory if it doesn't exist.
