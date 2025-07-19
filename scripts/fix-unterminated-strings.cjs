#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing unterminated string literals...');

// List of files that need specific fixes
const filesToFix = [
  'src/components/header/UserMenu.tsx',
  'src/components/header/UserProfileDropdown.tsx',
  'src/components/header/__tests__/AvatarMenu.test.tsx',
  'src/components/header/__tests__/LanguageSelector.test.tsx',
  'src/components/header/index.ts',
  'src/components/hiring-tracker/CandidateCard.tsx',
  'src/components/hiring-tracker/HireConfirmationModal.tsx',
  'src/components/hiring-tracker/HiringAnalytics.tsx',
  'src/components/projects/milestones/components/MilestoneActivities.tsx',
  'src/components/ui/severity-indicator.tsx',
  'src/components/ui/sidebar.types.ts',
  'src/hooks/__tests__/useIsMounted.test.tsx',
  'src/hooks/__tests__/useToggle.test.tsx',
  'src/hooks/auth/__tests__/useEmailAuth.test.ts',
  'src/layout/__tests__/PrimaryNav.test.tsx',
  'src/pages/EquipmentPage.test.tsx',
  'src/pages/Signup.spec.tsx',
  'src/pages/__tests__/ProfilePage.test.tsx',
  'src/pages/auth/verify-email.tsx',
  'src/pages/payment-success.tsx',
  'src/pages/privacy-settings.tsx',
  'src/pages/talent/[id].tsx',
  'src/services/__tests__/auth.test.ts',
  'src/services/__tests__/feedbackService.test.ts',
  'src/services/__tests__/marketplace.test.ts',
  'src/services/__tests__/postFeedback.test.ts',
  'src/services/__tests__/productService.test.ts',
  'src/services/__tests__/signupApi.test.ts',
  'src/stubs/react-router-dom.tsx',
  'src/types/PrivacyPolicy.d.ts',
  'src/types/TermsOfService.d.ts',
  'src/types/google-analytics.d.ts',
  'src/types/import-meta-env.d.ts',
  'src/types/jest.d.ts',
  'src/types/next-stubs.d.ts',
  'src/types/next.d.ts',
  'src/types/pwa.d.ts',
  'src/types/react-devtools.d.ts',
  'src/types/react-dom.d.ts',
  'src/types/react-router-dom.d.ts',
  'src/types/reown-appkit.d.ts',
  'src/types/shoplocket.d.ts',
  'src/types/socket.io.d.ts',
  'src/types/stripe.d.ts',
  'src/types/talent-api.d.ts',
  'src/types/vite/client.d.ts',
  'src/types/vitest/globals.d.ts',
  'src/types/wallet.d.ts',
  'src/utils/email.ts',
  'src/utils/safe-component-loader.tsx',
  'src/utils/server-polyfill.ts',
  'src/utils/servicesAutoFeedAlgorithm.ts',
];

let fixedFiles = 0;

filesToFix.forEach((file) => {
  try {
    if (fs.existsSync(file)) {
      let content = fs.readFileSync(file, 'utf8');
      let originalContent = content;

      // Fix unterminated string literals in import statements
      content = content.replace(
        /import React from 'react''/g,
        "import React from 'react'",
      );
      content = content.replace(
        /import\s+([^;]+);'/g,
        (match, importContent) => {
          return `import ${importContent};`;
        },
      );

      // Fix unterminated string literals in type imports
      content = content.replace(
        /import type\s+([^;]+);'/g,
        (match, importContent) => {
          return `import type ${importContent};`;
        },
      );

      // Fix unterminated string literals in type declarations
      content = content.replace(
        /declare module ['"`]([^'"`]*)['"`]\s*\{/g,
        (match, moduleName) => {
          return `declare module '${moduleName}' {`;
        },
      );

      // Fix unterminated string literals in interface declarations
      content = content.replace(
        /interface\s+([^;]+);'/g,
        (match, interfaceContent) => {
          return `interface ${interfaceContent};`;
        },
      );

      // Fix unterminated string literals in const declarations
      content = content.replace(/const\s+([^;]+);'/g, (match, constContent) => {
        return `const ${constContent};`;
      });

      // Fix unterminated string literals in let declarations
      content = content.replace(/let\s+([^;]+);'/g, (match, letContent) => {
        return `let ${letContent};`;
      });

      // Fix unterminated string literals in var declarations
      content = content.replace(/var\s+([^;]+);'/g, (match, varContent) => {
        return `var ${varContent};`;
      });

      // Fix unterminated string literals in function declarations
      content = content.replace(
        /function\s+([^;]+);'/g,
        (match, funcContent) => {
          return `function ${funcContent};`;
        },
      );

      // Fix unterminated string literals in type declarations
      content = content.replace(/type\s+([^;]+);'/g, (match, typeContent) => {
        return `type ${typeContent};`;
      });

      // Fix unterminated string literals in enum declarations
      content = content.replace(/enum\s+([^;]+);'/g, (match, enumContent) => {
        return `enum ${enumContent};`;
      });

      // Fix unterminated string literals in class declarations
      content = content.replace(/class\s+([^;]+);'/g, (match, classContent) => {
        return `class ${classContent};`;
      });

      // Fix unterminated string literals in export statements
      content = content.replace(
        /export\s+([^;]+);'/g,
        (match, exportContent) => {
          return `export ${exportContent};`;
        },
      );

      // Fix unterminated string literals in return statements
      content = content.replace(
        /return\s+([^;]+);'/g,
        (match, returnContent) => {
          return `return ${returnContent};`;
        },
      );

      // Fix unterminated string literals in JSX
      content = content.replace(
        /<([^>]+)>([^<]*)<\/\1>;'/g,
        (match, tag, content) => {
          return `<${tag}>${content}</${tag}>;`;
        },
      );

      // Fix unterminated string literals in JSX (div pattern)
      content = content.replace(/<div>([^<]*)<\/div>;'/g, (match, content) => {
        return `<div>${content}</div>;`;
      });

      // Fix unterminated string literals in JSX (div pattern alternative)
      content = content.replace(/<div>([^<]*)<\/div>;'/g, (match, content) => {
        return `<div>${content}</div>;`;
      });

      // Fix unterminated string literals in JSX (div pattern another alternative)
      content = content.replace(/<div>([^<]*)<\/div>;'/g, (match, content) => {
        return `<div>${content}</div>;`;
      });

      // Fix unterminated string literals in JSX (div pattern yet another alternative)
      content = content.replace(/<div>([^<]*)<\/div>;'/g, (match, content) => {
        return `<div>${content}</div>;`;
      });

      // Fix unterminated string literals in JSX (div pattern final alternative)
      content = content.replace(/<div>([^<]*)<\/div>;'/g, (match, content) => {
        return `<div>${content}</div>;`;
      });

      // Fix unterminated string literals in test function declarations
      content = content.replace(
        /describe\s*\(['"`]([^'"`]*)['"`]\s*,\s*\(\)\s*=>\s*\{/g,
        (match, testName) => {
          return `describe('${testName}', () => {`;
        },
      );

      // Fix unterminated string literals in it/test function declarations
      content = content.replace(
        /(it|test)\s*\(['"`]([^'"`]*)['"`]\s*,\s*\(\)\s*=>\s*\{/g,
        (match, funcType, testName) => {
          return `${funcType}('${testName}', () => {`;
        },
      );

      // Fix unterminated string literals in malformed function declarations
      content = content.replace(
        /export const ([^:]+): unknown React\.FC = \(\) => \{;/g,
        (match, funcName) => {
          return `export const ${funcName}: React.FC = () => {`;
        },
      );

      // Fix unterminated string literals in malformed const declarations
      content = content.replace(
        /const ([^:]+): unknown = ([^;]+);'/g,
        (match, varName, value) => {
          return `const ${varName} = ${value};`;
        },
      );

      // Fix unterminated string literals in malformed return statements
      content = content.replace(
        /return <([^>]+)>([^<]*)<\/\1>;'/g,
        (match, tag, content) => {
          return `return <${tag}>${content}</${tag}>;`;
        },
      );

      // Fix unterminated string literals in malformed return statements (div pattern)
      content = content.replace(
        /return <div>([^<]*)<\/div>;'/g,
        (match, content) => {
          return `return <div>${content}</div>;`;
        },
      );

      // Fix unterminated string literals in malformed export statements
      content = content.replace(
        /export default ([^;]+);'/g,
        (match, exportContent) => {
          return `export default ${exportContent};`;
        },
      );

      // Fix unterminated string literals in malformed export statements (alternative)
      content = content.replace(
        /export default ([^;]+);''''/g,
        (match, exportContent) => {
          return `export default ${exportContent};`;
        },
      );

      // Fix unterminated string literals in malformed export statements (another alternative)
      content = content.replace(
        /export default ([^;]+);''''''/g,
        (match, exportContent) => {
          return `export default ${exportContent};`;
        },
      );

      // Fix unterminated string literals in malformed export statements (yet another alternative)
      content = content.replace(
        /export default ([^;]+);''''''''/g,
        (match, exportContent) => {
          return `export default ${exportContent};`;
        },
      );

      // Fix unterminated string literals in malformed export statements (final alternative)
      content = content.replace(
        /export default ([^;]+);'''''''''/g,
        (match, exportContent) => {
          return `export default ${exportContent};`;
        },
      );

      if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf8');
        fixedFiles++;
        console.log(`✅ Fixed ${file}`);
      }
    }
  } catch (error) {
    console.error(`❌ Error processing ${file}:`, error.message);
  }
});

console.log(`\n🎉 Fixed ${fixedFiles} files with unterminated string literals`);
