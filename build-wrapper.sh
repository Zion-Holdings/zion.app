#!/bin/bash
ulimit -n 131072 2>/dev/null || true
ulimit -n 65536 2>/dev/null || true
export NODE_OPTIONS="--max-old-space-size=8192"
npx next build 2>&1 | tail -120
