#!/usr/bin/env bash
set -euo pipefail

# Runs a curated set of automation tasks non-interactively.
# Any failures are logged and execution continues to the next task.

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT_DIR"

log_dir="automation_logs/cloud"
mkdir -p "$log_dir"

# Default list of npm scripts to run. Use --if-present so missing scripts don't fail.
DEFAULT_TASKS=(
  "type-check"
  "lint"
  "sitemap"
  "syntax:build-check"
  "automation:status"
  "automation:report"
  "healing:scan"
  "healing:fix"
  "linting:check"
  "linting:fix"
  "design:status"
  "design:analyze"
  "responsive:analyze"
  "variation:analyze"
  "frontend-sync:analyze"
  "automation:git-sync"
  "git:sync"
  "cursor:memory:status"
  "meta:orchestrator"
  "venture:report"
)

# Allow overriding tasks via environment variable CLOUD_TASKS (space-separated)
TASKS=("${DEFAULT_TASKS[@]}")
if [[ "${CLOUD_TASKS:-}" != "" ]]; then
  # shellcheck disable=SC2206
  TASKS=( ${CLOUD_TASKS} )
fi

# Run a single task with timeout and log output
run_task() {
  local task="$1"
  local logfile="$log_dir/${task//[:/ ]/_}.log"
  echo "[cloud-automation] Running: npm run $task --if-present"
  # 20-minute timeout per task to avoid hanging jobs
  if command -v timeout >/dev/null 2>&1; then
    set +e
    timeout 20m npm run "$task" --if-present >"$logfile" 2>&1
    status=$?
    set -e
  else
    set +e
    npm run "$task" --if-present >"$logfile" 2>&1
    status=$?
    set -e
  fi
  if [[ $status -ne 0 ]]; then
    echo "[cloud-automation] Task failed: $task (exit $status). See $logfile"
    return $status
  else
    echo "[cloud-automation] Task succeeded: $task"
    return 0
  fi
}

failed_tasks=()
for t in "${TASKS[@]}"; do
  run_task "$t" || failed_tasks+=("$t")
  # Small gap to reduce API burst rates
  sleep 2
done

# Summarize results
if [[ ${#failed_tasks[@]} -gt 0 ]]; then
  echo "[cloud-automation] Completed with failures: ${failed_tasks[*]}"
else
  echo "[cloud-automation] All tasks completed successfully"
fi

# Autocommit any changes produced by automations
if [[ -n "$(git status --porcelain)" ]]; then
  git add -A
  git commit -m "chore(automation): cloud automation outputs [skip ci]"
  # Push only if credentials available
  if git config --get remote.origin.url >/dev/null 2>&1; then
    git push || true
  fi
fi

# Exit non-zero if any task failed so CI can surface issues
if [[ ${#failed_tasks[@]} -gt 0 ]]; then
  exit 1
fi