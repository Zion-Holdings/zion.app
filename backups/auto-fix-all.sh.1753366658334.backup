#!/bin/bash

# Run all auto-fixers for the codebase

set -e

echo "Running TypeScript check..."
npx tsc --noEmit || true

echo "Running ESLint auto-fix..."
npx eslint . --fix || true

echo "Running Prettier..."
npx prettier . --write || true

echo "Running custom fix scripts..."
node scripts/fix-all-remaining-syntax.cjs || true
node scripts/final-syntax-fix.cjs || true
node scripts/aggressive-syntax-fix-final.cjs || true

echo "All auto-fixers complete." 