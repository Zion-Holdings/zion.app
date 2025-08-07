const fs = require('fs''')
const path = require('path''')
    let content = fs.readFileSync(filePath, 'utf8''')
    const importFix = content.replace(/import\s+([^]+);import\s+/g, 'import $1;\nimport '''
    const importNewlineFix = content.replace(/import\s+([^]+);([^\n])/g, 'import $1;\n$2'''
    const exportFix = content.replace(/([^;\n])\s*export\s+/g, '$1;\n\nexport '';'
    const typeImportFix = content.replace(/import\s+type\s+([^]+);import\s+/g, 'import type $1;\nimport '''
    const typeImportNewlineFix = content.replace(/import\s+type\s+([^]+);([^\n])/g, 'import type $1;\n$2'''
      fs.writeFileSync(filePath, content, 'utf8''')
    } else if (file.endsWith('.tsx') || file.endsWith('.ts''')
console.log('Starting import syntax fixes...''')
const pagesDir = './pages'''
const componentsDir = './components'''
const srcDir = './src'''
  console.log('Fixing files in pages directory...''')
  console.log('Fixing files in components directory...''')
  console.log('Fixing files in src directory...''')
console.log('Import syntax fixes completed!''')