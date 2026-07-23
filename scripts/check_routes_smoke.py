#!/usr/bin/env python3
"""Smoke check for ziontechgroup.com routes."""
import sys
import json
import time
import urllib.request
import urllib.error
from datetime import datetime
from pathlib import Path

BASE_URL = "https://ziontechgroup.com"
ROUTES_FILE = "/Users/klebergarciaalcatrao/config/smoke-routes.txt"
OUTPUT_DIR = Path("/Users/klebergarciaalcatrao/.hermes/cron/output/site-route-smoke-continuous")
MAX_ROUTES = 10  # root + up to 10 representative routes
TIMEOUT = 15


def load_routes(path: str) -> list[str]:
    with open(path) as f:
        routes = [line.strip() for line in f if line.strip() and not line.startswith("#")]
    return routes


def check_route(url: str, timeout: int = TIMEOUT) -> dict:
    """Check a single route, return dict with status."""
    start = time.time()
    req = urllib.request.Request(url, headers={"User-Agent": "ZionTech-SmokeCheck/1.0"})
    try:
        with urllib.request.urlopen(req, timeout=timeout) as resp:
            elapsed = time.time() - start
            return {
                "url": url,
                "status": resp.status,
                "ok": 200 <= resp.status < 400,
                "elapsed_ms": round(elapsed * 1000, 1),
                "error": None,
            }
    except urllib.error.HTTPError as e:
        elapsed = time.time() - start
        return {
            "url": url,
            "status": e.code,
            "ok": False,
            "elapsed_ms": round(elapsed * 1000, 1),
            "error": f"HTTP {e.code}",
        }
    except urllib.error.URLError as e:
        elapsed = time.time() - start
        return {
            "url": url,
            "status": 0,
            "ok": False,
            "elapsed_ms": round(elapsed * 1000, 1),
            "error": str(e.reason),
        }
    except Exception as e:
        elapsed = time.time() - start
        return {
            "url": url,
            "status": 0,
            "ok": False,
            "elapsed_ms": round(elapsed * 1000, 1),
            "error": str(e),
        }


def load_previous_results() -> dict:
    """Load the most recent previous results for comparison."""
    files = sorted(OUTPUT_DIR.glob("*.json"))
    if not files:
        return {}
    with open(files[-1]) as f:
        return json.load(f)


def compare_results(current: dict, previous: dict) -> list[str]:
    """Compare current results with previous, return list of changes."""
    changes = []
    # Previous format may use "route" (relative) or "url" (absolute)
    def get_key(r):
        if "url" in r:
            return r["url"]
        if "route" in r:
            return "https://ziontechgroup.com" + r["route"]
        return None

    prev_results = {get_key(r): r for r in previous.get("results", []) if get_key(r)}
    curr_results = {r["url"]: r for r in current.get("results", [])}

    all_urls = set(prev_results.keys()) | set(curr_results.keys())

    for url in sorted(all_urls):
        prev = prev_results.get(url)
        curr = curr_results.get(url)

        if prev and not curr:
            changes.append(f"REMOVED: {url} (was {prev.get('status', '?')} {'OK' if prev.get('ok') else 'FAIL'})")
        elif curr and not prev:
            changes.append(f"NEW: {url} -> {curr['status']} {'OK' if curr['ok'] else 'FAIL'}")
        elif prev and curr:
            prev_ok = prev.get("ok", False)
            curr_ok = curr.get("ok", False)
            if prev_ok != curr_ok:
                changes.append(
                    f"CHANGED: {url} {prev.get('status', '?')} {'OK' if prev_ok else 'FAIL'} -> "
                    f"{curr['status']} {'OK' if curr_ok else 'FAIL'}"
                )
            elif prev.get("status") != curr.get("status"):
                changes.append(
                    f"STATUS_CHANGED: {url} {prev.get('status')} -> {curr.get('status')} (both {'OK' if curr_ok else 'FAIL'})"
                )

    return changes


def main():
    routes = load_routes(ROUTES_FILE)
    # Select root + up to MAX_ROUTES representative routes
    selected = ["/"] + routes[1:MAX_ROUTES]

    print(f"Checking {len(selected)} routes against {BASE_URL}...")

    results = []
    for route in selected:
        url = BASE_URL + route
        result = check_route(url)
        results.append(result)
        status = "OK" if result["ok"] else "FAIL"
        print(f"  {status} {url} -> {result['status']} ({result['elapsed_ms']}ms)")

    timestamp = datetime.utcnow().isoformat() + "Z"
    report = {
        "timestamp": timestamp,
        "base_url": BASE_URL,
        "routes_checked": len(selected),
        "results": results,
    }

    # Save current results
    output_file = OUTPUT_DIR / f"smoke-{datetime.utcnow().strftime('%Y%m%d-%H%M%S')}.json"
    with open(output_file, "w") as f:
        json.dump(report, f, indent=2)
    print(f"\nSaved report to {output_file}")

    # Compare with previous run
    previous = load_previous_results()
    if previous:
        changes = compare_results(report, previous)
        if changes:
            print("\n=== CHANGES SINCE LAST CHECK ===")
            for change in changes:
                print(change)
        else:
            print("\nNo changes since last check.")

    # Report failures
    failures = [r for r in results if not r["ok"]]
    if failures:
        print(f"\n=== FAILURES ({len(failures)}) ===")
        for f in failures:
            print(f"  {f['url']} -> {f['status']} ({f['error'] or 'HTTP error'})")
        return 1

    print("\nAll routes healthy.")
    return 0


if __name__ == "__main__":
    sys.exit(main())