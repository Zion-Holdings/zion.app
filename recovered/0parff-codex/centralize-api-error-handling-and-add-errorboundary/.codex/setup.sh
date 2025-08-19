#!/bin/bash
# Setup script for Codex environments. Installs npm dependencies.
set -euo pipefail

# Move to repository root
REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$REPO_ROOT"

# Ensure setup.sh is executable and run it with npm
chmod +x setup.sh
./setup.sh npm
