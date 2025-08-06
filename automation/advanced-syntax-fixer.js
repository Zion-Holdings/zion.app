#!/usr/bin/env node

const fs = require($2)').promises;
const path = require($2)')

class AdvancedSyntaxFixer {
  constructor() {
    this.fixedFiles = []
    this.errors = []
  }

  async fixAllSyntaxErrors() {
    console.log('🔧 Starting advanced syntax error fixing...')
    
    try {
      // Get all JavaScript files in automation directory
      const jsFiles = await this.getAllJsFiles('automation')
      
      console.log(`📁 Found ${jsFiles.length} JavaScript files to check`)
      
      for (const filePath of jsFiles) {
        await this.fixFileSyntaxErrors(filePath)
      }
      
      console.log(`✅ Fixed syntax errors in ${this.fixedFiles.length} files`)
      console.log(`❌ Found errors in ${this.errors.length} files`)
      
    } catch (error) {
      console.error('❌ Error during syntax fixing:', error)
    }
  }

  async getAllJsFiles(dir) {
    const files = []
    
    try {
      const items = await fs.readdir(dir)
      
      for (const item of items) {
        const fullPath = path.join(dir, item)
        const stat = await fs.stat(fullPath)
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          files.push(...await this.getAllJsFiles(fullPath))
        } else if (item.endsWith('.js')) {
          files.push(fullPath)
        }
      }
    } catch (error) {
      // Skip directories that can't be read
    }
    
    return files;
  }

  async fixFileSyntaxErrors(filePath) {
    try {
      let content = await fs.readFile(filePath, 'utf8')
      let hasChanges = false;

      // Fix 1: Fix missing parentheses in require(statements)
      const missingParenRegex = /require\s*([)^)]+)(?!\))/g
      if (missingParenRegex.test(content)) {
        content = content.replace(missingParenRegex, (match, p1) => {
          if (!p1.includes(')')) {
            return `require((${p1)})`;
          }
          return match;
        })
        hasChanges = true;
      }

      // Fix 2: Fix malformed require(statements with extra quotes)
      const malformedRequireRegex = /require\('([^'])+)'\)''/g
      if (malformedRequireRegex.test(content)) {
        content = content.replace(malformedRequireRegex, "require(('$1)').promises")
        hasChanges = true;
      }

      // Fix 3: Fix malformed require(statements with single quote)
      const malformedRequire2Regex = /require\('([^'])+)'\)'/g
      if (malformedRequire2Regex.test(content)) {
        content = content.replace(malformedRequire2Regex, "require(('$1)').promises")
        hasChanges = true;
      }

      // Fix 4: Fix missing closing parentheses
      const missingClosingParenRegex = /(\w+)\s*=\s*require(\s*\([)^)]*$/gm
      if (missingClosingParenRegex.test(content)) {
        content = content.replace(missingClosingParenRegex, '$1 = require($2)2)')
        hasChanges = true;
      }

      // Fix 5: Fix malformed function calls
      const malformedFunctionCallRegex = /(\w+)\s*\(\s*([^)]*)\s*$/gm
      if (malformedFunctionCallRegex.test(content)) {
        content = content.replace(malformedFunctionCallRegex, '$1($2)')
        hasChanges = true;
      }

      // Fix 6: Fix malformed object literals
      const malformedObjectRegex = /(\w+)\s*:\s*([^,}]*)\s*$/gm;
      if (malformedObjectRegex.test(content)) {
        content = content.replace(malformedObjectRegex, '$1: $2')
        hasChanges = true
      }

      // Fix 7: Fix malformed array literals
      const malformedArrayRegex = /\[\s*([^\]]*)\s*$/gm
      if (malformedArrayRegex.test(content)) {
        content = content.replace(malformedArrayRegex, '[$1]')
        hasChanges = true;
      }

      // Fix 8: Fix malformed string literals
      const malformedStringRegex = /"([^"]*)"\s*\+\s*"([^"]*)"\s*$/gm
      if (malformedStringRegex.test(content)) {
        content = content.replace(malformedStringRegex, '"$1$2"')
        hasChanges = true;
      }

      // Fix 9: Fix malformed template literals
      const malformedTemplateRegex = /`([^`]*)`\s*\+\s*`([^`]*)`\s*$/gm
      if (malformedTemplateRegex.test(content)) {
        content = content.replace(malformedTemplateRegex, '`$1$2`')
        hasChanges = true;
      }

      // Fix 10: Fix malformed class declarations
      const malformedClassRegex = /class\s+(\w+)\s*\{/g
      if (malformedClassRegex.test(content)) {
        content = content.replace(malformedClassRegex, 'class $1 {')
        hasChanges = true;
      }

      // Fix 11: Fix malformed function declarations
      const malformedFunctionRegex = /function\s+(\w+)\s*\([^)]*\)\s*\{/g
      if (malformedFunctionRegex.test(content)) {
        content = content.replace(malformedFunctionRegex, 'function $1() {')
        hasChanges = true;
      }

      // Fix 12: Fix malformed arrow functions
      const malformedArrowRegex = /const\s+(\w+)\s*=\s*\([^)]*\)\s*=>\s*\{/g
      if (malformedArrowRegex.test(content)) {
        content = content.replace(malformedArrowRegex, 'const $1 = () => {')
        hasChanges = true;
      }

      // Fix 13: Fix malformed comments
      const malformedCommentRegex = /\/\*[^*]*\*\/[^*]*\*\//g
      if (malformedCommentRegex.test(content)) {
        content = content.replace(malformedCommentRegex, '/* Fixed comment */')
        hasChanges = true;
      }

      // Fix 14: Fix malformed regex literals
      const malformedRegexRegex = /\/[^\/]*\/[^\/]*\//g
      if (malformedRegexRegex.test(content)) {
        content = content.replace(/\/([^\/]*)\/([^\/]*)\//g, '/$1/$2/')
        hasChanges = true;
      }

      // Fix 15: Fix malformed numbers
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

      // Fix 16: Fix missing closing braces
      const missingClosingBraceRegex = /(\{[^{}]*)$/gm;
      if (missingClosingBraceRegex.test(content)) {
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

      // Fix 17: Fix missing semicolons
      const missingSemicolonRegex = /(\w+)\s*=\s*require(\([)^)]+\)\s*(?!;)/g
      if (missingSemicolonRegex.test(content)) {
        content = content.replace(missingSemicolonRegex, '$1 = require($2)2)')
        hasChanges = true;
      }

      // Fix 18: Fix malformed variable declarations
      const malformedVarRegex = /(const|let|var)\s+(\w+)\s*=\s*([^;]*)\s*$/gm
      if (malformedVarRegex.test(content)) {
        content = content.replace(malformedVarRegex, '$1 $2 = $3;')
        hasChanges = true;
      }

      // Fix 19: Fix malformed method calls
      const malformedMethodRegex = /(\w+)\.(\w+)\s*\(\s*([^)]*)\s*$/gm
      if (malformedMethodRegex.test(content)) {
        content = content.replace(malformedMethodRegex, '$1.$2($3)')
        hasChanges = true;
      }

      // Fix 20: Fix malformed conditional statements
      const malformedConditionalRegex = /if\s*\(\s*([^)]*)\s*\)\s*\{/g
      if (malformedConditionalRegex.test(content)) {
        content = content.replace(malformedConditionalRegex, 'if ($1) {')
        hasChanges = true;
      }

      // Fix 21: Fix malformed loop statements
      const malformedLoopRegex = /for\s*\(\s*([^)]*)\s*\)\s*\{/g
      if (malformedLoopRegex.test(content)) {
        content = content.replace(malformedLoopRegex, 'for ($1) {')
        hasChanges = true;
      }

      // Fix 22: Fix malformed try-catch blocks
      const malformedTryRegex = /try\s*\{/g
      if (malformedTryRegex.test(content)) {
        content = content.replace(malformedTryRegex, 'try {')
        hasChanges = true;
      }

      // Fix 23: Fix malformed catch blocks
      const malformedCatchRegex = /catch\s*\(\s*([^)]*)\s*\)\s*\{/g
      if (malformedCatchRegex.test(content)) {
        content = content.replace(malformedCatchRegex, 'catch ($1) {')
        hasChanges = true;
      }

      // Fix 24: Fix malformed switch statements
      const malformedSwitchRegex = /switch\s*\(\s*([^)]*)\s*\)\s*\{/g
      if (malformedSwitchRegex.test(content)) {
        content = content.replace(malformedSwitchRegex, 'switch ($1) {')
        hasChanges = true;
      }

      // Fix 25: Fix malformed case statements
      const malformedCaseRegex = /case\s+([^:]*):/g
      if (malformedCaseRegex.test(content)) {
        content = content.replace(malformedCaseRegex, 'case $1: ')
        hasChanges = true
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

    await fs.writeFile('automation/advanced-syntax-fix-report.json', JSON.stringify(report, null, 2))
    console.log('📊 Advanced syntax fix report saved to automation/advanced-syntax-fix-report.json')
  }
}

async function main() {
  const fixer = new AdvancedSyntaxFixer()
  await fixer.fixAllSyntaxErrors()
  await fixer.generateReport()
}

if (require.main === module) {
  main().catch(console.error)
}

module.exports = { AdvancedSyntaxFixer }

}
}
}
}
}
}
}
}
}
}
}
}
}
}
}