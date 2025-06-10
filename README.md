# URL Performance Monitoring Service

This Node.js service monitors specified frontend pages and backend endpoints, records their response time and status, and logs this information. If a monitored URL's response time exceeds a configured threshold for a set number of consecutive checks, it triggers a performance optimization script.

## Features

- Monitors multiple URLs concurrently.
- Logs response time, status, and timestamp for each check.
- Configurable check interval, response time threshold, and consecutive check limit.
- Triggers a customizable shell script (`optimize.sh`) when performance degradation is detected.
- Logs metrics to a local file (`performance.log` by default).

## Monitoring and Automation
- [Configuration File Integrity Monitoring](./docs/config_integrity_monitoring.md)

## Project Structure

```
.
├── config.json           # Configuration file for URLs, thresholds, etc.
├── optimize.sh           # Shell script triggered for performance optimization.
├── package.json          # Project dependencies and scripts.
├── performance.log       # Log file for performance metrics (ignored by git).
├── README.md             # This file.
├── src/
│   ├── alerter.js        # Logic for alert conditions and triggering optimization.
│   ├── index.js          # Main entry point of the service.
│   ├── logger.js         # Module for logging metrics to a file.
│   └── monitor.js        # Module for checking URL status and response times.
└── test-server.js        # A simple Express server for testing purposes.
```

## Setup

1.  **Clone the repository (if applicable) or download the files.**

2.  **Install Node.js and npm:**
    Ensure you have Node.js (which includes npm) installed on your system. You can download it from [https://nodejs.org/](https://nodejs.org/).

3.  **Install dependencies:**
    Navigate to the project's root directory in your terminal and run:
    ```bash
    npm install
    ```

4.  **Configure the service:**
    Edit the `config.json` file in the project root:
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
    *   `logFile`: Path to the file where performance metrics will be logged.

5.  **Review and customize `optimize.sh`:**
    The `optimize.sh` script is a placeholder. You should customize it to perform actual optimization tasks relevant to your environment (e.g., clearing caches, restarting services with PM2/Docker, rebuilding assets).
    Ensure the script is executable:
    ```bash
    chmod +x optimize.sh
    ```
    *(This should have been set during project setup, but verifying is good practice.)*

## Running the Service

To start the monitoring service, run the following command from the project's root directory:

```bash
node src/index.js
```

The service will start logging to the console and to the specified log file. It will perform its first check immediately and then continue based on the `checkIntervalMinutes` in the configuration.

## Running the Test Server (Optional)

A simple Express.js server is provided in `test-server.js` to help test the monitoring service. It has a few endpoints:
*   `/fast`: Responds quickly.
*   `/slow`: Responds after 1 second (to test high response times).
*   `/flaky`: Responds normally 50% of the time, and slowly 50% of the time.
*   `/error`: Responds with a 500 error.

To run the test server:
1.  Install Express if you haven't (it might have been installed as part of dev setup): `npm install express`
2.  Start the server (it runs on port 3000 by default):
    ```bash
    node test-server.js
    ```
    You can then add `http://localhost:3000/fast` and `http://localhost:3000/slow` to your `config.json` to test the monitor.

## How it Works

1.  The `index.js` script loads the configuration from `config.json`.
2.  It schedules a cron job using `node-cron` to run at the specified interval.
3.  In each cycle, `monitor.js` fetches each URL in `urlsToMonitor`, recording response time and status.
    *   Memory usage is currently logged as "N/A" for URLs. The `pidusage` library is included for potential future use if monitoring specific local PIDs.
4.  `logger.js` appends these metrics to the `logFile` in JSON line format.
5.  `alerter.js` checks if any URL has exceeded `responseTimeThresholdMs` for `consecutiveChecksLimit` times.
6.  If the alert condition is met, `alerter.js` executes `optimize.sh`, passing the problematic URL as an argument, and resets the alert counter for that URL.

## Logs

Performance metrics are logged to the file specified by `logFile` in `config.json` (default: `performance.log`). Each log entry is a JSON object on a new line, for example:

```json
{"timestamp":"2023-10-27T10:00:05.123Z","url":"http://localhost:3000/slow","status":200,"responseTime":1005,"memoryUsage":"N/A","error":null}
{"timestamp":"2023-10-27T10:00:05.456Z","url":"https://www.google.com","status":200,"responseTime":150,"memoryUsage":"N/A","error":null}
```
Console logs provide real-time information about the service's operations, including when monitoring cycles start/end and when alerts are triggered.

## Generating Test Logs

For offline debugging you can run the test suite and capture the output by using the helper script `scripts/generate-tests-log.sh`.

```bash
bash scripts/generate-tests-log.sh
```

This creates timestamped log files in `logs/tests/` containing the console output and Jest JSON results.
