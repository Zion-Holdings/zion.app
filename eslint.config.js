// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import cypressPlugin from "eslint-plugin-cypress/flat"; // Corrected import for flat config

// Cleaned global objects
const browserGlobals = Object.fromEntries(
  Object.entries(globals.browser).map(([key, value]) => [key.trim(), value])
);
const nodeGlobals = Object.fromEntries(
  Object.entries(globals.node).map(([key, value]) => [key.trim(), value])
);
const serviceWorkerGlobals = Object.fromEntries(
  Object.entries(globals.serviceworker).map(([key, value]) => [key.trim(), value])
);


export default [
  // 1. Global Ignores
  {
    ignores: [
      "dist/",
      "node_modules/",
      "**/*.config.js", // Ignores this file, tailwind.config.js, etc.
      // "*.config.ts", // Handled by specific tsconfig below if needed
      "extension/",
      "supabase/functions/_shared/",
      "playwright.config.ts",
      "jest.config.js",
      "scripts/",
      "coverage/",
      "*.d.ts", // Typically declaration files don't need linting
    ],
  },

  // 2. Base Configuration for JavaScript files
  {
    files: ["**/*.{js,cjs,mjs}"],
    rules: js.configs.recommended.rules, // Using only rules from js.configs.recommended
    languageOptions: {
      sourceType: "commonjs", // Default, overridden by more specific configs below
      globals: { ...nodeGlobals },
    },
  },
  // JS files that are ES Modules
  {
    files: ["api/**/*.js", "pages/api/**/*.js", "src/utils/setupAnalyticsTables.js"],
    languageOptions: { sourceType: "module", globals: { ...nodeGlobals } },
  },
  // Service Worker JS
  {
    files: ["public/service-worker.js"],
    languageOptions: { globals: { ...serviceWorkerGlobals } },
  },

  // 3. TypeScript Configurations
  // Main application TS/TSX files (src, pages, but not tests, stories, cypress, supabase yet)
  ...tseslint.config({
    files: ["src/**/*.{ts,tsx}", "pages/**/*.{ts,tsx}"], 
    // Exclude story files from this general src/pages config
    ignores: ["src/**/*.stories.tsx", "src/**/*.stories.ts", "src/**/*.test.tsx", "src/**/*.test.ts"],
    extends: [...tseslint.configs.recommendedTypeChecked],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.json"], // Simplified to only tsconfig.json
        tsconfigRootDir: import.meta.dirname,
      },
      globals: { ...browserGlobals },
    },
    plugins: { "react-hooks": reactHooks, "react-refresh": reactRefresh },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unsafe-assignment": "warn",
      "@typescript-eslint/no-unsafe-member-access": "warn",
      "@typescript-eslint/no-unsafe-call": "warn",
      "@typescript-eslint/no-unsafe-return": "warn",
      "@typescript-eslint/no-unsafe-argument": "warn",
      "@typescript-eslint/restrict-template-expressions": "warn",
      "@typescript-eslint/no-floating-promises": ["warn", { ignoreVoid: true }],
      "@typescript-eslint/no-misused-promises": ["warn", { checksVoidReturn: false }],
    },
  }),

  // Config for vite.config.ts, tailwind.config.ts etc. (Node environment TS files)
  // This should specifically target config files at the root.
  ...tseslint.config({
    files: ["vite.config.ts", "tailwind.config.ts", "cypress.config.ts", "vitest.config.ts"], // Explicit list
    extends: [...tseslint.configs.recommendedTypeChecked],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json"], // Use tsconfig.node.json
        tsconfigRootDir: import.meta.dirname,
      },
      globals: { ...nodeGlobals },
    },
    rules: {
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-require-imports": "off",
    }
  }),

  // Test files configuration (__tests__ directory)
  ...tseslint.config({
    files: ["__tests__/**/*.{ts,tsx}"],
    extends: [...tseslint.configs.recommendedTypeChecked],
    languageOptions: {
      parserOptions: {
        project: "./__tests__/tsconfig.json",
        tsconfigRootDir: import.meta.dirname,
      },
      globals: { ...globals.jest, ...browserGlobals }, // Jest and browser globals
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
      // Allow describe, it, expect etc.
      "@typescript-eslint/unbound-method": "off",
    },
  }),

  // Test files configuration (tests/ directory)
  ...tseslint.config({
    files: ["tests/**/*.{ts,tsx,js,jsx}"], // Include JS/JSX as per its tsconfig
    ignores: ["tests/e2e/**"], // e2e tests inside 'tests' might be Playwright, not Jest
    extends: [...tseslint.configs.recommendedTypeChecked],
    languageOptions: {
      parserOptions: {
        project: "./tests/tsconfig.json",
        tsconfigRootDir: import.meta.dirname,
      },
      globals: { ...globals.jest, ...browserGlobals }, // Jest and browser globals
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/unbound-method": "off", // for Jest matchers
      "@typescript-eslint/no-var-requires": "off", // Allow require in JS test files
      "@typescript-eslint/no-require-imports": "off", // Allow require in JS test files
    },
  }),

  // Storybook files configuration
  ...tseslint.config({
    files: [
      ".storybook/**/*.ts",
      ".storybook/**/*.tsx",
      "src/**/*.stories.tsx",
      "src/**/*.stories.ts", // Added .ts stories
      "stories/**/*.stories.tsx",
      "stories/**/*.stories.ts", // Added .ts stories
    ],
    extends: [...tseslint.configs.recommendedTypeChecked],
    languageOptions: {
      parserOptions: {
        project: "./.storybook/tsconfig.json",
        tsconfigRootDir: import.meta.dirname,
      },
      globals: { ...browserGlobals },
    },
    rules: {
      "import/no-anonymous-default-export": "off",
      "react-refresh/only-export-components": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/no-floating-promises": "off",
      "@typescript-eslint/restrict-template-expressions": "off",
    },
  }),

  // Supabase functions configuration
  ...tseslint.config({
    files: ["supabase/functions/**/*.ts"],
    extends: [...tseslint.configs.recommendedTypeChecked],
    languageOptions: {
      parserOptions: {
        project: "./supabase/functions/tsconfig.json",
        tsconfigRootDir: import.meta.dirname,
      },
      globals: { ...nodeGlobals },
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/no-floating-promises": "warn", 
      "@typescript-eslint/restrict-template-expressions": "warn", 
    },
  }),
  
  // Cypress TypeScript Configuration
  ...tseslint.config({
    files: ["cypress/**/*.ts", "cypress/**/*.tsx"], // Target Cypress TS files
    extends: [...tseslint.configs.recommendedTypeChecked], // Use type-aware linting
    languageOptions: {
      parserOptions: {
        project: "./cypress/tsconfig.json", // Point to Cypress's tsconfig
        tsconfigRootDir: import.meta.dirname,
      },
      globals: { // Cypress globals are typically provided by the plugin below
        ...browserGlobals, // Cypress runs in browser
        ...nodeGlobals,   // For tasks/plugins if any TS is used there
      },
    },
    rules: {
      "@typescript-eslint/no-namespace": "off", // Cypress often uses namespaces in d.ts
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      // Specific to Cypress tests, might not need strict method binding
      "@typescript-eslint/unbound-method": "off", 
    }
  }),

  // Cypress Global Configuration (Plugin for JS and TS files)
  // This spread should bring in necessary plugins, rules, and languageOptions (globals)
  {
    files: ["cypress/**/*.{js,ts,tsx}"], // Target all Cypress files
    ...cypressPlugin.configs.recommended, // Spread the recommended config
    // Add any custom overrides *after* spreading the recommended config
    // For example, if you need to override a specific rule:
    rules: {
      ...cypressPlugin.configs.recommended.rules, // Start with recommended rules
      // "some-cypress-rule-to-override": "off", // Example override
      // Ensure TS overrides from the TS-specific Cypress block are respected if needed,
      // or merge them here if this is the sole Cypress block for TS files.
      // Given we have a separate tseslint.config for cypress TS, this block's TS rules
      // might primarily affect JS files in Cypress or provide a base.
    }
  },
  // Specific for cypress/support/commands.js if it's not a module and needs commonjs
  // This might need to be adjusted if cypressPlugin.configs.recommended sets a default sourceType
  {
    files: ["cypress/support/commands.js"],
    languageOptions: {
        sourceType: "commonjs",
         globals: { // Ensure Cypress globals are also here
          ...(cypressPlugin.configs.recommended.languageOptions?.globals || {}),
          ...nodeGlobals, // If it uses any Node features like 'require'
        }
    }
  }
];
