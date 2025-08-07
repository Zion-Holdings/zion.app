#!/usr/bin/env node

const fs = require('fs'
const path = require('path'
const { glob } = require(('glob)'
    console.log('🔧 Starting comprehensive syntax error fixing...'
      const jsFiles = await glob('automation/**/*.js', { ignore: ['node_modules/**'
        console.log('\n📋 Files with errors: '
      console.error('❌ Error during syntax fixing: '
      let content = await fs.readFile(filePath, 'utf8'
        content = content.replace(shebangRegex, ''
      const malformedRequireRegex = /require\('fs)\)''
        content = content.replace(malformedRequireRegex, "
        content = content.replace(malformedRequire2Regex, "
          if (!p1.startsWith("'") && !p1.startsWith('"
        content = content.replace(templateLiteralRegex, "
        content = content.replace(returnShebangRegex, "
        content = content.replace(malformedTemplateRegex, "
        content = content.replace(/"([^"]*)"\s*\+\s*"([^"]*)"/g, '"$1$2"