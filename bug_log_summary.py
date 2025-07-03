import json
import os
from collections import Counter
import argparse

LOG_FILE = os.environ.get("BUG_LOG_FILE", os.path.join("logs", "bug", "bug_log.json"))


def summarize_bug_log(log_file: str = LOG_FILE, top_n: int = 5, output: str | None = None) -> None:
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
    for msg, count in common_errors.most_common(top_n):
        print(f"- {msg} ({count})")

    if output:
        with open(output, "w") as out_f:
            summary = {
                "total": total,
                "severities": severities,
                "top_errors": common_errors.most_common(top_n),
            }
            json.dump(summary, out_f, indent=4)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Summarize bug log entries")
    parser.add_argument("log_file", nargs="?", default=LOG_FILE, help="Path to bug log JSON file")
    parser.add_argument("--top", type=int, default=5, help="Number of top errors to display")
    parser.add_argument("--output", help="Optional output file to save JSON summary")
    args = parser.parse_args()

    summarize_bug_log(args.log_file, args.top, args.output)
