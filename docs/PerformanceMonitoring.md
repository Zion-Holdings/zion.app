# Performance Log Monitoring

This project includes a script to check application performance logs each week.
It calculates the average response time from `logs/performance.log`.
If the average exceeds **500ms** it automatically opens a pull request asking to
scale infrastructure or enable profiling/tracing.

## Usage

1. Install and authenticate the GitHub CLI (`gh`).
2. Run `npx ts-node scripts/check-performance-logs.ts`.
   - Optionally set `PERFORMANCE_LOG_FILE` or `PERFORMANCE_THRESHOLD_MS`.
3. Schedule the command with cron or a CI workflow to run weekly.

The log file may contain JSON lines with `response_time_ms` fields or lines with
values like `123ms`. The script parses both formats when computing the average.
