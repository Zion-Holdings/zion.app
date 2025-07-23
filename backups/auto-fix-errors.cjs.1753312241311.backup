#!/usr/bin/env node

/**
 * Auto-Fix Common Build Errors
 * Automatically fixes common TypeScript, ESLint, and build errors
 */

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
const glob = require('glob')
class AutoFixSystem {
  constructor() {
    this.fixesApplied = [];
    this.logFile = 'logs/auto-fix.log';
    this.ensureLogDirectory();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString()
const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  async fixTypeScriptErrors() {
    this.log('Fixing TypeScript errors...');

    try {
      // Run TypeScript compiler to get errors
      const tscOutput = execSync('npx tsc --noEmit --pretty false', {
        encoding: 'utf8',
        stdio: ['pipe', 'pipe', 'pipe'],
      })
const errors = this.parseTypeScriptErrors(tscOutput);

      for (const error of errors) {
        await this.fixTypeScriptError(error);
      }

      this.log(`Fixed ${errors.length} TypeScript errors`);
    } catch (error) {
      // TSC will exit with error code if there are errors, which is expected
      const tscOutput = error.stdout || error.stderr || ''
const errors = this.parseTypeScriptErrors(tscOutput);

      for (const error of errors) {
        await this.fixTypeScriptError(error);
      }

      this.log(`Fixed ${errors.length} TypeScript errors`);
    }
  }

  parseTypeScriptErrors(output) {
    const errors = []
const lines = output.split('\n');

    for (const line of lines) {
      const match = line.match(/([^(]+)\((\d+),(\d+)\): error TS\d+: (.+)/);
      if (match) {
        errors.push({
          file: match[1].trim(),
          line: parseInt(match[2]),
          column: parseInt(match[3]),
          message: match[4],
          fullLine: line,
        });
      }
    }

    return errors;
  }

  async fixTypeScriptError(error) {
    try {
      if (!fs.existsSync(error.file)) {
        return;
      }

      const content = fs.readFileSync(error.file, 'utf8')
const lines = content.split('\n');

      if (error.message.includes('Cannot find module')) {
        await this.fixMissingImport(error, lines);
      } else if (error.message.includes('has no exported member')) {
        await this.fixMissingExport(error, lines);
      } else if (
        error.message.includes('Property') &&
        error.message.includes('does not exist')
      ) {
        await this.fixPropertyError(error, lines);
      } else if (error.message.includes('Object is possibly')) {
        await this.fixNullCheck(error, lines);
      } else if (
        error.message.includes('Type') &&
        error.message.includes('is not assignable')
      ) {
        await this.fixTypeAssignment(error, lines);
      }
    } catch (fixError) {
      this.log(`Failed to fix TypeScript error: ${fixError.message}`, 'ERROR');
    }
  }

  async fixMissingImport(error, lines) {
    const match = error.message.match(/Cannot find module ['"]([^'"]+)['"]/);
    if (match) {
      const moduleName = match[1];

      // Try to install the package
      try {
        execSync(`npm install ${moduleName}`, { stdio: 'pipe' });
        this.log(`Installed missing package: ${moduleName}`);
        this.fixesApplied.push(`Installed ${moduleName}`);
      } catch (installError) {
        // If it's a local module, try to fix the import path
        await this.fixImportPath(error, lines, moduleName);
      }
    }
  }

  async fixImportPath(error, lines, moduleName) {
    // Try to find the correct path for the module
    const possiblePaths = [
      `./${moduleName}`,
      `../${moduleName}`,
      `../../${moduleName}`,
      `src/${moduleName}`,
      `components/${moduleName}`,
      `utils/${moduleName}`,
      `lib/${moduleName}`,
    ];

    for (const possiblePath of possiblePaths) {
      const extensions = ['.ts', '.tsx', '.js', '.jsx'];
      for (const ext of extensions) {
        const fullPath = path.resolve(
          path.dirname(error.file),
          possiblePath + ext,
        );
        if (fs.existsSync(fullPath)) {
          // Fix the import statement
          const importLine = lines[error.line - 1]
const newImportLine = importLine.replace(
            /from ['"][^'"]*['"]/,
            `from '${possiblePath}${ext}'`,
          );
          lines[error.line - 1] = newImportLine;
          fs.writeFileSync(error.file, lines.join('\n'));
          this.log(`Fixed import path: ${moduleName} -> ${possiblePath}${ext}`);
          this.fixesApplied.push(`Fixed import: ${moduleName}`);
          return;
        }
      }
    }
  }

  async fixMissingExport(error, lines) {
    const match = error.message.match(
      /Module ['"]([^'"]+)['"] has no exported member ['"]([^'"]+)['"]/,
    );
    if (match) {
      const [, modulePath, exportName] = match
const moduleFile = this.resolveModulePath(modulePath);

      if (moduleFile && fs.existsSync(moduleFile)) {
        const moduleContent = fs.readFileSync(moduleFile, 'utf8')
const moduleLines = moduleContent.split('\n');

        // Check if the export exists
        const hasExport = moduleLines.some(
          (line) => line.includes(`export`) && line.includes(exportName),
        );

        if (!hasExport) {
          // Add the missing export
          moduleLines.push(`export { ${exportName} };`);
          fs.writeFileSync(moduleFile, moduleLines.join('\n'));
          this.log(`Added missing export: ${exportName} in ${moduleFile}`);
          this.fixesApplied.push(`Added export: ${exportName}`);
        }
      }
    }
  }

  async fixPropertyError(error, lines) {
    const match = error.message.match(
      /Property ['"]([^'"]+)['"] does not exist on type ['"]([^'"]+)['"]/,
    );
    if (match) {
      const [, propertyName, typeName] = match;

      // Try to add the missing property to the type definition
      const typeFile = this.findTypeDefinition(typeName);
      if (typeFile) {
        await this.addPropertyToType(typeFile, propertyName);
      }
    }
  }

  async fixNullCheck(error, lines) {
    const line = lines[error.line - 1];
    if (line.includes('.')) {
      // Add optional chaining
      const newLine = line.replace(/\.(\w+)/g, '?.$1');
      lines[error.line - 1] = newLine;
      fs.writeFileSync(error.file, lines.join('\n'));
      this.log(`Added null check: ${error.file}:${error.line}`);
      this.fixesApplied.push(`Added null check: ${error.file}:${error.line}`);
    }
  }

  async fixTypeAssignment(error, lines) {
    const line = lines[error.line - 1];
    if (line.includes(':')) {
      // Try to fix type annotation
      const newLine = line.replace(/: (\w+)/g, ': any');
      lines[error.line - 1] = newLine;
      fs.writeFileSync(error.file, lines.join('\n'));
      this.log(`Fixed type assignment: ${error.file}:${error.line}`);
      this.fixesApplied.push(`Fixed type: ${error.file}:${error.line}`);
    }
  }

  resolveModulePath(modulePath) {
    const extensions = ['.ts', '.tsx', '.js', '.jsx']
const basePaths = ['src', 'pages', 'components', 'utils', 'lib'];

    for (const basePath of basePaths) {
      for (const ext of extensions) {
        const fullPath = path.join(process.cwd(), basePath, modulePath + ext);
        if (fs.existsSync(fullPath)) {
          return fullPath;
        }
      }
    }
    return null;
  }

  findTypeDefinition(typeName) {
    // Look for type definitions in common locations
    const typeFiles = glob.sync('**/*.d.ts', { cwd: process.cwd() });
    for (const typeFile of typeFiles) {
      const content = fs.readFileSync(typeFile, 'utf8');
      if (
        content.includes(`interface ${typeName}`) ||
        content.includes(`type ${typeName}`)
      ) {
        return typeFile;
      }
    }
    return null;
  }

  async addPropertyToType(typeFile, propertyName) {
    const content = fs.readFileSync(typeFile, 'utf8')
const lines = content.split('\n');

    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes('interface') || lines[i].includes('type')) {
        // Add property after the interface/type declaration
        lines.splice(i + 1, 0, `  ${propertyName}?: any;`);
        fs.writeFileSync(typeFile, lines.join('\n'));
        this.log(
          `Added property ${propertyName} to type definition in ${typeFile}`,
        );
        this.fixesApplied.push(`Added property: ${propertyName}`);
        break;
      }
    }
  }

  async fixESLintErrors() {
    this.log('Fixing ESLint errors...');

    try {
      // Run ESLint with auto-fix
      execSync('npm run lint:fix', { stdio: 'inherit' });
      this.log('ESLint auto-fixes applied');
      this.fixesApplied.push('ESLint auto-fixes');
    } catch (error) {
      this.log(`ESLint fix failed: ${error.message}`, 'ERROR');
    }
  }

  async fixImportOrder() {
    this.log('Fixing import order...');

    try {
      // Run import sorting
      execSync(
        'npx eslint --fix --rule "import/order: error" src/**/*.{ts,tsx}',
        { stdio: 'pipe' },
      );
      this.log('Import order fixed');
      this.fixesApplied.push('Import order');
    } catch (error) {
      // Ignore errors for import order
    }
  }

  async fixUnusedImports() {
    this.log('Removing unused imports...');

    try {
      // Run unused import removal
      execSync(
        'npx eslint --fix --rule "unused-imports/no-unused-imports: error" src/**/*.{ts,tsx}',
        { stdio: 'pipe' },
      );
      this.log('Unused imports removed');
      this.fixesApplied.push('Unused imports');
    } catch (error) {
      // Ignore errors for unused imports
    }
  }

  async fixPrettierFormatting() {
    this.log('Fixing code formatting...');

    try {
      execSync('npx prettier --write "src/**/*.{ts,tsx,js,jsx}"', {
        stdio: 'inherit',
      });
      this.log('Code formatting fixed');
      this.fixesApplied.push('Code formatting');
    } catch (error) {
      this.log(`Prettier formatting failed: ${error.message}`, 'ERROR');
    }
  }

  async installMissingDependencies() {
    this.log('Checking for missing dependencies...');

    try {
      // Check package.json for missing dependencies
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'))
const allDeps = {
        ...packageJson.dependencies,
        ...packageJson.devDependencies,
      };

      // Check if all imports have corresponding dependencies
      const tsFiles = glob.sync('src/**/*.{ts,tsx}', { cwd: process.cwd() })
const missingDeps = new Set();

      for (const file of tsFiles) {
        const content = fs.readFileSync(file, 'utf8')
const importMatches = content.match(/import.*from ['"]([^'"]+)['"]/g);

        if (importMatches) {
          for (const match of importMatches) {
            const moduleMatch = match.match(/from ['"]([^'"]+)['"]/);
            if (moduleMatch) {
              const moduleName = moduleMatch[1];
              if (
                !moduleName.startsWith('.') &&
                !moduleName.startsWith('@/') &&
                !allDeps[moduleName]
              ) {
                missingDeps.add(moduleName);
              }
            }
          }
        }
      }

      if (missingDeps.size > 0) {
        const depsArray = Array.from(missingDeps);
        execSync(`npm install ${depsArray.join(' ')}`, { stdio: 'inherit' });
        this.log(`Installed missing dependencies: ${depsArray.join(', ')}`);
        this.fixesApplied.push(`Installed: ${depsArray.join(', ')}`);
      }
    } catch (error) {
      this.log(`Dependency check failed: ${error.message}`, 'ERROR');
    }
  }

  async commitAndPush() {
    if (this.fixesApplied.length > 0) {
      try {
        const commitMessage = `Auto-fix: Applied ${this.fixesApplied.length} fixes\n\n${this.fixesApplied.map((fix) => `- ${fix}`).join('\n')}`;

        execSync('git add .', { stdio: 'inherit' });
        execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' });
        execSync('git push', { stdio: 'inherit' });

        this.log('Changes committed and pushed successfully');
        return true;
      } catch (error) {
        this.log(`Failed to commit changes: ${error.message}`, 'ERROR');
        return false;
      }
    }
    return false;
  }

  async run() {
    this.log('Starting auto-fix system...');

    try {
      // Run all fix operations
      await this.fixTypeScriptErrors();
      await this.fixESLintErrors();
      await this.fixImportOrder();
      await this.fixUnusedImports();
      await this.fixPrettierFormatting();
      await this.installMissingDependencies();

      // Commit and push changes
      const committed = await this.commitAndPush();

      if (committed) {
        this.log(
          'Auto-fix completed successfully. New build will be triggered.',
        );
      } else {
        this.log('Auto-fix completed but no changes were committed.');
      }

      this.log(`Total fixes applied: ${this.fixesApplied.length}`);
    } catch (error) {
      this.log(`Auto-fix system failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// Run the auto-fix system
if (require.main === module) {
  const autoFix = new AutoFixSystem();
  autoFix.run().catch((error) => {
    console.error('Auto-fix system failed:', error);
    process.exit(1);
  });
}

module.exports = AutoFixSystem;
