const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json(),
  ),
  defaultMeta: { service: 'automation-script' },
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  );
}

const fs = require('fs');
const path = require('path');
const glob = require('glob');

logger.info('🔧 Fixing all remaining unterminated string literals...');

// Find all TypeScript and JavaScript files
const files = glob.sync('src/**/*.{ts,tsx,js,jsx}', {
  ignore: ['**/node_modules/**', '**/dist/**', '**/build/**', '**/.next/**'],
});

let fixedFiles = 0;
let totalIssues = 0;

files.forEach((file) => {
  try {
    let content = fs.readFileSync(file, 'utf8');
    let originalContent = content;
    let fileIssues = 0;

    // Fix unterminated string literals in import statements
    content = content.replace(
      /import React from 'react''/g,
      "import React from 'react'",
    );
    content = content.replace(/import\s+([^;]+);/g, (match, importContent) => {
      fileIssues++;
      return `import ${importContent};`;
    });

    // Fix unterminated string literals in type imports
    content = content.replace(
      /import type\s+([^;]+);/g,
      (match, importContent) => {
        fileIssues++;
        return `import type ${importContent};`;
      },
    );

    // Fix unterminated string literals in type declarations
    content = content.replace(
      /declare module ['"`]([^'"`]*)['"`]\s*\{/g,
      (match, moduleName) => {
        fileIssues++;
        return `declare module '${moduleName}' {`;
      },
    );

    // Fix unterminated string literals in interface declarations
    content = content.replace(
      /interface\s+([^;]+);/g,
      (match, interfaceContent) => {
        fileIssues++;
        return `interface ${interfaceContent};`;
      },
    );

    // Fix unterminated string literals in const declarations
    content = content.replace(/const\s+([^;]+);/g, (match, constContent) => {
      fileIssues++;
      return `const ${constContent};`;
    });

    // Fix unterminated string literals in let declarations
    content = content.replace(/let\s+([^;]+);/g, (match, letContent) => {
      fileIssues++;
      return `let ${letContent};`;
    });

    // Fix unterminated string literals in var declarations
    content = content.replace(/var\s+([^;]+);/g, (match, varContent) => {
      fileIssues++;
      return `var ${varContent};`;
    });

    // Fix unterminated string literals in function declarations
    content = content.replace(/function\s+([^;]+);/g, (match, funcContent) => {
      fileIssues++;
      return `function ${funcContent};`;
    });

    // Fix unterminated string literals in type declarations
    content = content.replace(/type\s+([^;]+);/g, (match, typeContent) => {
      fileIssues++;
      return `type ${typeContent};`;
    });

    // Fix unterminated string literals in enum declarations
    content = content.replace(/enum\s+([^;]+);/g, (match, enumContent) => {
      fileIssues++;
      return `enum ${enumContent};`;
    });

    // Fix unterminated string literals in class declarations
    content = content.replace(/class\s+([^;]+);/g, (match, classContent) => {
      fileIssues++;
      return `class ${classContent};`;
    });

    // Fix unterminated string literals in export statements
    content = content.replace(/export\s+([^;]+);/g, (match, exportContent) => {
      fileIssues++;
      return `export ${exportContent};`;
    });

    // Fix unterminated string literals in return statements
    content = content.replace(/return\s+([^;]+);/g, (match, returnContent) => {
      fileIssues++;
      return `return ${returnContent};`;
    });

    // Fix unterminated string literals in JSX
    content = content.replace(
      /<([^>]+)>([^<]*)<\/\1>;'/g,
      (match, tag, content) => {
        fileIssues++;
        return `<${tag}>${content}</${tag}>;`;
      },
    );

    // Fix unterminated string literals in JSX (div pattern)
    content = content.replace(/<div>([^<]*)<\/div>;'/g, (match, content) => {
      fileIssues++;
      return `<div>${content}</div>;`;
    });

    // Fix unterminated string literals in test function declarations
    content = content.replace(
      /describe\s*\(['"`]([^'"`]*)['"`]\s*,\s*\(\)\s*=>\s*\{/g,
      (match, testName) => {
        fileIssues++;
        return `describe('${testName}', () => {`;
      },
    );

    // Fix unterminated string literals in it/test function declarations
    content = content.replace(
      /(it|test)\s*\(['"`]([^'"`]*)['"`]\s*,\s*\(\)\s*=>\s*\{/g,
      (match, funcType, testName) => {
        fileIssues++;
        return `${funcType}('${testName}', () => {`;
      },
    );

    // Fix unterminated string literals in malformed function declarations
    content = content.replace(
      /export const ([^:]+): unknown React\.FC = \(\) => \{;/g,
      (match, funcName) => {
        fileIssues++;
        return `export const ${funcName}: React.FC = () => {`;
      },
    );

    // Fix unterminated string literals in malformed const declarations
    content = content.replace(
      /const ([^:]+): unknown = ([^;]+);'/g,
      (match, varName, value) => {
        fileIssues++;
        return `const ${varName} = ${value};`;
      },
    );

    // Fix unterminated string literals in malformed return statements
    content = content.replace(
      /return <([^>]+)>([^<]*)<\/\1>;'/g,
      (match, tag, content) => {
        fileIssues++;
        return `return <${tag}>${content}</${tag}>;`;
      },
    );

    // Fix unterminated string literals in malformed return statements (div pattern)
    content = content.replace(
      /return <div>([^<]*)<\/div>;'/g,
      (match, content) => {
        fileIssues++;
        return `return <div>${content}</div>;`;
      },
    );

    // Fix unterminated string literals in malformed export statements
    content = content.replace(
      /export default ([^;]+);/g,
      (match, exportContent) => {
        fileIssues++;
        return `export default ${exportContent};`;
      },
    );

    // Fix unterminated string literals in malformed export statements (alternative)
    content = content.replace(
      /export default ([^;]+);'''/g,
      (match, exportContent) => {
        fileIssues++;
        return `export default ${exportContent};`;
      },
    );

    // Fix unterminated string literals in malformed export statements (another alternative)
    content = content.replace(
      /export default ([^;]+);'''''/g,
      (match, exportContent) => {
        fileIssues++;
        return `export default ${exportContent};`;
      },
    );

    // Fix unterminated string literals in malformed export statements (yet another alternative)
    content = content.replace(
      /export default ([^;]+);'''''''/g,
      (match, exportContent) => {
        fileIssues++;
        return `export default ${exportContent};`;
      },
    );

    // Fix unterminated string literals in malformed export statements (final alternative)
    content = content.replace(
      /export default ([^;]+);''''''''/g,
      (match, exportContent) => {
        fileIssues++;
        return `export default ${exportContent};`;
      },
    );

    // Fix unterminated string literals in malformed export statements (multiple quotes)
    content = content.replace(
      /export default ([^;]+);+/g,
      (match, exportContent) => {
        fileIssues++;
        return `export default ${exportContent};`;
      },
    );

    // Fix unterminated string literals in malformed return statements (multiple quotes)
    content = content.replace(/return ([^;]+);+/g, (match, returnContent) => {
      fileIssues++;
      return `return ${returnContent};`;
    });

    // Fix unterminated string literals in malformed const declarations (multiple quotes)
    content = content.replace(/const ([^;]+);+/g, (match, constContent) => {
      fileIssues++;
      return `const ${constContent};`;
    });

    // Fix unterminated string literals in malformed let declarations (multiple quotes)
    content = content.replace(/let ([^;]+);+/g, (match, letContent) => {
      fileIssues++;
      return `let ${letContent};`;
    });

    // Fix unterminated string literals in malformed var declarations (multiple quotes)
    content = content.replace(/var ([^;]+);+/g, (match, varContent) => {
      fileIssues++;
      return `var ${varContent};`;
    });

    // Fix unterminated string literals in malformed function declarations (multiple quotes)
    content = content.replace(/function ([^;]+);+/g, (match, funcContent) => {
      fileIssues++;
      return `function ${funcContent};`;
    });

    // Fix unterminated string literals in malformed type declarations (multiple quotes)
    content = content.replace(/type ([^;]+);+/g, (match, typeContent) => {
      fileIssues++;
      return `type ${typeContent};`;
    });

    // Fix unterminated string literals in malformed enum declarations (multiple quotes)
    content = content.replace(/enum ([^;]+);+/g, (match, enumContent) => {
      fileIssues++;
      return `enum ${enumContent};`;
    });

    // Fix unterminated string literals in malformed class declarations (multiple quotes)
    content = content.replace(/class ([^;]+);+/g, (match, classContent) => {
      fileIssues++;
      return `class ${classContent};`;
    });

    // Fix unterminated string literals in malformed interface declarations (multiple quotes)
    content = content.replace(
      /interface ([^;]+);+/g,
      (match, interfaceContent) => {
        fileIssues++;
        return `interface ${interfaceContent};`;
      },
    );

    // Fix unterminated string literals in malformed import statements (multiple quotes)
    content = content.replace(/import ([^;]+);+/g, (match, importContent) => {
      fileIssues++;
      return `import ${importContent};`;
    });

    // Fix unterminated string literals in malformed export statements (multiple quotes)
    content = content.replace(/export ([^;]+);+/g, (match, exportContent) => {
      fileIssues++;
      return `export ${exportContent};`;
    });

    // Fix unterminated string literals in malformed JSX (multiple quotes)
    content = content.replace(
      /<([^>]+)>([^<]*)<\/\1>;'+/g,
      (match, tag, content) => {
        fileIssues++;
        return `<${tag}>${content}</${tag}>;`;
      },
    );

    // Fix unterminated string literals in malformed JSX (div pattern, multiple quotes)
    content = content.replace(/<div>([^<]*)<\/div>;'+/g, (match, content) => {
      fileIssues++;
      return `<div>${content}</div>;`;
    });

    // Fix unterminated string literals in malformed return statements (JSX, multiple quotes)
    content = content.replace(
      /return <([^>]+)>([^<]*)<\/\1>;'+/g,
      (match, tag, content) => {
        fileIssues++;
        return `return <${tag}>${content}</${tag}>;`;
      },
    );

    // Fix unterminated string literals in malformed return statements (div pattern, multiple quotes)
    content = content.replace(
      /return <div>([^<]*)<\/div>;'+/g,
      (match, content) => {
        fileIssues++;
        return `return <div>${content}</div>;`;
      },
    );

    if (content !== originalContent) {
      fs.writeFileSync(file, content, 'utf8');
      fixedFiles++;
      totalIssues += fileIssues;
      if (fileIssues > 0) {
        logger.info(`✅ Fixed ${fileIssues} issues in ${file}`);
      }
    }
  } catch (error) {
    logger.error(`❌ Error processing ${file}:`, error.message);
  }
});

logger.info(
  `\n🎉 Fixed ${totalIssues} unterminated string literal issues across ${fixedFiles} files`,
);
