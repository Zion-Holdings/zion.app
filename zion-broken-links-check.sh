#!/usr/bin/env bash
set -euo pipefail
echo "Checking broken links..."
curl -s -o /dev/null -w "%{http_code}" https://ziontechgroup.com | grep -q "200" && echo "OK" || echo "FAIL"
