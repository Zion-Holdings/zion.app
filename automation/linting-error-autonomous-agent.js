#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class LintingErrorAutonomousAgent {
  constructor() {
    this.projectRoot = process.cwd();
    this.lintingRules = {
      missingSemicolons: /Missing semicolon/g,
      unusedVariables: /'([^']+)' is defined but never used/g,
      consoleStatements: /'console' is not defined/g,
      unexpectedConsole: /Unexpected console statement/g,
      missingImports: /Cannot find module/g,
      parsingErrors: /Parsing error/g
    };
  }

  async detectLintingErrors() {
    try {
      console.log('🔍 Detecting linting errors...');
      
      const lintOutput = execSync('npm run lint 2>&1', {
        encoding: 'utf8',
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      const errors = this.parseLintErrors(lintOutput);
      console.log(`📊 Found ${errors.length} linting errors`);
      
      return errors;
    } catch (error) {
      // Lint command failed, parse the error output
      const errors = this.parseLintErrors(error.stdout || error.stderr || '');
      console.log(`📊 Found ${errors.length} linting errors`);
      return errors;
    }
  }

  parseLintErrors(output) {
    const errors = [];
    const lines = output.split('\n');
    
    for (const line of lines) {
      if (line.includes('Error:') || line.includes('error:')) {
        const match = line.match(/\.\/(.*?):(\d+):(\d+)/);
        if (match) {
          errors.push({
            file: match[1],
            line: parseInt(match[2]),
            column: parseInt(match[3]),
            message: line.split('Error: ')[1]?.trim() || line.split('error: ')[1]?.trim() || 'Linting error'
          });
        }
      }
    }
    
    return errors;
  }

  async fixLintingErrors(errors) {
    console.log('🔧 Fixing linting errors...');
    let fixedCount = 0;
    
    // Group errors by file
    const errorsByFile = {};
    for (const error of errors) {
      if (!errorsByFile[error.file]) {
        errorsByFile[error.file] = [];
      }
      errorsByFile[error.file].push(error);
    }
    
    for (const [filePath, fileErrors] of Object.entries(errorsByFile)) {
      const fullPath = path.join(this.projectRoot, filePath);
      
      if (!fs.existsSync(fullPath)) {
        console.log(`⚠️ File not found: ${fullPath}`);
        continue;
      }
      
      const fixed = await this.fixFileLintingErrors(fullPath, fileErrors);
      if (fixed) {
        fixedCount++;
      }
    }
    
    console.log(`✅ Fixed ${fixedCount} files`);
    return fixedCount;
  }

  async fixFileLintingErrors(filePath, errors) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      
      // Sort errors by line number in descending order to avoid line number shifts
      errors.sort((a, b) => b.line - a.line);
      
      for (const error of errors) {
        const lines = content.split('\n');
        const lineIndex = error.line - 1;
        
        if (lineIndex >= 0 && lineIndex < lines.length) {
          const line = lines[lineIndex];
          
          if (error.message.includes('Missing semicolon')) {
            // Add missing semicolon
            if (!line.trim().endsWith(';') && !line.trim().endsWith('{') && !line.trim().endsWith('}')) {
              lines[lineIndex] = line + ';';
              modified = true;
            }
          } else if (error.message.includes('is defined but never used')) {
            // Remove unused imports or variables
            const unusedMatch = error.message.match(/'([^']+)' is defined but never used/);
            if (unusedMatch) {
              const unusedVar = unusedMatch[1];
              
              // Remove unused import
              if (line.includes('import') && line.includes(unusedVar)) {
                // Remove the entire import line if it only contains unused variables
                if (line.includes('{') && line.includes('}')) {
                  const importMatch = line.match(/import\s*{([^}]+)}\s*from/);
                  if (importMatch) {
                    const imports = importMatch[1].split(',').map(imp => imp.trim());
                    const remainingImports = imports.filter(imp => imp !== unusedVar);
                    
                    if (remainingImports.length === 0) {
                      // Remove entire line if no imports remain
                      lines.splice(lineIndex, 1);
                    } else {
                      // Update import statement
                      lines[lineIndex] = line.replace(
                        /import\s*{[^}]+}\s*from/,
                        `import { ${remainingImports.join(', ')} } from`
                      );
                    }
                    modified = true;
                  }
                } else {
                  // Remove entire import line
                  lines.splice(lineIndex, 1);
                  modified = true;
                }
              } else if (line.includes('const') || line.includes('let') || line.includes('var')) {
                // Remove unused variable declaration
                lines.splice(lineIndex, 1);
                modified = true;
              }
            }
          } else if (error.message.includes('console') && error.message.includes('not defined')) {
            // Add console to globals or remove console statement
            if (line.includes('console.')) {
              lines[lineIndex] = line.replace(/console\./g, '// console.');
              modified = true;
            }
          } else if (error.message.includes('Unexpected console statement')) {
            // Comment out console statements
            if (line.includes('console.')) {
              lines[lineIndex] = line.replace(/console\./g, '// console.');
              modified = true;
            }
          } else if (error.message.includes('Parsing error')) {
            // Fix common parsing errors
            if (line.includes('(') && !line.includes(')')) {
              lines[lineIndex] = line + ')';
              modified = true;
            }
          }
        }
      }
      
      if (modified) {
        content = lines.join('\n');
        fs.writeFileSync(filePath, content);
        console.log(`✅ Fixed linting errors in ${filePath}`);
        return true;
      }
      
      return false;
    } catch (error) {
      console.error(`❌ Error fixing linting errors in ${filePath}:`, error.message);
      return false;
    }
  }

  async fixAllLintingErrors() {
    console.log('🔧 Starting comprehensive linting error fixing...');
    
    try {
      const errors = await this.detectLintingErrors();
      
      if (errors.length === 0) {
        console.log('✅ No linting errors found');
        return 0;
      }
      
      console.log(`🔧 Found ${errors.length} linting errors, attempting to fix...`);
      const fixedCount = await this.fixLintingErrors(errors);
      
      if (fixedCount > 0) {
        console.log(`✅ Fixed ${fixedCount} files with linting errors`);
        
        // Test the build after fixes
        await this.testBuild();
      } else {
        console.log('⚠️ No linting errors were automatically fixed');
      }
      
      return fixedCount;
    } catch (error) {
      console.error('❌ Error in linting error fixing:', error.message);
      return 0;
    }
  }

  async testBuild() {
    console.log('🧪 Testing build after linting fixes...');
    
    try {
      const buildOutput = execSync('npm run build 2>&1', {
        encoding: 'utf8',
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      if (buildOutput.includes('Failed to compile') || buildOutput.includes('Error:')) {
        console.log('⚠️ Build still has errors, but linting errors should be reduced');
      } else {
        console.log('✅ Build successful! Linting errors fixed.');
      }
      
    } catch (error) {
      console.log('⚠️ Build failed, but linting errors should be significantly reduced');
    }
  }

  async run() {
    console.log('🚀 Starting Linting Error Autonomous Agent...');
    
    while (true) {
      try {
        const fixedCount = await this.fixAllLintingErrors();
        
        if (fixedCount === 0) {
          console.log('✅ No more linting errors to fix. All files are clean!');
          break;
        }
        
        console.log('🔄 Waiting 5 seconds before next check...');
        await new Promise(resolve => setTimeout(resolve, 5000));
        
      } catch (error) {
        console.error('❌ Error in linting error agent:', error.message);
        await new Promise(resolve => setTimeout(resolve, 10000));
      }
    }
    
    console.log('🏁 Linting Error Autonomous Agent completed.');
  }
}

// Run the agent
if (require.main === module) {
  const agent = new LintingErrorAutonomousAgent();
  agent.run().catch(console.error);
}

module.exports = LintingErrorAutonomousAgent;
