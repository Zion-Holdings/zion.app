#!/bin/bash
# This script formats the code using Prettier and then lints it with ESLint, applying automatic fixes.

echo "Formatting code with Prettier..."
npm run format

echo "\nLinting code with ESLint and applying fixes..."
npm run lint -- --fix # The extra '--' ensures --fix is passed to the eslint command in npm run lint

echo "\nLinting and formatting complete."
