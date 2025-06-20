# URL Performance Monitoring Service

This Node.js service monitors specified frontend pages and backend endpoints, records their response time and status, and logs this information. If a monitored URL's response time exceeds a configured threshold for a set number of consecutive checks, it triggers a performance optimization script.

## Features

- Monitors multiple URLs concurrently.
- Logs response time, status, and timestamp for each check.
- Configurable check interval, response time threshold, and consecutive check limit.
- Triggers a customizable shell script (`../optimize.sh`) when performance degradation is detected.
- Logs metrics to a local file (`../performance.log` by default, path configurable in `../config.json`).

## Monitoring and Automation
- [Configuration File Integrity Monitoring](../docs/config_integrity_monitoring.md)

## Project Structure

```
monitoring/
├── package.json          # Project dependencies and scripts for the monitoring service
├── README.md             # This file
├── src/
│   ├── alerter.ts        # Logic for alert conditions and triggering optimization
│   ├── index.ts          # Main entry point of the service
│   ├── logger.ts         # Module for logging metrics to a file
│   └── monitor.ts        # Module for checking URL status and response times
├── tsconfig.json         # TypeScript configuration for the monitoring service
../
├── config.json           # Configuration file for URLs, thresholds, etc. (project root)
├── optimize.sh           # Shell script triggered for performance optimization (project root)
├── performance.log       # Log file for performance metrics (project root, gitignored)
└── test-server.js        # A simple Express server for testing (project root)
```
- `package.json`: Defines dependencies and scripts specific to the monitoring service.
- `README.md`: This file, providing details about the monitoring service.
- `src/`: Contains the TypeScript source code for the service (`alerter.ts`, `index.ts`, `logger.ts`, `monitor.ts`).
- `tsconfig.json`: TypeScript compiler options for this service.
- `../config.json`: The main configuration file, located in the project root.
- `../optimize.sh`: The optimization script, located in the project root.
- `../performance.log`: Default log file, located in the project root.
- `../test-server.js`: Test server, located in the project root.


## Setup

1.  **Clone the repository (if applicable) or download the files.** Ensure the entire project structure, including the parent directory files, is in place.

2.  **Install Node.js and npm:**
    Ensure you have Node.js (which includes npm) installed on your system. You can download it from [https://nodejs.org/](https://nodejs.org/).

3.  **Install dependencies for the monitoring service:**
    Navigate to this directory (`monitoring/`) in your terminal and run:
    ```bash
    npm install
    ```
    This will install dependencies listed in `monitoring/package.json`. (Note: The root directory also has a `package.json` for the main Zion project.)

4.  **Configure the service:**
    Edit the `../config.json` file (located in the project root):
    ```json
    {
      "urlsToMonitor": [
        "http://localhost:3000/fast",
        "http://localhost:3000/slow",
        "https://www.google.com"
      ],
      "checkIntervalMinutes": 5,
      "responseTimeThresholdMs": 500,
      "consecutiveChecksLimit": 3,
      "logFile": "performance.log"
    }
    ```
    *   `urlsToMonitor`: An array of URLs to monitor.
    *   `checkIntervalMinutes`: How often to check the URLs (in minutes).
    *   `responseTimeThresholdMs`: The response time (in milliseconds) above which a check is considered "high".
    *   `consecutiveChecksLimit`: The number of consecutive high response times before triggering the optimization script.
    *   `logFile`: Path to the file where performance metrics will be logged (relative to the project root, e.g., `performance.log` or `../performance.log` if running from `monitoring/`). Ensure the path in `config.json` correctly points to the desired location from the project root if you change it. The default `performance.log` implies it's in the same directory as `config.json`.

5.  **Set environment variables (optional):**
    Copy `.env.example` to `.env` in the project root and adjust any values needed for your setup.
    Important variables include:
    * `DJANGO_API_BASE_URL`, `NEXTJS_API_BASE_URL`, `CUSTOM_SERVER_BASE_URL` –
      base URLs for services you want to monitor.
    * `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`,
      `SUPABASE_SERVICE_ROLE_KEY` – credentials required for Supabase
      authentication (used for login).
    * `ALERT_WEBHOOK_URL` – a webhook endpoint (Slack, Discord, etc.) for alert
      notifications.
    * `LOG_LEVEL` – logging verbosity (`error`, `warn`, `info`, `debug`).
    *(Note: Ensure these environment variables are accessible to the monitoring service process, typically by loading them from a `.env` file in the project root when the service starts.)*

6.  **Review and customize `../optimize.sh`:**
    The `../optimize.sh` script (in the project root) now runs `npm run build` and attempts to restart the application using `pm2` or `systemctl` if available. Adjust the commands as needed for your environment.
    Ensure the script is executable:
    ```bash
    chmod +x ../optimize.sh
    ```
    *(This should have been set during project setup, but verifying is good practice.)*

## Running the Service

To start the monitoring service, navigate to this directory (`monitoring/`) and run:

```bash
node src/index.js
```
Alternatively, if a start script is defined in `monitoring/package.json` (e.g., `npm start`), you can use that from within the `monitoring/` directory.

The service will start logging to the console and to the specified log file (e.g., `../performance.log`). It will perform its first check immediately and then continue based on the `checkIntervalMinutes` in the configuration.

## Running the Test Server (Optional)

A simple Express.js server is provided in `../test-server.js` (in the project root) to help test the monitoring service. It has a few endpoints:
*   `/fast`: Responds quickly.
*   `/slow`: Responds after 1 second (to test high response times).
*   `/flaky`: Responds normally 50% of the time, and slowly 50% of the time.
*   `/error`: Responds with a 500 error.

To run the test server (from the project root directory):
1.  Install Express if you haven't (it might have been installed as part of dev setup in the root `package.json`): `npm install express` (run in project root).
2.  Start the server (it runs on port 3000 by default):
    ```bash
    node ../test-server.js
    ```
    (If you are in the project root, this would be `node test-server.js`)
    You can then add `http://localhost:3000/fast` and `http://localhost:3000/slow` to your `../config.json` to test the monitor.

## Running Tests

Tests specific to the monitoring service might be defined in its `monitoring/package.json`. If so, run them from within the `monitoring/` directory:

```bash
npm run test
```
(Assuming a "test" script exists in `monitoring/package.json`)

## How it Works

1.  The `src/index.ts` script (main entry point) loads the configuration from `../config.json`.
2.  It schedules a cron job using `node-cron` to run at the specified interval.
3.  In each cycle, `src/monitor.ts` fetches each URL in `urlsToMonitor`, recording response time and status.
    *   Memory usage is currently logged as "N/A" for URLs. The `pidusage` library is included for potential future use if monitoring specific local PIDs.
4.  `src/logger.ts` appends these metrics to the `logFile` (e.g., `../performance.log`) in JSON line format.
5.  `src/alerter.ts` checks if any URL has exceeded `responseTimeThresholdMs` for `consecutiveChecksLimit` times.
6.  If the alert condition is met, `src/alerter.ts` executes `../optimize.sh`, passing the problematic URL as an argument, and resets the alert counter for that URL.

## Logs

Performance metrics are logged to the file specified by `logFile` in `../config.json` (default: `../performance.log`). Each log entry is a JSON object on a new line, for example:

```json
{"timestamp":"2023-10-27T10:00:05.123Z","url":"http://localhost:3000/slow","status":200,"responseTime":1005,"memoryUsage":"N/A","error":null}
{"timestamp":"2023-10-27T10:00:05.456Z","url":"https://www.google.com","status":200,"responseTime":150,"memoryUsage":"N/A","error":null}
```
Console logs provide real-time information about the service's operations, including when monitoring cycles start/end and when alerts are triggered.

## Generating Test Logs

For offline debugging you can run the test suite and capture the output by using the helper script `scripts/generate-tests-log.sh` (if this script is intended for the monitoring service and present in `monitoring/scripts/` or adjusted to be run from the root for `monitoring` tests).

```bash
bash scripts/generate-tests-log.sh
```
(Path might need adjustment based on script location and CWD)

This creates timestamped log files in `logs/tests/` containing the console output and Jest JSON results.
