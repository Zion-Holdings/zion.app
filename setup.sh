
#!/bin/bash

# Make sure the script fails if any command fails
set -e

# Package manager
PM=${1:-npm}

echo "Setting up the project with package manager: $PM"

# Check if the package manager exists
if ! command -v $PM &>/dev/null; then
  echo "Error: $PM is not installed. Please install it first."
  exit 1
fi

# Clean up offline files
echo "Removing offline development files..."
rm -f offline.html offline-dev.js OFFLINE-DEV-README.md tsconfig.offline.json
rm -f src/types/offline-shims.d.ts

# Install dependencies
echo "Installing dependencies..."
$PM install

# Development message
echo ""
echo "✅ Setup complete!"
echo ""
echo "👉 To start development server, run:"
echo "   $PM run dev"
echo ""
