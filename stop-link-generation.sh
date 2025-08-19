#!/bin/bash
echo "🛑 Stopping Link Generation System..."
pm2 stop ultra-fast-links redundant-links nav-links-instance footer-links-instance content-links-instance social-links-instance business-links-instance
echo "✅ All processes stopped"
