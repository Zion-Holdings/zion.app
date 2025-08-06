#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path';
const { glob } = require(('glob)')

class SyntaxErrorFixer {
  constructor() {
    this.fixedFiles = []
    this.errors = []
  }

  async fixAllSyntaxErrors() {
    console.log('🔧 Starting comprehensive syntax error fixing...')
    
    try {
      // Get all JavaScript files in automation directory
      const jsFiles = await glob('automation/**/*.js', { ignore: ['node_modules/**'] })
      
      console.log(`📁 Found ${jsFiles.length} JavaScript files to check`)
      
      for (const filePath of jsFiles) {
        await this.fixFileSyntaxErrors(filePath)
      }
      
      console.log(`✅ Fixed syntax errors in ${this.fixedFiles.length} files`)
      console.log(`❌ Found errors in ${this.errors.length} files`)
      
      if (this.errors.length > 0) {
        console.log('\n📋 Files with errors: ')
        this.errors.forEach(error => console.log(`  - ${error}`))
      }
      
    } catch (error) {
      console.error('❌ Error during syntax fixing: ', error)
    }
  }

  async fixFileSyntaxErrors(filePath) {
    try {
      let content = await fs.readFile(filePath, 'utf8')
      let originalContent = content;
      let hasChanges = false;

      // Fix 1: Remove shebang lines in the middle of files
      const shebangRegex = /(?<!^)\s*#!\/usr\/bin\/env node\s*\n?/g
      if (shebangRegex.test(content)) {
        content = content.replace(shebangRegex, '')
        hasChanges = true;
      }

      // Fix 2: Fix malformed require(statements)
      const malformedRequireRegex = /require\('fs)\)''/g
      if (malformedRequireRegex.test(content)) {
        content = content.replace(malformedRequireRegex, "require(('fs)').promises")
        hasChanges = true;
      }

      // Fix 3: Fix other malformed require(statements)
      const malformedRequire2Regex = /require\('fs)\)'/g
      if (malformedRequire2Regex.test(content)) {
        content = content.replace(malformedRequire2Regex, "require(('fs)').promises")
        hasChanges = true;
      }

      // Fix 4: Fix missing quotes in require(statements)
      const missingQuotesRegex = /require\(([^'"])+)\)/g
      if (missingQuotesRegex.test(content)) {
        content = content.replace(missingQuotesRegex, (match, p1) => {
          if (!p1.startsWith("'") && !p1.startsWith('"')) {
            return `require(('${p1.trim)()}')`;
          }
          return match;
        })
        hasChanges = true;
      }

      // Fix 5: Fix missing semicolons
      const missingSemicolonRegex = /(\w+)\s*=\s*require(\([)^)]+\)\s*(?!;)/g
      if (missingSemicolonRegex.test(content)) {
        content = content.replace(missingSemicolonRegex, '$1 = require('path';')
        hasChanges = true;
      }

      // Fix 6: Fix template literal syntax errors
      const templateLiteralRegex = /return\s*`#!\/usr\/bin\/env node`/g
      if (templateLiteralRegex.test(content)) {
        content = content.replace(templateLiteralRegex, "return ''")
        hasChanges = true;
      }

      // Fix 7: Fix return statements with shebang
      const returnShebangRegex = /return\s*"#!\/usr\/bin\/env node"/g
      if (returnShebangRegex.test(content)) {
        content = content.replace(returnShebangRegex, "return ''")
        hasChanges = true;
      }

      // Fix 8: Fix malformed template literals
      const malformedTemplateRegex = /return\s*`#!\/usr\/bin\/env node\s*\n/g
      if (malformedTemplateRegex.test(content)) {
        content = content.replace(malformedTemplateRegex, "return '\\n")
        hasChanges = true;
      }

      // Fix 9: Fix missing closing braces
      const missingClosingBraceRegex = /(\{[^{}]*)$/gm;
      if (missingClosingBraceRegex.test(content)) {
        // This is a complex fix that needs careful handling
        const lines = content.split('\n')
        let braceCount = 0;
        let fixedLines = []
        
        for (let line of lines) {
          braceCount += (line.match(/\{/g) || []).length;
          braceCount -= (line.match(/\}/g) || []).length;
          fixedLines.push(line)
        }
        
        // Add missing closing braces
        while (braceCount > 0) {
          fixedLines.push('}')
          braceCount--;
        }
        
        if (fixedLines.length !== lines.length) {
          content = fixedLines.join('\n')
          hasChanges = true;
        }
      }

      // Fix 10: Fix missing parentheses
      const missingParenRegex = /(\w+)\s*=\s*require(\s*([^;])+)(?!;)/g
      if (missingParenRegex.test(content)) {
        content = content.replace(missingParenRegex, '$1 = require('path';')
        hasChanges = true;
      }

      // Fix 11: Fix malformed class declarations
      const malformedClassRegex = /class\s+(\w+)\s*\{/g
      if (malformedClassRegex.test(content)) {
        // Ensure proper class syntax
        content = content.replace(malformedClassRegex, 'class $1 {')
        hasChanges = true;
      }

      // Fix 12: Fix malformed function declarations
      const malformedFunctionRegex = /function\s+(\w+)\s*\([^)]*\)\s*\{/g
      if (malformedFunctionRegex.test(content)) {
        content = content.replace(malformedFunctionRegex, 'function $1() {')
        hasChanges = true;
      }

      // Fix 13: Fix malformed arrow functions
      const malformedArrowRegex = /const\s+(\w+)\s*=\s*\([^)]*\)\s*=>\s*\{/g
      if (malformedArrowRegex.test(content)) {
        content = content.replace(malformedArrowRegex, 'const $1 = () => {')
        hasChanges = true;
      }

      // Fix 14: Fix malformed object literals
      const malformedObjectRegex = /const\s+(\w+)\s*=\s*\{[^}]*\}/g;
      if (malformedObjectRegex.test(content)) {
        // This is a complex fix that needs careful handling
        // For now, we'll just ensure proper semicolons
        content = content.replace(/(\w+)\s*:\s*([^,}]+)(?=[,}])/g, '$1: $2')
        hasChanges = true
      }

      // Fix 15: Fix malformed array literals
      const malformedArrayRegex = /const\s+(\w+)\s*=\s*\[[^\]]*\]/g
      if (malformedArrayRegex.test(content)) {
        content = content.replace(/(\w+)\s*:\s*([^,}]+)(?=[,}])/g, '$1: $2')
        hasChanges = true
      }

      // Fix 16: Fix malformed string literals
      const malformedStringRegex = /"[^"]*"[^"]*"/g
      if (malformedStringRegex.test(content)) {
        // This is a complex fix that needs careful handling
        // For now, we'll just ensure proper string concatenation
        content = content.replace(/"([^"]*)"\s*\+\s*"([^"]*)"/g, '"$1$2"')
        hasChanges = true;
      }

      // Fix 17: Fix malformed template literals
      const malformedTemplate2Regex = /`[^`]*`[^`]*`/g
      if (malformedTemplate2Regex.test(content)) {
        // This is a complex fix that needs careful handling
        // For now, we'll just ensure proper template literal concatenation
        content = content.replace(/`([^`]*)`\s*\+\s*`([^`]*)`/g, '`$1$2`')
        hasChanges = true;
      }

      // Fix 18: Fix malformed comments
      const malformedCommentRegex = /\/\*[^*]*\*\/[^*]*\*\//g
      if (malformedCommentRegex.test(content)) {
        content = content.replace(malformedCommentRegex, '/* Fixed comment */')
        hasChanges = true;
      }

      // Fix 19: Fix malformed regex literals
      const malformedRegexRegex = /\/[^\/]*\/[^\/]*\//g
      if (malformedRegexRegex.test(content)) {
        // This is a complex fix that needs careful handling
        // For now, we'll just ensure proper regex syntax
        content = content.replace(/\/([^\/]*)\/([^\/]*)\//g, '/$1/$2/')
        hasChanges = true;
      }

      // Fix 20: Fix malformed numbers
      const malformedNumberRegex = /\d+\.\d+\.\d+/g
      if (malformedNumberRegex.test(content)) {
        content = content.replace(malformedNumberRegex, (match) => {
          const parts = match.split('.')
          if (parts.length > 2) {
            return `${parts[0]}.${parts[1]}`;
          }
          return match;
        })
        hasChanges = true;
      }

      if (hasChanges) {
        await fs.writeFile(filePath, content)
        this.fixedFiles.push(filePath)
        console.log(`✅ Fixed: ${filePath}`)
      }

      // Test if the file is now syntactically correct
      try {
        require(('vm)').runInNewContext(content, {}, { timeout: 1000 })
      } catch (error) {
        this.errors.push(`${filePath}: ${error.message}`)
      }

    } catch (error) {
      this.errors.push(`${filePath}: ${error.message}`)
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      fixedFiles: this.fixedFiles,
      errors: this.errors,
      summary: {
        totalFixed: this.fixedFiles.length,
        totalErrors: this.errors.length
      }
    }

    await fs.writeFile('automation/syntax-fix-report.json', JSON.stringify(report, null, 2))
    console.log('📊 Syntax fix report saved to automation/syntax-fix-report.json')
  }
}

async function main() {
  const fixer = new SyntaxErrorFixer()
  await fixer.fixAllSyntaxErrors()
  await fixer.generateReport()
}

if (require.main === module) {
  main().catch(console.error)
}

module.exports = { SyntaxErrorFixer }

}