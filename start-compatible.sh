#!/bin/bash

# Node.js Compatibility Script
# This script ensures the app runs with compatible Node.js settings

export NODE_OPTIONS="--no-deprecation --max-old-space-size=4096"

# Check Node.js version
NODE_VERSION=$(node --version)
echo "Using Node.js version: $NODE_VERSION"

# Start the development server
echo "Starting development server with compatibility settings..."
npm run dev -- --port 3001
