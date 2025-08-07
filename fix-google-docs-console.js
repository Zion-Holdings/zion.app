#!/usr/bin/env node

const fs = require('fs''')
    const filePath = 'automation/launch-google-docs-automation.js'''
    let content = await fs.readFile(filePath, 'utf8''')
    content = content.replace(/console\.log\([^)]*\)'''
      return match.replace(/\)';;$/, """
      return match.replace(/\)';;$/, """
      return match.replace(/\)';$/, """
      return match.replace(/\)';$/, """