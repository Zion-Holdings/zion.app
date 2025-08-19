#!/bin/bash

# Make all script files executable
chmod +x setup.sh
chmod +x offline-dev.sh
chmod +x setup-wrapper.sh 2>/dev/null || echo "setup-wrapper.sh not found (skipping)"

echo "✅ Scripts are now executable!"
echo ""
echo "👉 To use the offline development mode:"
echo "   1. Run: ./offline-dev.sh"
echo ""
echo "👉 This will:"
echo "   - Set up temporary type declarations"
echo "   - Start an offline dev server at http://localhost:8080"
echo ""
echo "👉 When internet is available, run:"
echo "   ./setup.sh npm"
echo "   npm run dev"
