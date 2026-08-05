#!/usr/bin/env python3
"""
Resilient Outreach Worker Wrapper
Handles missing scripts and email timeouts gracefully.
- 12-second socket timeout
- Circuit breaker for email delivery failures
"""

import os
import sys
import json
import time
import socket
import subprocess
import logging
from datetime import datetime, timezone
from pathlib import Path

# ---------------------------------------------------------------------------
# Configuration
# ---------------------------------------------------------------------------
SOCKET_TIMEOUT = 12  # seconds
CIRCUIT_BREAKER_THRESHOLD = 3  # failures before circuit opens
CIRCUIT_BREAKER_RESET_SECONDS = 300  # 5 minutes
REPO_ROOT = Path(__file__).resolve().parents[2]  # zion-clone-test2/
SCRIPTS_DIR = REPO_ROOT / "scripts" / "outreach"
LOG_DIR = REPO_ROOT / "cron_output"

# ---------------------------------------------------------------------------
# Logging
# ---------------------------------------------------------------------------
LOG_DIR.mkdir(parents=True, exist_ok=True)
log_path = LOG_DIR / f"outreach_wrapper_{datetime.now(timezone.utc).strftime('%Y%m%d_%H%M%S')}.log"

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    handlers=[
        logging.FileHandler(log_path, encoding="utf-8"),
        logging.StreamHandler(sys.stdout),
    ],
)
logger = logging.getLogger("outreach_wrapper")

# ---------------------------------------------------------------------------
# Circuit Breaker
# ---------------------------------------------------------------------------
class CircuitBreaker:
    def __init__(self, threshold, reset_seconds):
        self.failures = 0
        self.threshold = threshold
        self.reset_seconds = reset_seconds
        self.last_failure_time = None
        self.state = "CLOSED"  # CLOSED, OPEN, HALF_OPEN

    def record_failure(self):
        self.failures += 1
        self.last_failure_time = time.time()
        if self.failures >= self.threshold:
            self.state = "OPEN"
            logger.warning("Circuit breaker OPENED after %d failures", self.failures)

    def record_success(self):
        self.failures = 0
        self.state = "CLOSED"

    def allow_request(self):
        if self.state == "CLOSED":
            return True
        if self.state == "OPEN":
            elapsed = time.time() - self.last_failure_time
            if elapsed >= self.reset_seconds:
                self.state = "HALF_OPEN"
                logger.info("Circuit breaker entering HALF_OPEN state")
                return True
            logger.warning("Circuit breaker OPEN - request blocked for %.0fs more", self.reset_seconds - elapsed)
            return False
        # HALF_OPEN
        return True

email_breaker = CircuitBreaker(CIRCUIT_BREAKER_THRESHOLD, CIRCUIT_BREAKER_RESET_SECONDS)

# ---------------------------------------------------------------------------
# Socket timeout helper
# ---------------------------------------------------------------------------
def set_socket_timeout():
    """Set global default socket timeout for email operations."""
    socket.setdefaulttimeout(SOCKET_TIMEOUT)
    logger.info("Socket timeout set to %d seconds", SOCKET_TIMEOUT)

# ---------------------------------------------------------------------------
# Script discovery
# ---------------------------------------------------------------------------
def find_worker_scripts():
    """Discover candidate outreach worker scripts."""
    exclude = {"outreach_wrapper.py", "__init__.py"}
    candidates = [
        SCRIPTS_DIR / "autonomous_outreach_worker.py",
        SCRIPTS_DIR / "outreach_worker_automation.py",
        SCRIPTS_DIR / "worker.py",
        SCRIPTS_DIR / "run.py",
    ]
    found = []
    for p in candidates:
        if p.exists() and p.name not in exclude:
            found.append(p)
    # fallback: any .py in scripts/outreach/
    py_files = list(SCRIPTS_DIR.glob("*.py")) if SCRIPTS_DIR.exists() else []
    for p in py_files:
        if p not in found and p.name not in exclude:
            found.append(p)
    return found

# ---------------------------------------------------------------------------
# Runner
# ---------------------------------------------------------------------------
def run_script(script_path):
    """Run a single script with timeout and circuit breaker."""
    if not email_breaker.allow_request():
        logger.error("Email circuit breaker open - skipping %s", script_path.name)
        return False, "circuit_open"

    logger.info("Running outreach worker: %s", script_path.name)
    try:
        env = os.environ.copy()
        env["PYTHONUNBUFFERED"] = "1"
        proc = subprocess.run(
            [sys.executable, str(script_path)],
            capture_output=True,
            text=True,
            timeout=SOCKET_TIMEOUT + 10,  # small buffer beyond socket timeout
            cwd=str(REPO_ROOT),
            env=env,
        )
        if proc.returncode == 0:
            email_breaker.record_success()
            logger.info("Success: %s\n%s", script_path.name, proc.stdout[:1000])
            return True, proc.stdout
        else:
            email_breaker.record_failure()
            logger.error("Failed (rc=%d): %s\nstderr: %s", proc.returncode, script_path.name, proc.stderr[:1000])
            return False, proc.stderr
    except subprocess.TimeoutExpired:
        email_breaker.record_failure()
        logger.error("Timeout after %ds: %s", SOCKET_TIMEOUT, script_path.name)
        return False, "timeout"
    except FileNotFoundError:
        logger.warning("Script not found: %s", script_path)
        return False, "missing"
    except Exception as exc:
        email_breaker.record_failure()
        logger.exception("Unexpected error running %s: %s", script_path.name, exc)
        return False, str(exc)

# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------
def main():
    set_socket_timeout()
    scripts = find_worker_scripts()
    if not scripts:
        logger.warning("No outreach worker scripts found in %s - graceful exit", SCRIPTS_DIR)
        # Graceful fallback: create a no-op status file
        status = {
            "status": "no_scripts",
            "timestamp": datetime.now(timezone.utc).isoformat(),
            "scripts_dir": str(SCRIPTS_DIR),
            "message": "No worker scripts found. Wrapper handled missing scripts gracefully.",
        }
        status_path = REPO_ROOT / "outreach_status.json"
        status_path.write_text(json.dumps(status, indent=2), encoding="utf-8")
        logger.info("Wrote no-op status to %s", status_path)
        return 0

    results = []
    for script in scripts:
        ok, detail = run_script(script)
        results.append({"script": script.name, "success": ok, "detail": detail})

    summary = {
        "status": "completed",
        "timestamp": datetime.now(timezone.utc).isoformat(),
        "circuit_breaker_state": email_breaker.state,
        "results": results,
    }
    summary_path = REPO_ROOT / "outreach_status.json"
    summary_path.write_text(json.dumps(summary, indent=2), encoding="utf-8")
    logger.info("Summary written to %s", summary_path)
    return 0 if any(r["success"] for r in results) else 1

if __name__ == "__main__":
    sys.exit(main())
