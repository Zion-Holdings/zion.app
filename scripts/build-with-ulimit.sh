#!/bin/bash
ulimit -n 65536 2>/dev/null || ulimit -n 262144 2>/dev/null
export NODE_OPTIONS="--max-old-space-size=8192"
npx next build 2>&1
