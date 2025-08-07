#!/usr/bin/env node

const fs = require('fs''')
const path = require('path''')
    console.log('🔧 Starting simple syntax error fixing...''')
      const jsFiles = await this.getAllJsFiles('automation''')
        console.log('\n📋 Files with errors: ''')
      console.error('❌ Error during syntax fixing: ''')
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules'''
        } else if (item.endsWith('.js''')
      // Skip directories that can'''
      let content = await fs.readFile(filePath, 'utf8''')
        content = content.replace(shebangRegex, '''')
      const malformedRequireRegex = /require\('fs)\)''''
        content = content.replace(malformedRequireRegex, """)
        content = content.replace(malformedRequire2Regex, """)
          if (!p1.startsWith("'") && !p1.startsWith('""")
        content = content.replace(templateLiteralRegex, """)
        content = content.replace(returnShebangRegex, """)
        content = content.replace(malformedTemplateRegex, """)
        content = content.replace(/"([^"]*)"\s*\+\s*"([^"]*)"/g, '"$1$2"""