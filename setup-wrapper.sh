#!/bin/bash
set -e

# Check if offline shims exist and need to be cleaned up
if [ -f "src/types/offline-shims.d.ts" ]; then
  echo "Removing offline development shims..."
  rm "src/types/offline-shims.d.ts"
  echo "Offline development files removed. Continuing with normal setup."
fi

# Call the original setup.sh with all arguments
./setup.sh "$@"
