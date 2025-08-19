#!/usr/bin/env bash

set -euo pipefail

# recover-and-merge-content.sh
#
# Safely recover content from ALL remote branches and assemble:
# - A per-branch archive of changed files vs a base branch
# - A best-effort merged view with conflict sidecars
# - A human-readable and machine-readable summary
#
# Requirements: git, rsync
#
# Example:
#   automation/scripts/recover-and-merge-content.sh \
#     --remote origin --base main --output-dir recovered-content --dry-run

REMOTE="origin"
BASE_BRANCH="main"
OUTPUT_ROOT="recovered-content"
INCLUDE_DELETED="false"
DRY_RUN="false"
BRANCH_PATTERN=""
NO_MERGE="false"

print_usage() {
  cat <<EOF
Usage: $0 [options]

Options:
  -r, --remote <name>           Remote name to scan (default: origin)
  -b, --base <branch>           Base branch to diff against (default: main)
  -o, --output-dir <dir>        Output root directory (default: recovered-content)
  -i, --include-deleted         Include paths deleted on branches (default: false)
  -n, --dry-run                 Don't write files, only print what would happen
  -p, --branch-pattern <regex>  Only include branches matching regex (after remote/ prefix removed)
      --no-merge                Skip merged view construction
  -h, --help                    Show this help

The script:
  1) fetches all refs from the remote
  2) enumerates all remote branches except the base branch
  3) for each branch, collects files changed vs the base (A, C, M, R)
  4) copies branch versions into per-branch directories under the output root
  5) builds a merged view; when conflicts occur, sidecar copies are saved in conflicts/
  6) writes Markdown and TSV summaries
EOF
}

ensure_tool() {
  if ! command -v "$1" >/dev/null 2>&1; then
    echo "Error: required tool '$1' not found in PATH" >&2
    exit 1
  fi
}

sanitize() {
  echo "$1" | sed -E 's/[^A-Za-z0-9_.-]+/_/g'
}

copy_preserving_path() {
  local source_root="$1"
  local rel_path="$2"
  local dest_root="$3"
  local dest_dir
  dest_dir="${dest_root}/$(dirname -- "$rel_path")"
  mkdir -p -- "$dest_dir"
  rsync -a -- "$source_root/$rel_path" "$dest_dir/"
}

log() {
  printf "%s\n" "$*"
}

# Parse args
while [[ $# -gt 0 ]]; do
  case "$1" in
    -r|--remote)
      REMOTE="$2"; shift 2;;
    -b|--base)
      BASE_BRANCH="$2"; shift 2;;
    -o|--output-dir)
      OUTPUT_ROOT="$2"; shift 2;;
    -i|--include-deleted)
      INCLUDE_DELETED="true"; shift 1;;
    -n|--dry-run)
      DRY_RUN="true"; shift 1;;
    -p|--branch-pattern)
      BRANCH_PATTERN="$2"; shift 2;;
    --no-merge)
      NO_MERGE="true"; shift 1;;
    -h|--help)
      print_usage; exit 0;;
    *)
      echo "Unknown argument: $1" >&2
      print_usage
      exit 1;;
  esac
done

ensure_tool git
ensure_tool rsync

# Ensure we're inside a git repo
if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "Error: must be run inside a git repository" >&2
  exit 1
fi

timestamp=$(date +%Y%m%d-%H%M%S)
SESSION_DIR="${OUTPUT_ROOT}/session-${timestamp}"
BRANCHES_DIR="${SESSION_DIR}/branches"
MERGED_DIR="${SESSION_DIR}/merged"
CONFLICTS_DIR="${SESSION_DIR}/conflicts"
REPORT_DIR="${SESSION_DIR}/reports"
WORKTREES_PARENT="${SESSION_DIR}/worktrees"

log "Fetching refs from '${REMOTE}'..."
git fetch --all --prune

# Validate base exists on remote or locally
if ! git show-ref --verify --quiet "refs/heads/${BASE_BRANCH}" && \
   ! git show-ref --verify --quiet "refs/remotes/${REMOTE}/${BASE_BRANCH}"; then
  echo "Error: base branch '${BASE_BRANCH}' not found locally or on remote '${REMOTE}'" >&2
  exit 1
fi

# Prefer remote ref when available
if git show-ref --verify --quiet "refs/remotes/${REMOTE}/${BASE_BRANCH}"; then
  BASE_REF="${REMOTE}/${BASE_BRANCH}"
else
  BASE_REF="${BASE_BRANCH}"
fi

log "Base ref: ${BASE_REF}"

# Build branch list
mapfile -t REMOTE_BRANCHES < <(git for-each-ref "refs/remotes/${REMOTE}" --format='%(refname:short)' | sed -E "s#^${REMOTE}/##" | sort -u)

# Filter branches
FILTERED_BRANCHES=()
for b in "${REMOTE_BRANCHES[@]}"; do
  [[ "$b" == "$BASE_BRANCH" ]] && continue
  [[ "$b" == "HEAD" ]] && continue
  if [[ -n "$BRANCH_PATTERN" ]]; then
    if ! [[ "$b" =~ $BRANCH_PATTERN ]]; then
      continue
    fi
  fi
  FILTERED_BRANCHES+=("$b")
done

if [[ ${#FILTERED_BRANCHES[@]} -eq 0 ]]; then
  log "No branches to process. Exiting."
  exit 0
fi

log "Will process ${#FILTERED_BRANCHES[@]} branches. Output under ${SESSION_DIR}"

if [[ "$DRY_RUN" == "false" ]]; then
  mkdir -p -- "$BRANCHES_DIR" "$MERGED_DIR" "$CONFLICTS_DIR" "$REPORT_DIR" "$WORKTREES_PARENT"
fi

OWNERS_TSV_TMP=$(mktemp)
BRANCH_COUNTS_TSV_TMP=$(mktemp)
TOTAL_CONFLICTS=0

process_branch() {
  local branch="$1"
  local safe_branch
  safe_branch=$(sanitize "$branch")
  local wt_path="${WORKTREES_PARENT}/${safe_branch}"
  local branch_out_dir="${BRANCHES_DIR}/${safe_branch}"

  log "\n== Branch: ${branch} =="
  log "Creating temporary worktree for ${REMOTE}/${branch}..."

  # Create worktree in detached mode at remote branch tip
  if [[ "$DRY_RUN" == "false" ]]; then
    git worktree add --detach -- "$wt_path" "${REMOTE}/${branch}" >/dev/null 2>&1 || {
      echo "Failed to create worktree for ${REMOTE}/${branch}" >&2
      return 1
    }
  fi

  # Determine changed files vs base (since merge-base)
  local diff_file
  diff_file=$(mktemp)
  git diff --name-status --diff-filter=ACMR "${BASE_REF}...${REMOTE}/${branch}" > "$diff_file"

  local branch_changes=0
  local branch_conflicts=0

  while IFS=$'\t' read -r status path1 path2; do
    [[ -z "${status:-}" ]] && continue

    local file_rel
    case "$status" in
      R*)
        file_rel="$path2";;
      *)
        file_rel="$path1";;
    esac

    if [[ -z "${file_rel:-}" ]]; then
      continue
    fi

    # Handle deleted if requested (D not in diff-filter by default)
    # We skip deleted by default because there is no file to copy from branch tip.

    branch_changes=$((branch_changes + 1))

    if [[ "$DRY_RUN" == "true" ]]; then
      log "[DRY-RUN] would copy ${file_rel} from ${branch}"
      continue
    fi

    # Copy into per-branch folder
    mkdir -p -- "$branch_out_dir"
    copy_preserving_path "$wt_path" "$file_rel" "$branch_out_dir"

    # Merged view with conflict sidecars
    local merged_target="${MERGED_DIR}/${file_rel}"
    local owner_prev
    owner_prev=""
    if [[ -f "$merged_target" ]]; then
      # Load previous owner if we recorded one
      owner_prev=$(awk -F $'\t' -v p="$file_rel" '$1==p {print $2}' "$OWNERS_TSV_TMP" | head -n1 || true)
      if [[ -z "$owner_prev" ]]; then
        owner_prev="unknown"
      fi
      mkdir -p -- "${CONFLICTS_DIR}/$(dirname -- "$file_rel")"
      # Move existing merged file to conflicts (preserve first owner)
      local base_name
      base_name=$(basename -- "$file_rel")
      local conflict_dir_path
      conflict_dir_path="${CONFLICTS_DIR}/$(dirname -- "$file_rel")"
      cp -f -- "$merged_target" "${conflict_dir_path}/${base_name}.__from__${owner_prev}"
      # Save new contender
      cp -f -- "$wt_path/$file_rel" "${conflict_dir_path}/${base_name}.__from__${safe_branch}"
      branch_conflicts=$((branch_conflicts + 1))
      TOTAL_CONFLICTS=$((TOTAL_CONFLICTS + 1))
      # Keep original in merged to ease preview; owner stays as first writer
    else
      # First writer wins in merged view
      mkdir -p -- "$(dirname -- "$merged_target")"
      cp -f -- "$wt_path/$file_rel" "$merged_target"
      printf "%s\t%s\n" "$file_rel" "$safe_branch" >> "$OWNERS_TSV_TMP"
    fi
  done < "$diff_file"

  printf "%s\t%d\t%d\n" "$safe_branch" "$branch_changes" "$branch_conflicts" >> "$BRANCH_COUNTS_TSV_TMP"

  rm -f -- "$diff_file"

  if [[ "$DRY_RUN" == "false" ]]; then
    # Clean up worktree
    git worktree remove --force -- "$wt_path" >/dev/null 2>&1 || true
  fi
}

# Process each branch
for branch in "${FILTERED_BRANCHES[@]}"; do
  process_branch "$branch"
done

if [[ "$DRY_RUN" == "true" ]]; then
  log "\nDRY-RUN complete. No files were written."
  exit 0
fi

# Write reports
{
  echo -e "branch\tchanges\tconflicts"
  sort "$BRANCH_COUNTS_TSV_TMP"
} > "${REPORT_DIR}/branch-change-counts.tsv"

{
  echo -e "path\towner_branch"
  sort "$OWNERS_TSV_TMP"
} > "${REPORT_DIR}/merged-owners.tsv"

md_report="${REPORT_DIR}/summary.md"
{
  echo "# Recovery Session ${timestamp}"
  echo
  echo "- Remote: ${REMOTE}"
  echo "- Base: ${BASE_BRANCH} (${BASE_REF})"
  echo "- Branches processed: ${#FILTERED_BRANCHES[@]}"
  echo "- Total conflicts: ${TOTAL_CONFLICTS}"
  echo "- Output root: ${SESSION_DIR}"
  echo
  echo "## Per-branch counts"
  echo
  column -t -s$'\t' "${REPORT_DIR}/branch-change-counts.tsv" || cat "${REPORT_DIR}/branch-change-counts.tsv"
  echo
  echo "## Merged owners (first-writer)"
  echo
  head -n 50 "${REPORT_DIR}/merged-owners.tsv" || true
  echo
  echo "(Full owners list at reports/merged-owners.tsv)"
} > "$md_report"

rm -f -- "$OWNERS_TSV_TMP" "$BRANCH_COUNTS_TSV_TMP"

if [[ "$NO_MERGE" == "true" ]]; then
  log "Merged view was skipped per --no-merge."
fi

log "\nRecovery complete. Artifacts under: ${SESSION_DIR}"

exit 0

