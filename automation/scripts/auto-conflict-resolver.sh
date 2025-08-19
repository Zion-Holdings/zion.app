#!/bin/bash
# Auto Conflict Resolver Script
# - Detects ongoing merge/rebase conflicts
# - Applies configurable resolution strategies (theirs|ours|manual)
# - Uses git rerere to learn and reuse resolutions
# - Creates a safety backup branch before making changes

set -euo pipefail

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Configuration
RESOLUTION_STRATEGY="${RESOLUTION_STRATEGY:-theirs}"  # theirs|ours|manual
MAIN_BRANCH="${MAIN_BRANCH:-main}"
REMOTE_NAME="${REMOTE_NAME:-origin}"
BACKUP_BRANCH="conflict-resolve-backup-$(date +%Y%m%d-%H%M%S)"

echo -e "${BLUE}🧩 Starting auto conflict resolver (strategy=${RESOLUTION_STRATEGY})...${NC}"

# Ensure rerere for smarter future resolutions
ensure_rerere() {
    if ! git config --local --get rerere.enabled >/dev/null 2>&1; then
        git config --local rerere.enabled true
        echo -e "${GREEN}✅ Enabled git rerere for future auto-resolutions${NC}"
    fi
}

# Create a safety backup branch
create_backup_branch() {
    echo -e "${YELLOW}💾 Creating safety backup branch: ${BACKUP_BRANCH}${NC}"
    git branch "${BACKUP_BRANCH}" 2>/dev/null || true
}

# Detect whether conflicts exist
has_conflicts() {
    if git diff --name-only --diff-filter=U | grep -q '.'; then
        return 0
    fi
    # Fallback to marker scan for non-index conflicts
    if grep -r "^<<<<<<< HEAD" . --exclude-dir={.git,node_modules,.next,dist,build} --include="*" 2>/dev/null | grep -q '.'; then
        return 0
    fi
    return 1
}

# Resolve a single path by strategy and heuristics
resolve_path() {
    local file_path="$1"
    local base_name
    base_name="$(basename -- "$file_path")"

    # Prefer incoming changes for generated/lock files
    case "$base_name" in
        package-lock.json|yarn.lock|pnpm-lock.yaml|bun.lockb|package-lock.*.json|*.lock|*.snap)
            git checkout --theirs -- "$file_path" 2>/dev/null || true
            git add -- "$file_path" || true
            echo -e "${GREEN}↪ Resolved lock/generated file by taking theirs: ${file_path}${NC}"
            return 0
            ;;
    esac

    # Strategy-based default for the rest
    case "$RESOLUTION_STRATEGY" in
        ours)
            git checkout --ours -- "$file_path" 2>/dev/null || true
            ;;
        theirs)
            git checkout --theirs -- "$file_path" 2>/dev/null || true
            ;;
        manual)
            # Leave for manual resolution
            return 1
            ;;
        *)
            git checkout --theirs -- "$file_path" 2>/dev/null || true
            ;;
    esac
    git add -- "$file_path" || true
    echo -e "${GREEN}↪ Resolved by strategy (${RESOLUTION_STRATEGY}): ${file_path}${NC}"
    return 0
}

# Attempt to auto-resolve all conflicts
auto_resolve_conflicts() {
    local unresolved=0
    local conflicted
    conflicted=$(git diff --name-only --diff-filter=U)

    # If index shows none, try marker-based discovery
    if [ -z "$conflicted" ]; then
        conflicted=$(grep -rl "^<<<<<<< HEAD" . --exclude-dir={.git,node_modules,.next,dist,build} 2>/dev/null || true)
    fi

    if [ -z "$conflicted" ]; then
        echo -e "${GREEN}✅ No conflicted files detected${NC}"
        return 0
    fi

    echo -e "${YELLOW}⚠️  Conflicted files detected:${NC}"
    echo "$conflicted" | sed 's/^/  - /'

    while IFS= read -r path; do
        [ -z "$path" ] && continue
        if ! resolve_path "$path"; then
            echo -e "${YELLOW}⏭ Skipping manual file: ${path}${NC}"
            unresolved=$((unresolved + 1))
        fi
    done <<< "$conflicted"

    # If any conflicts remain, bail for manual intervention
    if git diff --name-only --diff-filter=U | grep -q '.'; then
        echo -e "${RED}❌ Unresolved conflicts remain. Manual intervention required.${NC}"
        return 1
    fi

    return 0
}

# Try to continue merge/rebase if in progress
continue_operations_if_any() {
    if [ -d .git/rebase-merge ] || [ -d .git/rebase-apply ]; then
        echo -e "${BLUE}🔁 Rebase in progress detected. Continuing...${NC}"
        if git rebase --continue 2>/dev/null; then
            echo -e "${GREEN}✅ Rebase continued successfully${NC}"
        fi
    elif [ -f .git/MERGE_HEAD ]; then
        echo -e "${BLUE}🔁 Merge in progress detected. Finalizing...${NC}"
        if git commit --no-edit 2>/dev/null || git commit -m "chore: auto-resolve conflicts (${RESOLUTION_STRATEGY})" 2>/dev/null; then
            echo -e "${GREEN}✅ Merge committed${NC}"
        fi
    fi
}

main() {
    ensure_rerere
    create_backup_branch

    if ! has_conflicts; then
        echo -e "${GREEN}✅ No conflicts detected. Nothing to do.${NC}"
        exit 0
    fi

    if [ "$RESOLUTION_STRATEGY" = "manual" ]; then
        echo -e "${YELLOW}ℹ️  Manual strategy selected. Skipping auto-resolution.${NC}"
        exit 2
    fi

    if auto_resolve_conflicts; then
        # Let rerere record resolutions
        git commit -m "chore: auto-resolve conflicts using '${RESOLUTION_STRATEGY}' strategy" || true
        continue_operations_if_any || true

        # Opportunistic formatting (best-effort; do not fail)
        if [ -f package.json ]; then
            if npm run -s format >/dev/null 2>&1; then
                git add -A
                git commit -m "style: format after auto-resolve" || true
            elif npx -y prettier -v >/dev/null 2>&1; then
                npx -y prettier -w . >/dev/null 2>&1 || true
                git add -A
                git commit -m "style: prettier after auto-resolve" || true
            fi
        fi

        echo -e "${GREEN}🎉 Conflicts resolved automatically.${NC}"
        exit 0
    else
        echo -e "${RED}❌ Could not auto-resolve all conflicts.${NC}"
        exit 1
    fi
}

trap 'echo -e "${RED}An error occurred in the conflict resolver.${NC}"' ERR
main "$@"

