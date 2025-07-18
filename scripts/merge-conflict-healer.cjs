if (newContent !== content) {
          fs.writeFileSync(file, newContent);
          this.log(`Fixed merge conflicts in ${file}`);
          fixed = true;
        }
      } catch (error) {
        this.log(`Error fixing merge conflicts in ${file}: ${error.message}`, 'ERROR');
      }
    }

    return fixed;
  }

  async fixParsingErrors() {
    this.log('Fixing parsing errors...');
    
    const tsFiles = this.findTsFiles();
    let fixed = false;

    for (const file of tsFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        let newContent = content;

        // Fix common parsing errors
        newContent = this.fixCommonParsingErrors(newContent);

        if (newContent !== content) {
          fs.writeFileSync(file, newContent);
          this.log(`Fixed parsing errors in ${file}`);
          fixed = true;
        }
      } catch (error) {
        this.log(`Error fixing parsing errors in ${file}: ${error.message}`, 'ERROR');
      }
    }

    return fixed;
  }

  fixCommonParsingErrors(content) {
    let newContent = content;

    // Fix missing semicolons
    newContent = newContent.replace(/([^;])\n/g, '$1;\n');
    
    // Fix missing brackets
    const openBraces = (newContent.match(/\{/g) || []).length;
    const closeBraces = (newContent.match(/\}/g) || []).length;
    if (openBraces > closeBraces) {
      newContent += '\n}'.repeat(openBraces - closeBraces);
    }

    // Fix missing parentheses
    const openParens = (newContent.match(/\(/g) || []).length;
    const closeParens = (newContent.match(/\)/g) || []).length;
    if (openParens > closeParens) {
      newContent += ')'.repeat(openParens - closeParens);
    }

    // Fix missing commas in object literals
    newContent = newContent.replace(/(\w+):\s*([^,\n}]+)\n(\s*)(\w+):/g, '$1: $2,\n$3$4:');

    // Fix missing quotes
    newContent = newContent.replace(/(\w+):\s*([^'",\n}]+)(?=\s*[,}])/g, '$1: "$2"');

    return newContent;
  }

  async fixRemainingIssues() {
    this.log('Fixing remaining issues...');
    
    const fixes = [
      this.fixUnusedVariables(),
      this.fixConsoleLogs(),
      this.fixMissingImports()
    ];

    for (const fix of fixes) {
      try {
        const result = await fix;
        if (result) {
          this.log('Applied remaining fix');
          this.fixesApplied.push('Remaining fix');
        }
      } catch (error) {
        this.log(`Remaining fix failed: ${error.message}`, 'ERROR');
      }
    }
  }

  async fixUnusedVariables() {
    this.log('Fixing unused variables...');
    const tsFiles = this.findTsFiles();
    let fixed = false;

    for (const file of tsFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const lines = content.split('\n');
        let modified = false;

        for (let i = 0; i < lines.length; i++) {
          const line = lines[i];
          // Fix unused variables by prefixing with underscore
          if (line.includes('const ') && line.includes('=') && !line.includes('_')) {
            const varMatch = line.match(/const\s+(\w+)/);
            if (varMatch) {
              const varName = varMatch[1];
              const restOfFile = content.substring(content.indexOf(line) + line.length);
              if (!restOfFile.includes(varName)) {
                lines[i] = line.replace(`const ${varName}`, `const _${varName}`);
                modified = true;
              }
            }
          }
        }

        if (modified) {
          fs.writeFileSync(file, lines.join('\n'));
          this.log(`Fixed unused variables in ${file}`);
          fixed = true;
        }
      } catch (error) {
        this.log(`Error fixing ${file}: ${error.message}`, 'ERROR');
      }
    }

    return fixed;
  }

  async fixConsoleLogs() {
    this.log('Fixing console.log statements...');
    const tsFiles = this.findTsFiles();
    let fixed = false;

    for (const file of tsFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const lines = content.split('\n');
        let modified = false;

        for (let i = 0; i < lines.length; i++) {
          const line = lines[i];
          if (line.includes('console.log(') && !file.includes('.test.') && !file.includes('.spec.')) {
            lines[i] = `// ${line}`;
            modified = true;
          }
        }

        if (modified) {
          fs.writeFileSync(file, lines.join('\n'));
          this.log(`Fixed console.log in ${file}`);
          fixed = true;
        }
      } catch (error) {
        this.log(`Error fixing ${file}: ${error.message}`, 'ERROR');
      }
    }

    return fixed;
  }

  async fixMissingImports() {
    this.log('Checking for missing imports...');
    
    // Add common missing imports
    const commonImports = [
      "import React from 'react';",
      "import { useRouter } from 'next/router';",
      "import { useState, useEffect } from 'react';"
    ];
    
    const tsFiles = this.findTsFiles();
    let fixed = false;

    for (const file of tsFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        let newContent = content;

        // Add missing React import if needed
        if (content.includes('React.') && !content.includes("import React")) {
          newContent = "import React from 'react';\n" + newContent;
        }

        // Add missing router import if needed
        if (content.includes('useRouter') && !content.includes("import { useRouter }")) {
          newContent = "import { useRouter } from 'next/router';\n" + newContent;
        }

        if (newContent !== content) {
          fs.writeFileSync(file, newContent);
          this.log(`Fixed missing imports in ${file}`);
          fixed = true;
        }
      } catch (error) {
        this.log(`Error fixing imports in ${file}: ${error.message}`, 'ERROR');
      }
    }

    return fixed;
  }

  findTsFiles() {
    const files = [];
    const srcDir = 'src';
    const pagesDir = 'pages';
    
    if (fs.existsSync(srcDir)) {
      this.findFilesRecursive(srcDir, '.ts', files);
      this.findFilesRecursive(srcDir, '.tsx', files);
    }
    
    if (fs.existsSync(pagesDir)) {
      this.findFilesRecursive(pagesDir, '.ts', files);
      this.findFilesRecursive(pagesDir, '.tsx', files);
    }
    
    return files;
  }

  findFilesRecursive(dir, ext, files) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        this.findFilesRecursive(fullPath, ext, files);
      } else if (item.endsWith(ext)) {
        files.push(fullPath);
      }
    }
  }

  async runBuild() {
    this.log('Running build...');
    
    return new Promise((resolve) => {
      const buildProcess = spawn('npm', ['run', 'build'], {
        stdio: ['pipe', 'pipe', 'pipe'],
        timeout: 300000 // 5 minutes
      });

      let output = '';
      let errorOutput = '';

      buildProcess.stdout.on('data', (data) => {
        output += data.toString();
        process.stdout.write(data);
      });

      buildProcess.stderr.on('data', (data) => {
        errorOutput += data.toString();
        process.stderr.write(data);
      });

      buildProcess.on('close', (code) => {
        const fullOutput = output + errorOutput;
        
        if (code === 0) {
          this.log('Build completed successfully');
          resolve({ success: true, output: fullOutput });
        } else {
          this.log(`Build failed with code ${code}`, 'ERROR');
          resolve({ success: false, output: fullOutput, code });
        }
      });

      buildProcess.on('error', (error) => {
        this.log(`Build process error: ${error.message}`, 'ERROR');
        resolve({ success: false, output: error.message, code: -1 });
      });
    });
  }

  async commitAndDeploy() {
    if (this.fixesApplied.length > 0) {
      try {
        const commitMessage = `Fix merge conflicts and parsing errors: Applied ${this.fixesApplied.length} fixes`;
        
        execSync('git add .', { stdio: 'inherit' });
        execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' });
        execSync('git push', { stdio: 'inherit' });
        
        this.log('Changes committed and pushed successfully');
        this.log('Netlify build will be triggered automatically');
        return true;
      } catch (error) {
        this.log(`Failed to commit changes: ${error.message}`, 'ERROR');
        return false;
      }
    }
    return false;
  }
}

// Run the merge conflict healer
if (require.main === module) {
  const healer = new MergeConflictHealer();
  
  healer.run().catch(error => {
    console.error('Merge conflict healer failed:', error);
    process.exit(1);
  });
}

module.exports = MergeConflictHealer;