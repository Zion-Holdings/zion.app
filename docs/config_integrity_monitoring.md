# Configuration File Integrity Monitoring

This document describes the setup and usage of the `monitor_config_changes.sh` script, which is designed to detect unauthorized changes to critical configuration files, log them, send alerts, and attempt to revert them using Git.

## Purpose

The script helps maintain system stability and security by:
- Monitoring a list of critical configuration files for any modifications.
- Calculating and comparing SHA-256 checksums to detect changes.
- Logging all actions, detections, and errors to `logs/security/config_integrity.log`.
- Storing baseline checksums in `logs/security/checksums.txt`.
- Sending notifications via a webhook if changes are detected.
- Automatically reverting Git-tracked files to their last committed state (HEAD) if they are altered.

## Setup and Configuration

### 1. Monitored Files

The list of files to monitor is managed in `scripts/config_integrity_check.txt`. Each line in this file should be a path to a file relative to the project root.

Example `scripts/config_integrity_check.txt`:
```
.env
config.json
package.json
# Add other critical files here
```
- Lines starting with `#` are treated as comments and ignored.
- Empty lines are also ignored.

### 2. Notification Webhook

To receive notifications, set the `YOUR_WEBHOOK_URL_ENV_VAR` environment variable to your desired webhook URL before running the script or ensure it's available in the cron job's execution environment.

```bash
export YOUR_WEBHOOK_URL_ENV_VAR="https://your.webhook.provider.com/endpoint"
```
If this variable is not set, the script will log a warning but continue to operate without sending notifications. The script uses `curl` to send JSON payloads and requires `jq` to format the JSON. Ensure both utilities are installed if using webhooks.

### 3. Logging

- **Main Log File**: `logs/security/config_integrity.log`
  - Contains detailed, timestamped logs of all actions, including files checked, changes detected, revert attempts, errors, and notification statuses.
- **Checksums File**: `logs/security/checksums.txt`
  - Stores the last known valid SHA-256 checksum for each monitored file. Format: `<checksum> <filepath>`. This file is automatically managed by the script.

The `logs/security/` directory will be created by the script if it doesn't exist.

### 4. Cron Job Setup

To run the script automatically at regular intervals (e.g., hourly), a cron job needs to be configured. A sample cron file `cron/hourly_config_integrity_check` is provided:

```cron
# Hourly check for unauthorized configuration file changes
0 * * * * cd /path/to/zion.app && ./scripts/monitor_config_changes.sh > /dev/null 2>&1
```

**Important**:
- Replace `/path/to/zion.app` with the **absolute path** to the root of this project on the server where the cron job will run.
- The script `scripts/monitor_config_changes.sh` must be executable (`chmod +x scripts/monitor_config_changes.sh`).
- Output is redirected to `/dev/null` because the script manages its own comprehensive log file. Review cron daemon settings if email notifications for cron execution itself are desired.

## Script Behavior

- **Initial Run**: On the first run (or when a new file is added to `config_integrity_check.txt`), the script calculates the checksum of each file and stores it in `checksums.txt`, logging that the file is now being tracked.
- **Change Detection**: If a file's current checksum doesn't match the stored one:
    - The change is logged.
    - A notification is sent.
    - **Revert Action**:
        - If the file is tracked by Git, the script attempts `git checkout HEAD -- <file_path>` to revert it. The outcome (success/failure) is logged and included in the notification. The checksum in `checksums.txt` is updated to reflect the state after the revert attempt.
        - If the file is not tracked by Git, a warning is logged, and the checksum in `checksums.txt` is updated to the new, modified checksum. No revert is possible via Git.
- **File Not Found**: If a file listed in `config_integrity_check.txt` is not found:
    - A warning is logged.
    - If the file was previously tracked (i.e., an entry existed in `checksums.txt`), the script attempts to restore it using `git checkout HEAD -- <file_path>`.
    - The outcome of the restore attempt is logged. On success, the file's new checksum is stored and a notification is sent indicating the file was restored. On failure, a notification is still sent and the file is removed from tracking until manually restored.
- **No Changes**: If a file is unchanged, the script typically logs this minimally or not at all to keep the main log focused on events. Its entry in `checksums.txt` remains the same.

## Manual Execution

You can run the script manually from the project root:
```bash
./scripts/monitor_config_changes.sh
```
This is useful for testing or immediate checks.

## Testing

A detailed test plan with manual verification steps can be found in `TEST_PLAN.md`. This includes scenarios for file changes, deletions, new files, and notification checks.
