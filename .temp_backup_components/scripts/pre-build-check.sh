#!/bin/bash

echo "🔍 Pre-build validation..."

# Check for required files
required_files=("_headers" "_redirects")
for file in "${required_files[@]}"; do
  if [ ! -f "$file" ]; then
    echo "⚠️  Warning: $file not found, creating default version"
    case $file in
      "_headers")
        cat > _headers << 'EOF'
/*
  Cache-Control: public, max-age=0, must-revalidate, no-transform
  Content-Security-Policy: upgrade-insecure-requests
  Permissions-Policy: camera=(), microphone=(), geolocation=()
  Referrer-Policy: strict-origin-when-cross-origin
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
  X-Content-Type-Options: nosniff
  X-Frame-Options: SAMEORIGIN

/_next/static/*
  Cache-Control: public, max-age=31536000, immutable

/og/*
  Cache-Control: public, max-age=31536000, immutable
EOF
        ;;
      "_redirects")
        if [ ! -f "_redirects" ]; then
          echo "/*    /index.html   200" > _redirects
        fi
        ;;
    esac
  fi
done

# Check for security vulnerabilities
echo "🔒 Checking for security vulnerabilities..."
npm audit --audit-level=moderate || {
  echo "⚠️  Security vulnerabilities found. Consider running: npm audit fix --force"
}

# Check for deprecated packages
echo "📦 Checking for deprecated packages..."
npm list | grep -i "deprecated\|warn" || echo "✅ No deprecated packages found"

# Validate environment variables
echo "🌍 Validating environment variables..."
required_env_vars=("NODE_VERSION" "NODE_OPTIONS")
for var in "${required_env_vars[@]}"; do
  if [ -z "${!var}" ]; then
    echo "⚠️  Warning: $var environment variable not set"
  else
    echo "✅ $var is set: ${!var}"
  fi
done

echo "✅ Pre-build validation complete"