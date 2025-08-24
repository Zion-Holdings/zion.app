#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function log(msg) {
  console.log(`[beautify-ui] ${msg}`);
}

function read(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}

function write(filePath, content) {
  fs.writeFileSync(filePath, content, 'utf8');
}

function ensureImport(content, importLine) {
  if (!content.includes(importLine)) {
    return `${importLine}\n${content}`;
  }
  return content;
}

function enhanceAppTsx(appPath) {
  let content = read(appPath);

  // Ensure design system CSS imports
  const importsToEnsure = [
    "import '../styles/modern-design-system.css';",
    "import '../styles/enhanced-design-system.css';",
  ];
  for (const imp of importsToEnsure) {
    content = ensureImport(content, imp);
  }

  // Ensure EnhancedLayout import
  const layoutImport = "import EnhancedLayout from '../components/layout/EnhancedLayout';";
  if (!content.includes(layoutImport)) {
    // Place after existing imports
    const importEndIdx = content.indexOf('\n\n');
    if (importEndIdx !== -1) {
      content = content.slice(0, importEndIdx) + `\n${layoutImport}` + content.slice(importEndIdx);
    } else {
      content = `${layoutImport}\n${content}`;
    }
  }

  // Wrap Component in EnhancedLayout (idempotent)
  const alreadyWrapped = /return\s*<EnhancedLayout>[\s\S]*<\/EnhancedLayout>/.test(content);
  if (!alreadyWrapped) {
    content = content.replace(
      /return\s*<Component([^>]*)\s*\{\.\.\.pageProps\}\s*\/>\s*;?/m,
      'return (\n    <EnhancedLayout>\n      <Component$1 {...pageProps} />\n    </EnhancedLayout>\n  );'
    );
    // Fallback replace if the exact pattern doesn't match
    if (!/EnhancedLayout/.test(content)) {
      content = content.replace(
        /return\s*\(([^]*?)\);/m,
        (m) => {
          return `return (\n    <EnhancedLayout>\n${m.replace(/^[\t ]*/gm, '      ')}\n    </EnhancedLayout>\n  );`;
        }
      );
    }
  }

  write(appPath, content);
  log(`Updated ${path.relative(process.cwd(), appPath)}`);
}

function enhanceDocumentTsx(docPath) {
  let content = read(docPath);

  // Add Google Fonts preconnect and Inter font if missing
  if (!content.includes('fonts.googleapis.com')) {
    content = content.replace(
      /<Head\s*\/>/,
      `<Head>\n          <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />\n          <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossOrigin=\"anonymous\" />\n          <link href=\"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap\" rel=\"stylesheet\" />\n        </Head>`
    );
  }

  // Ensure body has nice base classes
  content = content.replace(
    /<body(.*?)>/,
    (m, attrs) => {
      const classNameRegex = /className=\"([^\"]*)\"/;
      const baseClasses = 'antialiased bg-neutral-50 text-neutral-800 dark:bg-neutral-950 dark:text-neutral-100';
      if (classNameRegex.test(attrs)) {
        return `<body${attrs.replace(classNameRegex, (mm, cls) => ` className=\"${cls.includes('antialiased') ? cls : `${cls} ${baseClasses}`.trim()}\"`)}>`;
      }
      return `<body className=\"${baseClasses}\"${attrs}>`;
    }
  );

  write(docPath, content);
  log(`Updated ${path.relative(process.cwd(), docPath)}`);
}

(function main() {
  try {
    const appPath = path.join(process.cwd(), 'pages', '_app.tsx');
    const docPath = path.join(process.cwd(), 'pages', '_document.tsx');

    if (!fs.existsSync(appPath)) {
      throw new Error(`Cannot find ${appPath}`);
    }
    if (!fs.existsSync(docPath)) {
      throw new Error(`Cannot find ${docPath}`);
    }

    enhanceAppTsx(appPath);
    enhanceDocumentTsx(docPath);

    log('UI beautification automation completed successfully.');
  } catch (err) {
    console.error('[beautify-ui] Error:', err.message);
    process.exitCode = 1;
  }
})();