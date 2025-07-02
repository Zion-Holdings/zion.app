import json
import datetime
import os
import traceback
import argparse

# Allow customizing the log file location via environment variable
# Default to storing bug logs under logs/bug/bug_log.json so logs remain organized
LOG_FILE = os.environ.get("BUG_LOG_FILE", os.path.join("logs", "bug", "bug_log.json"))

def log_bug(
    error_message: str,
    stack_trace: str = None,
    severity: str = "Medium",
    module: str = None,
    steps_to_reproduce: str = None,
    expected_behavior: str = None,
    actual_behavior: str = None,
    environment: str = None,
    exc_info=None  # Allow passing exception info directly
):
    """
    Logs a bug or error to a JSON file.

    Args:
        error_message (str): The specific error message.
        stack_trace (str, optional): The full stack trace. If None and exc_info is provided,
                                     it will be generated. Defaults to None.
        severity (str, optional): Severity of the bug (e.g., Critical, High, Medium, Low).
                                  Defaults to "Medium".
        module (str, optional): The module or file where the error originated. Defaults to None.
        steps_to_reproduce (str, optional): Steps to trigger the bug. Defaults to None.
        expected_behavior (str, optional): What should have happened. Defaults to None.
        actual_behavior (str, optional): What actually happened. Defaults to None.
        environment (str, optional): Environment details (e.g., OS, Python version).
                                     Defaults to None.
        exc_info (exception info, optional): Typically the result of sys.exc_info().
                                             If provided, stack_trace will be formatted from it.
                                             Defaults to None.
    """
    timestamp = datetime.datetime.utcnow().isoformat() + "Z"

    if exc_info and not stack_trace:
        # Format the traceback from exception info
        # exc_type, exc_value, exc_tb = exc_info
        formatted_traceback = traceback.format_exception(*exc_info)
        stack_trace = "".join(formatted_traceback)
        if not error_message and exc_info[1]: # If error_message is not explicitly set, use the exception's message
            error_message = str(exc_info[1])


    bug_report = {
        "timestamp": timestamp,
        "error_message": error_message,
        "stack_trace": stack_trace,
        "severity": severity,
        "module": module,
        "steps_to_reproduce": steps_to_reproduce,
        "expected_behavior": expected_behavior,
        "actual_behavior": actual_behavior,
        "environment": environment,
    }

    try:
        # Ensure the directory for the log file exists
        os.makedirs(os.path.dirname(LOG_FILE) or ".", exist_ok=True)

        if os.path.exists(LOG_FILE):
            with open(LOG_FILE, "r") as f:
                try:
                    logs = json.load(f)
                    if not isinstance(logs, list): # Ensure it's a list
                        logs = []
                except json.JSONDecodeError:
                    logs = []  # File is corrupted or not valid JSON, start fresh
        else:
            logs = []

        logs.append(bug_report)

        with open(LOG_FILE, "w") as f:
            json.dump(logs, f, indent=4)

        print(f"Bug logged successfully to {LOG_FILE}")

    except IOError as e:
        print(f"Error writing to log file {LOG_FILE}: {e}")
    except Exception as e:
        print(f"An unexpected error occurred during logging: {e}")


def read_bug_logs(severity: str | None = None):
    """Read bug logs from LOG_FILE. Optionally filter by severity."""
    if not os.path.exists(LOG_FILE):
        return []
    try:
        with open(LOG_FILE, "r") as f:
            logs = json.load(f)
            if not isinstance(logs, list):
                return []
    except (IOError, json.JSONDecodeError):
        return []

    if severity:
        severity = severity.lower()
        logs = [log for log in logs if log.get("severity", "").lower() == severity]
    return logs


def bug_summary() -> dict:
    """Return a summary count of bugs per severity."""
    summary: dict[str, int] = {}
    for entry in read_bug_logs():
        sev = entry.get("severity", "Unknown")
        summary[sev] = summary.get(sev, 0) + 1
    return summary

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Bug logger utility")
    parser.add_argument("--summary", action="store_true", help="Print bug log summary and exit")
    parser.add_argument("--list", action="store_true", help="List all logged bugs and exit")
    args = parser.parse_args()

    if args.summary:
        print(json.dumps(bug_summary(), indent=2))
        raise SystemExit

    if args.list:
        print(json.dumps(read_bug_logs(), indent=2))
        raise SystemExit

    # Example usage when run without flags
    print("Running example logging...")

    # Example 1: Basic error
    log_bug(
        error_message="Null pointer access",
        severity="Critical",
        module="payment_processor.py",
        steps_to_reproduce="1. Go to checkout. 2. Enter card details. 3. Click 'Pay'.",
        expected_behavior="Payment processes successfully.",
        actual_behavior="Application crashes.",
        environment="Production Server, Python 3.9, Ubuntu 20.04"
    )

    # Example 2: Logging an exception
    try:
        x = 1 / 0
    except Exception as e:
        import sys
        log_bug(
            error_message="Division by zero in calculation module.", # Overriding default from exception
            module="calculator.py",
            severity="High",
            exc_info=sys.exc_info() # Pass exception info
        )

    # Example 3: Minimal log
    log_bug(error_message="Failed to load user settings.")

    print(f"Check {LOG_FILE} for logged bugs.")
    # To demonstrate reading it back (optional)
    if os.path.exists(LOG_FILE):
        with open(LOG_FILE, "r") as f:
            print("\nContent of bug_log.json:")
            print(f.read())
