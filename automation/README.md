## Automation

This directory contains autonomous, credential-free local automations and logs.

- `auto-health-monitor/`: scans code for missing internal routes and missing public assets and logs to `automation/logs/auto-health-monitor.log`.
- `logs/`: central log directory used by all automations.

### Run locally

You can start any automation using Node 18+.

```
node automation/auto-health-monitor/index.mjs
```

It runs continuously and writes to both stdout and the log file.


