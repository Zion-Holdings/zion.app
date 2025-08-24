# Generating Test Logs

This project includes a helper script for running the Jest test suite and saving the output to log files. The script is useful when you need to analyze test results in an offline environment.

## Usage

1. Ensure all dependencies are installed (run `./setup.sh npm` when online).
2. Execute the script:

```bash
bash scripts/generate-tests-log.sh
```

The script creates a new log directory at `logs/tests` (if it does not already exist) and stores two files for each run:

- `test-<timestamp>.log` – the full console output from Jest
- `test-results-<timestamp>.json` – the Jest JSON results

You can inspect these files to review failures and other details without needing to rerun the test suite.
