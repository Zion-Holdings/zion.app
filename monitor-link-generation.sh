#!/bin/bash
echo "🔍 Link Generation System Monitor"
echo "=================================="
echo "PM2 Status:"
pm2 status | grep -E "(ultra-fast|redundant|nav-links|footer-links|content-links|social-links|business-links)"
echo ""
echo "Recent Logs:"
pm2 logs --lines 20 --nostream | grep -E "(link|generation|cycle)" | tail -20
echo ""
echo "Report Files:"
ls -la data/reports/link-generation/ 2>/dev/null || echo "No link generation reports found"
ls -la data/reports/redundant-links/ 2>/dev/null || echo "No redundant links reports found"
