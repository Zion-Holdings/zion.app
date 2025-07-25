#!/bin/bash

# Run ESLint autofix for accessibility
npm run lint:accessibility
ESLINT_STATUS=$?

# Run djlint autofix for Django/HTML templates
npm run lint:templates
DJLINT_STATUS=$?

# Check if there are any changes
if [[ $(git status --porcelain) ]]; then
  echo "\n[auto-fix-accessibility] Detected changes after linting."
  # Optionally auto-commit and push
  git add .
  git commit -m "chore(auto-fix): automated accessibility and template fixes [ci skip]"
  git push
else
  echo "\n[auto-fix-accessibility] No changes detected."
fi

# Exit with the combined status of both linters
exit $((ESLINT_STATUS || DJLINT_STATUS)) 