#!/usr/bin/env python3
"""Resilient outreach worker wrapper with 12s socket timeout and circuit breaker."""
import os, sys, json, subprocess, time, socket, logging
from pathlib import Path

WORKDIR = Path(__file__).resolve().parents[0]
OUTREACH_SCRIPT = WORKDIR / "outreach_automation.py"
LOG_PATH = WORKDIR / "logs" / "outreach_wrapper.log"
CIRCUIT_PATH = WORKDIR / "var" / "outreach" / "circuit_breaker.json"
MAX_CONSECUTIVE_FAILURES = 3
COOLDOWN_SECONDS = 60
SOCKET_TIMEOUT = 12

def setup_logging():
    LOG_PATH.parent.mkdir(parents=True, exist_ok=True)
    logging.basicConfig(
        filename=str(LOG_PATH),
        level=logging.INFO,
        format="%(asctime)s %(levelname)s %(message)s",
    )
    return logging.getLogger("outreach_wrapper")

def load_json(path, default):
    if not path.exists():
        return default
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except Exception:
        return default

def save_json(path, obj):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(obj, indent=2, default=str), encoding="utf-8")

def set_socket_timeout(seconds):
    """Apply socket timeout globally for this process."""
    socket.setdefaulttimeout(seconds)

class CircuitBreaker:
    def __init__(self, path, max_failures=3, cooldown=60):
        self.path = path
        self.max_failures = max_failures
        self.cooldown = cooldown
        self.state = load_json(path, {"failures": 0, "last_failure_ts": 0})

    def allow_request(self):
        if self.state.get("failures", 0) >= self.max_failures:
            last = self.state.get("last_failure_ts", 0)
            if time.time() - last < self.cooldown:
                return False
            # cooldown expired; reset
            self.state = {"failures": 0, "last_failure_ts": 0}
            save_json(self.path, self.state)
            return True
        return True

    def record_success(self):
        self.state = {"failures": 0, "last_failure_ts": 0}
        save_json(self.path, self.state)

    def record_failure(self):
        self.state["failures"] = self.state.get("failures", 0) + 1
        self.state["last_failure_ts"] = time.time()
        save_json(self.path, self.state)


def run_outreach_worker():
    log = setup_logging()
    log.info("Resilient outreach wrapper started")

    if not OUTREACH_SCRIPT.exists():
        msg = f"Missing script: {OUTREACH_SCRIPT}"
        log.error(msg)
        print(json.dumps({"status": "error", "message": msg}))
        sys.exit(1)

    cb = CircuitBreaker(CIRCUIT_PATH, MAX_CONSECUTIVE_FAILURES, COOLDOWN_SECONDS)

    if not cb.allow_request():
        msg = "Circuit breaker open: too many recent failures; skipping run"
        log.warning(msg)
        print(json.dumps({"status": "skipped", "message": msg}))
        sys.exit(0)

    set_socket_timeout(SOCKET_TIMEOUT)
    log.info(f"Socket timeout set to {SOCKET_TIMEOUT}s")

    try:
        env = os.environ.copy()
        env["PYTHONIOENCODING"] = "utf-8"
        proc = subprocess.run(
            [sys.executable, str(OUTREACH_SCRIPT)],
            cwd=str(WORKDIR),
            env=env,
            capture_output=True,
            text=True,
            timeout=120,
        )
        if proc.returncode != 0:
            raise RuntimeError(f"Script failed ({proc.returncode}): {proc.stderr.strip()[:500]}")

        try:
            result = json.loads(proc.stdout) if proc.stdout.strip() else {}
        except json.JSONDecodeError:
            result = {"raw_stdout": proc.stdout[:1000]}

        cb.record_success()
        log.info("Outreach worker completed successfully")
        print(json.dumps({"status": "ok", "result": result}, indent=2))
        sys.exit(0)

    except subprocess.TimeoutExpired:
        err = "Outreach script timed out after 120s"
        cb.record_failure()
        log.error(err)
        print(json.dumps({"status": "error", "message": err}))
        sys.exit(1)

    except Exception as e:
        err = f"Unexpected error: {e}"
        cb.record_failure()
        log.exception(err)
        print(json.dumps({"status": "error", "message": err}))
        sys.exit(1)


if __name__ == "__main__":
    run_outreach_worker()
