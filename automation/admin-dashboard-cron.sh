#!/usr/bin/env bash
set -euo pipefail

PIDFILE="automation/.admin-cron.pid"

start() {
  if [ -f "$PIDFILE" ] && kill -0 $(cat "$PIDFILE") 2>/dev/null; then
    echo "Already running with PID $(cat $PIDFILE)"; exit 0; fi
  ( while true; do
      node automation/admin-dashboard-updater.cjs || true
      node automation/admin-insights-researcher.cjs || true
      sleep 60
    done ) &
  echo $! > "$PIDFILE"
  echo "Admin dashboard cron started with PID $(cat $PIDFILE)"
}

stop() {
  if [ -f "$PIDFILE" ]; then
    kill $(cat "$PIDFILE") 2>/dev/null || true
    rm -f "$PIDFILE"
    echo "Stopped"
  else
    echo "Not running"
  fi
}

status() {
  if [ -f "$PIDFILE" ] && kill -0 $(cat "$PIDFILE") 2>/dev/null; then
    echo "Running with PID $(cat $PIDFILE)"
  else
    echo "Not running"
  fi
}

case "${1:-}" in
  start) start ;;
  stop) stop ;;
  status) status ;;
  *) echo "Usage: $0 {start|stop|status}" ; exit 1 ;;
 esac