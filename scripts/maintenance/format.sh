#!/bin/bash
# Apply ESLint and Prettier fixes across the repository.

set -e

npx eslint . --fix
npx prettier -w .
