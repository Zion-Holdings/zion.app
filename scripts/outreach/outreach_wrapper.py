#!/usr/bin/env python3
"""
Resilient Outreach Worker Wrapper
Handles missing scripts and email timeouts gracefully.
Circuit breaker for email delivery failures, 12-second socket timeout.
"""

import socket
import subprocess
import sys
import os
import time
import json
import logging
import traceback
from datetime import datetime, timezone
from pathlib import Path
from typing import Optional, Dict, Any, List

# ── Config ──────────────────────────────────────────────────────────────────
SOCKET_TIMEOUT_SECONDS = 12
CIRCUIT_BREAKER_THRESHOLD = 3          # failures before opening circuit
CIRCUIT_BREAKER_RESET_SECONDS = 300    # 5 min cooldown
SCRIPT_DIR = Path(__file__).resolve().parent
LOG_DIR = SCRIPT_DIR / "logs"
LOG_DIR.mkdir(parents=True, exist_ok=True)

STATE_FILE = LOG_DIR / "outreach_wrapper_state.json"

# ── Logging ─────────────────────────────────────────────────────────────────
log_file = LOG_DIR / f"wrapper_{datetime.now(timezone.utc).strftime('%Y%m%d_%H%M%S')}.log"
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    handlers=[
        logging.FileHandler(log_file, encoding="utf-8"),
        logging.StreamHandler(sys.stdout),
    ],
)
log = logging.getLogger("outreach_wrapper")

# ── Circuit Breaker State ───────────────────────────────────────────────────
class CircuitBreaker:
    def __init__(self, threshold: int, reset_seconds: int):
        self.threshold = threshold
        self.reset_seconds = reset_seconds
        self.failures = 0
        self.last_failure_ts: Optional[float] = None
        self.state = "CLOSED"  # CLOSED | OPEN | HALF_OPEN

    def record_success(self):
        self.failures = 0
        self.last_failure_ts = None
        self.state = "CLOSED"
        log.debug("Circuit breaker: success recorded, state=CLOSED")

    def record_failure(self):
        self.failures += 1
        self.last_failure_ts = time.time()
        if self.failures >= self.threshold:
            self.state = "OPEN"
            log.warning(
                "Circuit breaker OPEN after %d failures (threshold=%d). "
                "Will reset in %ds.",
                self.failures, self.threshold, self.reset_seconds,
            )
        else:
            log.warning(
                "Circuit breaker failure %d/%d", self.failures, self.threshold
            )

    def can_proceed(self) -> bool:
        if self.state == "CLOSED":
            return True
        if self.state == "OPEN":
            elapsed = time.time() - (self.last_failure_ts or 0)
            if elapsed >= self.reset_seconds:
                self.state = "HALF_OPEN"
                log.info("Circuit breaker transition: OPEN -> HALF_OPEN (cooldown elapsed)")
                return True  # allow one probe
            return False
        # HALF_OPEN
        return True

    def to_dict(self) -> Dict[str, Any]:
        return {
            "state": self.state,
            "failures": self.failures,
            "last_failure_ts": self.last_failure_ts,
        }

    @classmethod
    def from_dict(cls, data: Dict[str, Any], threshold: int, reset_seconds: int) -> "CircuitBreaker":
        cb = cls(threshold, reset_seconds)
        cb.state = data.get("state", "CLOSED")
        cb.failures = data.get("failures", 0)
        cb.last_failure_ts = data.get("last_failure_ts")
        return cb


def load_state() -> Dict[str, Any]:
    if STATE_FILE.exists():
        try:
            return json.loads(STATE_FILE.read_text(encoding="utf-8"))
        except Exception:
            log.warning("Failed to load state file %s, starting fresh", STATE_FILE)
    return {}


def save_state(state: Dict[str, Any]):
    try:
        STATE_FILE.write_text(json.dumps(state, indent=2), encoding="utf-8")
    except Exception as e:
        log.warning("Failed to save state: %s", e)


# ── Script Discovery ────────────────────────────────────────────────────────
def discover_worker_scripts() -> List[Path]:
    """
    Find candidate outreach worker scripts in script dir and common subdirs.
    Returns list of existing Python scripts with 'outreach' or 'worker' in name.
    """
    candidates: List[Path] = []
    search_roots = [SCRIPT_DIR, SCRIPT_DIR / "outreach", SCRIPT_DIR / "automation"]

    for root in search_roots:
        if not root.exists():
            continue
        for p in root.glob("*.py"):
            name = p.name.lower()
            if any(kw in name for kw in ("outreach", "worker", "lead", "contact", "email_responder")):
                if p.name != Path(__file__).name:
                    candidates.append(p)
    # Also look for shell scripts
    for root in search_roots:
        if not root.exists():
            continue
        for p in root.glob("*.sh"):
            name = p.name.lower()
            if any(kw in name for kw in ("outreach", "worker", "lead", "contact")):
                candidates.append(p)

    # Deduplicate, preserve order by mtime (newest first)
    candidates = sorted(set(candidates), key=lambda p: p.stat().st_mtime, reverse=True)
    return candidates


def run_script(path: Path, socket_timeout: int = SOCKET_TIMEOUT_SECONDS) -> Dict[str, Any]:
    """
    Execute a worker script with a strict socket-level timeout.
    Returns result dict with keys: success, exit_code, stdout, stderr, duration_s, error
    """
    env = os.environ.copy()
    env["OUTREACH_SOCKET_TIMEOUT"] = str(socket_timeout)
    env["OUTREACH_WORKER_WRAPPER"] = "1"

    start = time.time()
    try:
        result = subprocess.run(
            [sys.executable, str(path)] if path.suffix == ".py" else [str(path)],
            capture_output=True,
            text=True,
            timeout=socket_timeout + 10,  # hard kill guard slightly above socket timeout
            env=env,
            cwd=str(SCRIPT_DIR.parent),  # repo root
        )
        duration = time.time() - start
        return {
            "success": result.returncode == 0,
            "exit_code": result.returncode,
            "stdout": result.stdout[:4000],
            "stderr": result.stderr[:4000],
            "duration_s": round(duration, 2),
            "error": None,
            "script": path.name,
        }
    except subprocess.TimeoutExpired:
        duration = time.time() - start
        log.error("Script %s timed out after %ss", path.name, socket_timeout)
        return {
            "success": False,
            "exit_code": -1,
            "stdout": "",
            "stderr": f"TIMEOUT after {socket_timeout}s",
            "duration_s": round(duration, 2),
            "error": "timeout",
            "script": path.name,
        }
    except FileNotFoundError:
        log.error("Script not found: %s", path)
        return {
            "success": False,
            "exit_code": -2,
            "stdout": "",
            "stderr": "Script file missing at runtime",
            "duration_s": 0,
            "error": "missing_script",
            "script": path.name,
        }
    except Exception as e:
        duration = time.time() - start
        log.exception("Unexpected error running %s", path)
        return {
            "success": False,
            "exit_code": -3,
            "stdout": "",
            "stderr": traceback.format_exc()[:4000],
            "duration_s": round(duration, 2),
            "error": str(e),
            "script": path.name,
        }


# ── Main ────────────────────────────────────────────────────────────────────
def main() -> int:
    log.info("Resilient outreach worker wrapper starting (socket_timeout=%ds)", SOCKET_TIMEOUT_SECONDS)

    state = load_state()
    cb_data = state.get("circuit_breaker", {})
    cb = CircuitBreaker.from_dict(cb_data, CIRCUIT_BREAKER_THRESHOLD, CIRCUIT_BREAKER_RESET_SECONDS)
    scripts = discover_worker_scripts()

    if not scripts:
        log.warning("No outreach worker scripts found. Nothing to run.")
        state["last_run"] = datetime.now(timezone.utc).isoformat()
        state["circuit_breaker"] = cb.to_dict()
        state["result"] = {"success": False, "message": "no_scripts_found"}
        save_state(state)
        return 0  # not a fatal error for a cron job

    log.info("Discovered %d worker script(s): %s", len(scripts), ", ".join(s.name for s in scripts))

    results: List[Dict[str, Any]] = []
    any_success = False

    for script_path in scripts:
        if not cb.can_proceed():
            log.warning("Circuit breaker is OPEN — skipping %s", script_path.name)
            results.append({
                "script": script_path.name,
                "skipped": True,
                "reason": "circuit_breaker_open",
            })
            continue

        log.info("Running worker: %s", script_path.name)
        res = run_script(script_path, socket_timeout=SOCKET_TIMEOUT_SECONDS)
        results.append(res)

        if res["success"]:
            cb.record_success()
            any_success = True
            log.info("Worker %s succeeded in %.2fs", script_path.name, res["duration_s"])
        else:
            cb.record_failure()
            log.warning(
                "Worker %s failed (exit=%s, error=%s): %s",
                script_path.name, res["exit_code"], res["error"], res["stderr"][:200],
            )

    # ── Persist state ──────────────────────────────────────────────────────
    state["last_run"] = datetime.now(timezone.utc).isoformat()
    state["circuit_breaker"] = cb.to_dict()
    state["result"] = {
        "success": any_success,
        "scripts_run": len(scripts),
        "scripts_succeeded": sum(1 for r in results if r.get("success")),
        "scripts_failed": sum(1 for r in results if not r.get("success") and not r.get("skipped")),
        "scripts_skipped": sum(1 for r in results if r.get("skipped")),
        "details": results,
    }
    save_state(state)

    summary = state["result"]
    log.info(
        "Run complete: success=%s, succeeded=%d, failed=%d, skipped=%d",
        summary["success"],
        summary["scripts_succeeded"],
        summary["scripts_failed"],
        summary["scripts_skipped"],
    )

    return 0 if any_success else 1


if __name__ == "__main__":
    sys.exit(main())
