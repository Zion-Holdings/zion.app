#!/usr/bin/env python3
"""
Resilient outreach worker wrapper.
- 12-second socket timeout
- Circuit breaker for email delivery failures
- Handles missing scripts gracefully
"""
import os
import sys
import json
import time
import socket
import subprocess
import logging
import traceback
from datetime import datetime, timezone
from pathlib import Path

# ── Config ──────────────────────────────────────────────────────────────────────
REPO_ROOT = Path(__file__).resolve().parents[2]
SCRIPTS_DIR = REPO_ROOT / "scripts" / "outreach"
LOG_DIR = REPO_ROOT / "logs"
SOCKET_TIMEOUT = 12  # seconds
CIRCUIT_BREAKER_THRESHOLD = 3  # consecutive email failures before opening circuit
CIRCUIT_BREAKER_COOLDOWN = 300  # seconds (5 minutes)

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    handlers=[
        logging.StreamHandler(sys.stdout),
        logging.FileHandler(LOG_DIR / "outreach_wrapper.log", encoding="utf-8"),
    ],
)
log = logging.getLogger("outreach_wrapper")

# ── Circuit Breaker State ───────────────────────────────────────────────────────
_state_file = REPO_ROOT / "logs" / "outreach_circuit_breaker.json"


def load_circuit_state():
    if not _state_file.exists():
        return {"failures": 0, "opened_at": None, "last_failure": None}
    try:
        return json.loads(_state_file.read_text(encoding="utf-8"))
    except Exception:
        return {"failures": 0, "opened_at": None, "last_failure": None}


def save_circuit_state(state):
    _state_file.parent.mkdir(parents=True, exist_ok=True)
    _state_file.write_text(json.dumps(state, indent=2), encoding="utf-8")


def record_email_failure(error_msg):
    state = load_circuit_state()
    state["failures"] += 1
    state["last_failure"] = datetime.now(timezone.utc).isoformat()
    if state["failures"] >= CIRCUIT_BREAKER_THRESHOLD:
        state["opened_at"] = datetime.now(timezone.utc).isoformat()
        log.warning(
            "Circuit breaker OPENED after %d failures. Cooling down %ds.",
            CIRCUIT_BREAKER_THRESHOLD,
            CIRCUIT_BREAKER_COOLDOWN,
        )
    save_circuit_state(state)


def record_success():
    state = load_circuit_state()
    state["failures"] = 0
    state["opened_at"] = None
    state["last_failure"] = None
    save_circuit_state(state)


def is_circuit_open():
    state = load_circuit_state()
    opened_at = state.get("opened_at")
    if not opened_at:
        return False
    opened = datetime.fromisoformat(opened_at)
    elapsed = (datetime.now(timezone.utc) - opened).total_seconds()
    if elapsed >= CIRCUIT_BREAKER_COOLDOWN:
        log.info("Circuit breaker cooldown expired. Resetting.")
        record_success()
        return False
    log.warning("Circuit breaker still OPEN. %.0fs remaining.", CIRCUIT_BREAKER_COOLDOWN - elapsed)
    return True


# ── Socket Timeout Helper ───────────────────────────────────────────────────────
def set_socket_timeout():
    """Apply global socket timeout."""
    socket.setdefaulttimeout(SOCKET_TIMEOUT)
    log.info("Socket timeout set to %ds", SOCKET_TIMEOUT)


# ── Main ───────────────────────────────────────────────────────────────────────
def find_worker_scripts():
    """Return list of candidate worker scripts to execute."""
    wrapper_name = Path(__file__).name
    candidates = []
    for name in ["outreach_worker.py", "outreach.py", "worker.py"]:
        p = SCRIPTS_DIR / name
        if p.exists() and p.name != wrapper_name:
            candidates.append(p)
    # Also check for any .py file in outreach/ excluding this wrapper
    if SCRIPTS_DIR.exists():
        for p in SCRIPTS_DIR.glob("*.py"):
            if p.name != wrapper_name and p not in candidates:
                candidates.append(p)
    return candidates


def run_script(path):
    """Run a Python script with the configured socket timeout."""
    env = os.environ.copy()
    env["OUTREACH_SOCKET_TIMEOUT"] = str(SOCKET_TIMEOUT)
    result = subprocess.run(
        [sys.executable, str(path)],
        capture_output=True,
        text=True,
        timeout=SOCKET_TIMEOUT + 5,
        env=env,
        cwd=str(REPO_ROOT),
    )
    return result


def main():
    log.info("=== Outreach wrapper start ===")
    set_socket_timeout()

    # Check circuit breaker
    if is_circuit_open():
        log.info("Skipping outreach run: circuit breaker open.")
        print(json.dumps({
            "status": "skipped",
            "reason": "circuit_open",
            "timestamp": datetime.now(timezone.utc).isoformat(),
        }))
        return 0

    # Locate worker scripts
    scripts = find_worker_scripts()
    if not scripts:
        msg = "No outreach worker scripts found in scripts/outreach/. Nothing to do."
        log.warning(msg)
        print(json.dumps({
            "status": "noop",
            "reason": "missing_scripts",
            "message": msg,
            "timestamp": datetime.now(timezone.utc).isoformat(),
        }))
        return 0

    # Execute each script with error handling
    overall_status = "ok"
    for script_path in scripts:
        log.info("Running outreach worker: %s", script_path)
        try:
            result = run_script(script_path)
            if result.returncode == 0:
                log.info("Script %s completed successfully.", script_path.name)
                record_success()
            else:
                err = result.stderr.strip() or "unknown error"
                log.error("Script %s failed (rc=%d): %s", script_path.name, result.returncode, err)
                record_email_failure(err)
                overall_status = "partial_failure"
        except subprocess.TimeoutExpired:
            log.error("Script %s timed out after %ds.", script_path.name, SOCKET_TIMEOUT)
            record_email_failure("timeout")
            overall_status = "timeout"
        except Exception as exc:
            log.error("Unexpected error running %s: %s", script_path.name, exc)
            traceback.print_exc()
            record_email_failure(str(exc))
            overall_status = "error"

    report = {
        "status": overall_status,
        "scripts_run": [str(s) for s in scripts],
        "timestamp": datetime.now(timezone.utc).isoformat(),
    }
    print(json.dumps(report, indent=2))
    log.info("=== Outreach wrapper end ===")
    return 0 if overall_status == "ok" else 1


if __name__ == "__main__":
    sys.exit(main())
