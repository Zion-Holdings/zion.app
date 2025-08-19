#!/bin/bash
set -e

echo "🚀 Starting optimized build process..."

# Clean environment
rm -rf .next out tsconfig.tsbuildinfo .temp 2>/dev/null || true

# Set optimal environment variables
export NODE_OPTIONS="--max-old-space-size=6144 --openssl-legacy-provider"
export NEXT_TELEMETRY_DISABLED=1
export CI=true

# Pre-build optimizations
echo "📦 Installing dependencies..."
npm ci --prefer-offline --no-audit

echo "🔍 Running pre-build checks..."
npm run netlify:manifest

echo "🏗️ Building application..."
npm run build

echo "✅ Build completed successfully!"
