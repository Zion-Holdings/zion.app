#!/usr/bin/env sh
set -e

# Detect staged deletions
DELETED_FILES=$(git diff --cached --diff-filter=D --name-only)

if [ -z "$DELETED_FILES" ]; then
  exit 0
fi

ALLOW_FILE=".allow-delete"

# Read allowed patterns (ignoring comments and blank lines)
ALLOWED=""
if [ -f "$ALLOW_FILE" ]; then
  ALLOWED=$(grep -v '^[[:space:]]*#' "$ALLOW_FILE" | sed '/^[[:space:]]*$/d' || true)
fi

BLOCKED=""
for f in $DELETED_FILES; do
  IS_ALLOWED=false
  if [ -n "$ALLOWED" ]; then
    for p in $ALLOWED; do
      case "$f" in
        $p) IS_ALLOWED=true ;;
      esac
    done
  fi
  if [ "$IS_ALLOWED" != "true" ]; then
    BLOCKED="$BLOCKED\n- $f"
  fi
done

if [ -n "$BLOCKED" ]; then
  echo "❌ File deletions are blocked by the preservation policy:" >&2
  echo "$BLOCKED" >&2
  echo "" >&2
  echo "To proceed, prefer to restore and fix, or temporarily deactivate by renaming to '*.disabled' or moving under 'disabled/'." >&2
  echo "If deletion is absolutely necessary, add explicit entries to '.allow-delete' or include them in a focused cleanup PR." >&2
  echo "" >&2
  echo "Tip: To restore a deleted file: git restore --staged <file> && git checkout -- <file>" >&2
  exit 1
fi

exit 0