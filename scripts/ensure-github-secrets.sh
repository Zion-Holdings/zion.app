#!/usr/bin/env bash
set -euo pipefail

required=(
  LINKEDIN_ACCESS_TOKEN
  LINKEDIN_ORG_ID
  IG_USER_ID
  IG_ACCESS_TOKEN
)

placeholder_value="PLACEHOLDER_SET_IN_REPO_SETTINGS"

if ! command -v gh >/dev/null 2>&1; then
  echo "GitHub CLI (gh) is not installed. Install from https://cli.github.com and run 'gh auth login'." >&2
  exit 1
fi

if ! gh auth status >/dev/null 2>&1; then
  echo "GitHub CLI not authenticated. Run: gh auth login" >&2
  exit 1
fi

repo=$(gh repo view --json nameWithOwner -q .nameWithOwner 2>/dev/null || true)
if [ -z "$repo" ]; then
  echo "Unable to detect repo. Run inside the repo or specify with GH_REPO=owner/name." >&2
  exit 1
fi

echo "Using repo: $repo"

echo "Existing secrets:"
gh secret list --repo "$repo" || true

for key in "${required[@]}"; do
  echo "\nEnsuring secret: $key"
  if gh secret list --repo "$repo" | awk '{print $1}' | grep -qx "$key"; then
    echo "- Already present. Skipping."
  else
    echo "- Creating placeholder ($key). Update it later in GitHub repo settings."
    printf "%s" "$placeholder_value" | gh secret set "$key" --repo "$repo" -b- || {
      echo "Failed to set $key via gh CLI." >&2
      exit 1
    }
  fi
done

echo "\nDone. Update these secrets with real values in GitHub > Settings > Secrets and variables > Actions."


