#!/usr/bin/env node

const fs = require('fs'
    const filePath = 'automation/launch-google-docs-automation.js'
    let content = await fs.readFile(filePath, 'utf8'
    content = content.replace(/const HIGH_SPEED_MODE = process\.env\.HIGH_SPEED_MODE === 'true;/g, "
    content = content.replace(/const fs = require\('path'\);/g, "
    content = content.replace(/const path = require\('fs'\);/g, "
      return match.replace(/\\'|\\"/g, "'").replace(/\)$/, "
    content = content.replace(/''/g, "
    content = content.replace(/""/g, '"