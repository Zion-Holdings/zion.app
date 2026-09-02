#!/usr/bin/env bash
set -euo pipefail
echo "Checking service counts..."
ls public/services/*/index.html 2>/dev/null | wc -l
