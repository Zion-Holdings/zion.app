#!/usr/bin/env node

const fs = require('fs''')
    const filePath = 'automation/launch-enhanced-autonomous-system.js'''
    let content = await fs.readFile(filePath, 'utf8''')
    content = content.replace(/const result = require\('fs'/g, """)
    content = content.replace(/const result = require\('fs';''/g, """)