#!/bin/bash
echo "🔄 Restarting Link Generation System..."
pm2 restart ultra-fast-links redundant-links nav-links-instance footer-links-instance content-links-instance social-links-instance business-links-instance
echo "✅ All processes restarted"
