"""Utility to summarize bug log entries."""

import json
import os
from collections import Counter
import argparse

LOG_FILE = os.environ.get("BUG_LOG_FILE", os.path.join("logs", "bug", "bug_log.json"))


from datetime import datetime


def _parse_timestamp(ts: str) -> datetime | None:
    """Parse ISO timestamp into a datetime object."""
    try:
        return datetime.fromisoformat(ts.replace("Z", "+00:00"))
    except Exception:
        return None


def summarize_bug_log(
    log_file: str = LOG_FILE,
    top_n: int = 5,
    output: str | None = None,
    csv: str | None = None,
    severity: str | None = None,
    since: str | None = None,
    until: str | None = None,
) -> None:
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

    if severity:
        severity = severity.lower()
        logs = [
            entry for entry in logs if entry.get("severity", "").lower() == severity
        ]

    if since:
        since_dt = _parse_timestamp(since)
        if since_dt:
            logs = [
                e
                for e in logs
                if _parse_timestamp(e.get("timestamp", ""))
                and _parse_timestamp(e.get("timestamp")) >= since_dt
            ]

    if until:
        until_dt = _parse_timestamp(until)
        if until_dt:
            logs = [
                e
                for e in logs
                if _parse_timestamp(e.get("timestamp", ""))
                and _parse_timestamp(e.get("timestamp")) <= until_dt
            ]

    severities = Counter(entry.get("severity", "Unknown") for entry in logs)
    total = len(logs)
    print(f"\nBug Log Summary ({total} entries)\n{'-'*25}")
    for level, count in severities.items():
        print(f"{level}: {count}")

    common_errors = Counter(entry.get("error_message", "") for entry in logs)
    print("\nTop Errors:")
    for msg, count in common_errors.most_common(top_n):
        print(f"- {msg} ({count})")

    summary = {
        "total": total,
        "severities": severities,
        "top_errors": common_errors.most_common(top_n),
    }

    if output:
        with open(output, "w") as out_f:
            json.dump(summary, out_f, indent=4)
        print(f"Summary written to {output}")

    if csv:
        import csv as _csv
        with open(csv, "w", newline="") as csvfile:
            writer = _csv.writer(csvfile)
            writer.writerow(["Severity", "Count"])
            for level, count in severities.items():
                writer.writerow([level, count])
        print(f"CSV summary written to {csv}")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Summarize bug log entries")
    parser.add_argument(
        "log_file", nargs="?", default=LOG_FILE, help="Path to bug log JSON file"
    )
    parser.add_argument(
        "--top", type=int, default=5, help="Number of top errors to display"
    )
    parser.add_argument("--output", help="Optional output file to save JSON summary")
    parser.add_argument("--csv", help="Optional output file to save CSV summary")
    parser.add_argument("--severity", help="Filter results by severity level")
    parser.add_argument("--since", help="Only include logs after this ISO timestamp")
    parser.add_argument("--until", help="Only include logs before this ISO timestamp")
    args = parser.parse_args()

    summarize_bug_log(
        args.log_file,
        args.top,
        args.output,
        args.csv,
        args.severity,
        args.since,
        args.until,
    )
