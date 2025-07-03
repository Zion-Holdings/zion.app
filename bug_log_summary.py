import json
import os
from collections import Counter

LOG_FILE = os.environ.get("BUG_LOG_FILE", os.path.join("logs", "bug", "bug_log.json"))


def summarize_bug_log(log_file: str = LOG_FILE) -> None:
    if not os.path.exists(log_file):
        print(f"No bug log found at {log_file}")
        return

    with open(log_file, "r") as f:
        try:
            logs = json.load(f)
        except json.JSONDecodeError as e:
            print(f"Failed to parse log file {log_file}: {e}")
            return

    if not isinstance(logs, list):
        print(f"Unexpected log format in {log_file}")
        return

    severities = Counter(entry.get("severity", "Unknown") for entry in logs)
    total = len(logs)
    print(f"\nBug Log Summary ({total} entries)\n{'-'*25}")
    for level, count in severities.items():
        print(f"{level}: {count}")

    common_errors = Counter(entry.get("error_message", "") for entry in logs)
    print("\nTop Errors:")
    for msg, count in common_errors.most_common(5):
        print(f"- {msg} ({count})")


if __name__ == "__main__":
    summarize_bug_log()
