const fs = require('fs');
const path = require('path');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;
const t = require('@babel/types');

class EnhancedLayoutValidator {
  constructor() {
    this.issues = [];
    this.fixes = [];
    this.pagesDir = path.join(process.cwd(), 'pages');
    this.componentsDir = path.join(process.cwd(), 'components');
    this.layoutsDir = path.join(process.cwd(), 'components/layout');
    this.astCache = new Map();
  }

  async analyzeWithAST() {
    console.log('🔍 Running enhanced AST-based layout analysis...');
    
    const pages = this.getPages();
    
    for (const page of pages) {
      try {
        await this.analyzePageWithAST(page);
      } catch (error) {
        console.error(`Error analyzing ${page}:`, error.message);
      }
    }
    
    return {
      issues: this.issues,
      fixes: this.fixes,
      summary: this.generateSummary()
    };
  }

  async analyzePageWithAST(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    
    try {
      const ast = parser.parse(content, {
        sourceType: 'module',
        plugins: ['jsx', 'typescript']
      });
      
      this.astCache.set(filePath, ast);
      
      // Analyze imports
      this.analyzeImports(ast, filePath);
      
      // Analyze component structure
      this.analyzeComponentStructure(ast, filePath);
      
      // Analyze JSX structure
      this.analyzeJSXStructure(ast, filePath);
      
      // Analyze responsive classes
      this.analyzeResponsiveClasses(ast, filePath);
      
      // Analyze accessibility
      this.analyzeAccessibility(ast, filePath);
      
    } catch (error) {
      console.error(`Failed to parse AST for ${filePath}:`, error.message);
    }
  }

  analyzeImports(ast, filePath) {
    const imports = [];
    
    traverse(ast, {
      ImportDeclaration(path) {
        imports.push({
          source: path.node.source.value,
          specifiers: path.node.specifiers.map(s => s.local.name)
        });
      }
    });
    
    // Check for missing layout imports
    const hasLayoutImport = imports.some(imp => 
      imp.source.includes('ModernLayout') || imp.source.includes('PageLayout')
    );
    
    if (!hasLayoutImport) {
      this.issues.push({
        type: 'missing_layout_import',
        file: filePath,
        severity: 'high',
        description: 'Missing layout component import',
        ast: true
      });
      
      this.fixes.push({
        type: 'add_layout_import',
        file: filePath,
        fix: this.generateLayoutImportFix()
      });
    }
  }

  analyzeComponentStructure(ast, filePath) {
    let hasDefaultExport = false;
    let hasReturnStatement = false;
    let hasJSXReturn = false;
    
    traverse(ast, {
      ExportDefaultDeclaration(path) {
        hasDefaultExport = true;
      },
      ReturnStatement(path) {
        hasReturnStatement = true;
        if (path.node.argument && path.node.argument.type === 'JSXElement') {
          hasJSXReturn = true;
        }
      }
    });
    
    if (!hasDefaultExport) {
      this.issues.push({
        type: 'missing_default_export',
        file: filePath,
        severity: 'high',
        description: 'Component missing default export'
      });
    }
    
    if (!hasJSXReturn) {
      this.issues.push({
        type: 'missing_jsx_return',
        file: filePath,
        severity: 'high',
        description: 'Component missing JSX return statement'
      });
    }
  }

  analyzeJSXStructure(ast, filePath) {
    let hasLayoutWrapper = false;
    let hasHeadComponent = false;
    let hasMainContent = false;
    
    traverse(ast, {
      JSXElement(path) {
        const elementName = path.node.openingElement.name.name;
        
        if (elementName === 'ModernLayout' || elementName === 'PageLayout') {
          hasLayoutWrapper = true;
        }
        
        if (elementName === 'Head') {
          hasHeadComponent = true;
        }
        
        if (elementName === 'div' && path.node.openingElement.attributes.some(attr => 
          attr.name && attr.name.name === 'className' && 
          attr.value && attr.value.value && attr.value.value.includes('container')
        )) {
          hasMainContent = true;
        }
      }
    });
    
    if (!hasLayoutWrapper) {
      this.issues.push({
        type: 'missing_layout_wrapper',
        file: filePath,
        severity: 'high',
        description: 'JSX not wrapped in layout component'
      });
      
      this.fixes.push({
        type: 'add_layout_wrapper',
        file: filePath,
        fix: this.generateLayoutWrapperFix()
      });
    }
    
    if (!hasHeadComponent) {
      this.issues.push({
        type: 'missing_head_component',
        file: filePath,
        severity: 'medium',
        description: 'Missing Head component for SEO'
      });
    }
  }

  analyzeResponsiveClasses(ast, filePath) {
    const responsiveClasses = [];
    const mobileClasses = [];
    
    traverse(ast, {
      JSXAttribute(path) {
        if (path.node.name.name === 'className' && path.node.value) {
          const className = path.node.value.value || path.node.value.expression?.value;
          
          if (className) {
            // Check for responsive breakpoints
            if (className.includes('sm:') || className.includes('md:') || 
                className.includes('lg:') || className.includes('xl:')) {
              responsiveClasses.push(className);
            }
            
            // Check for mobile-specific classes
            if (className.includes('mobile-') || className.includes('responsive-')) {
              mobileClasses.push(className);
            }
          }
        }
      }
    });
    
    if (responsiveClasses.length === 0) {
      this.issues.push({
        type: 'missing_responsive_classes',
        file: filePath,
        severity: 'medium',
        description: 'No responsive classes detected'
      });
      
      this.fixes.push({
        type: 'add_responsive_classes',
        file: filePath,
        fix: this.generateResponsiveClassesFix()
      });
    }
  }

  analyzeAccessibility(ast, filePath) {
    let hasAriaLabels = false;
    let hasRoles = false;
    let hasAltText = false;
    
    traverse(ast, {
      JSXAttribute(path) {
        const attrName = path.node.name.name;
        
        if (attrName.startsWith('aria-')) {
          hasAriaLabels = true;
        }
        
        if (attrName === 'role') {
          hasRoles = true;
        }
        
        if (attrName === 'alt') {
          hasAltText = true;
        }
      }
    });
    
    if (!hasAriaLabels && !hasRoles) {
      this.issues.push({
        type: 'missing_accessibility',
        file: filePath,
        severity: 'medium',
        description: 'Missing accessibility attributes'
      });
      
      this.fixes.push({
        type: 'add_accessibility_attributes',
        file: filePath,
        fix: this.generateAccessibilityFix()
      });
    }
  }

  generateLayoutImportFix() {
    return {
      importStatement: `import ModernLayout from '../components/layout/ModernLayout'`,
      description: 'Add ModernLayout import'
    };
  }

  generateLayoutWrapperFix() {
    return {
      wrapperCode: `<ModernLayout>\n  {/* Your content */}\n</ModernLayout>`,
      description: 'Wrap content with ModernLayout'
    };
  }

  generateResponsiveClassesFix() {
    return {
      classes: [
        'container-responsive',
        'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
        'flex flex-col sm:flex-row',
        'text-sm sm:text-base lg:text-lg',
        'px-4 sm:px-6 lg:px-8'
      ],
      description: 'Add responsive design classes'
    };
  }

  generateAccessibilityFix() {
    return {
      attributes: [
        'aria-label',
        'aria-describedby',
        'role="navigation"',
        'role="main"',
        'tabIndex'
      ],
      description: 'Add accessibility attributes'
    };
  }

  async applyASTFixes() {
    console.log('🔧 Applying AST-based fixes...');
    
    for (const fix of this.fixes) {
      try {
        await this.applyASTFix(fix);
        console.log(`✅ Applied AST fix to ${fix.file}`);
      } catch (error) {
        console.error(`❌ Failed to apply AST fix to ${fix.file}:`, error.message);
      }
    }
  }

  async applyASTFix(fix) {
    const filePath = fix.file;
    const ast = this.astCache.get(filePath);
    
    if (!ast) {
      throw new Error('AST not found for file');
    }
    
    switch (fix.type) {
      case 'add_layout_import':
        this.addLayoutImport(ast, fix.fix);
        break;
      case 'add_layout_wrapper':
        this.addLayoutWrapper(ast, fix.fix);
        break;
      case 'add_responsive_classes':
        this.addResponsiveClasses(ast, fix.fix);
        break;
      case 'add_accessibility_attributes':
        this.addAccessibilityAttributes(ast, fix.fix);
        break;
    }
    
    // Generate code from AST
    const output = generate(ast, {
      retainLines: true,
      compact: false
    });
    
    fs.writeFileSync(filePath, output.code);
  }

  addLayoutImport(ast, fix) {
    const importDeclaration = t.importDeclaration(
      [t.importDefaultSpecifier(t.identifier('ModernLayout'))],
      t.stringLiteral('../components/layout/ModernLayout')
    );
    
    // Add import at the beginning
    ast.program.body.unshift(importDeclaration);
  }

  addLayoutWrapper(ast, fix) {
    traverse(ast, {
      ReturnStatement(path) {
        if (path.node.argument && path.node.argument.type === 'JSXElement') {
          const jsxElement = path.node.argument;
          
          // Create ModernLayout wrapper
          const wrapper = t.jsxElement(
            t.jsxOpeningElement(t.jsxIdentifier('ModernLayout'), [], false),
            t.jsxClosingElement(t.jsxIdentifier('ModernLayout')),
            [jsxElement]
          );
          
          path.node.argument = wrapper;
        }
      }
    });
  }

  addResponsiveClasses(ast, fix) {
    traverse(ast, {
      JSXAttribute(path) {
        if (path.node.name.name === 'className' && path.node.value) {
          const currentClass = path.node.value.value || '';
          
          if (currentClass.includes('container') && !currentClass.includes('responsive')) {
            path.node.value.value = currentClass + ' container-responsive';
          }
        }
      }
    });
  }

  addAccessibilityAttributes(ast, fix) {
    traverse(ast, {
      JSXElement(path) {
        const elementName = path.node.openingElement.name.name;
        
        if (elementName === 'div' || elementName === 'section') {
          const hasRole = path.node.openingElement.attributes.some(attr => 
            attr.name && attr.name.name === 'role'
          );
          
          if (!hasRole) {
            const roleAttr = t.jsxAttribute(
              t.jsxIdentifier('role'),
              t.stringLiteral('main')
            );
            
            path.node.openingElement.attributes.push(roleAttr);
          }
        }
      }
    });
  }

  getPages() {
    const pages = [];
    
    const walkDir = (dir) => {
      const files = fs.readdirSync(dir);
      
      files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
          walkDir(filePath);
        } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
          pages.push(filePath);
        }
      });
    };
    
    walkDir(this.pagesDir);
    return pages;
  }

  generateSummary() {
    const totalIssues = this.issues.length;
    const totalFixes = this.fixes.length;
    
    return {
      totalIssues,
      totalFixes,
      issuesByType: this.groupIssuesByType(),
      fixesByType: this.groupFixesByType(),
      astAnalysis: true
    };
  }

  groupIssuesByType() {
    return this.issues.reduce((acc, issue) => {
      acc[issue.type] = (acc[issue.type] || 0) + 1;
      return acc;
    }, {});
  }

  groupFixesByType() {
    return this.fixes.reduce((acc, fix) => {
      acc[fix.type] = (acc[fix.type] || 0) + 1;
      return acc;
    }, {});
  }
}

module.exports = EnhancedLayoutValidator; 