#!/usr/bin/env node

const fs = require('fs'
    const filePath = 'automation/launch-enhanced-autonomous-system.js'
    let content = await fs.readFile(filePath, 'utf8'
    content = content.replace(/console\.log\(📊 System Status: "'", \{"":/g, 'console.log("📊 System Status:"
    content = content.replace(/uptime: "\$\{uptimeDays\}"d \$\{uptimeHours % 24\}h \$\{uptimeMinutes % 60\}m",""
    content = content.replace(/"\}\)""