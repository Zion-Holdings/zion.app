import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintConfigNext from 'eslint-config-next';

const projectRoot = import.meta.dirname;
const tsPluginDef = { "@typescript-eslint": tseslint.plugin };

export default tseslint.config(
  // 1. Global Ignores
  {
    ignores: ["node_modules/**", "dist/**", "out/**", "coverage/**", "build/**", ".next/**", "public/build/**"],
  },

  eslintConfigNext,

  // Fallback for problematic files (non-type-aware TS linting)
  {
    files: [
      "src/hooks/useAuth.tsx",
      "src/components/ui/sidebar/index.tsx",
      "src/types/pwa.d.ts",
      "vite.config.d.ts"
    ],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
        // NO 'project' or 'tsconfigRootDir' here
      }
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      'react': pluginReact, // For react-specific non-type-aware rules on .tsx files
      'react-hooks': pluginReactHooks // For react-hooks rules on useAuth.tsx
    },
    rules: {
      // Basic recommended rules from @typescript-eslint, excluding those requiring type info
      // This can be refined to be more like tseslint.configs.eslintRecommended.rules
      // or specific rules from tseslint.configs.recommended that don't need type info.
      // For now, let's apply some common ones that are known to be non-type-aware.
      ...tseslint.plugin.configs["eslint-recommended"].overrides[0].rules, // Spread rules from the override
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_", "varsIgnorePattern": "^_" }],
      // React specific rules for the .tsx files
      "react/react-in-jsx-scope": "off",
      "react/display-name": "warn",
      // React Hooks specific rules for useAuth.tsx
      ...pluginReactHooks.configs.recommended.rules,
    },
    settings: {
      react: {
        version: "detect"
      }
    }
  },

  // 2. Base JS Configuration
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    rules: {
        ...js.configs.recommended.rules,
        "no-unused-vars": ["warn", { "argsIgnorePattern": "^_", "varsIgnorePattern": "^_" }],
        "no-undef": "error", // Base undefined variable check
    },
    languageOptions: {
        ecmaVersion: "latest",
        globals: { ...globals.browser, process: "readonly" }
    }
  },

  // 3. Base TypeScript Configuration
  {
    files: ["**/*.{ts,tsx,mts,cts}"], // Broadly applies to all TS files
    ignores: ["**/*.d.ts"], // Ignore all .d.ts files from this type-aware block
    plugins: {
      ...tsPluginDef,
      "react-hooks": pluginReactHooks, // Add react-hooks plugin here
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.eslint.json", // Points to our standalone tsconfig
        tsconfigRootDir: projectRoot,
        sourceType: "module",
      },
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      ...pluginReactHooks.configs.recommended.rules, // Add react-hooks rules here
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_", "varsIgnorePattern": "^_" }],
    },
  },

  // 4. React Configuration (for JSX and TSX files)
  {
    files: ["**/*.{jsx,tsx}"], // Targets JSX and TSX
    plugins: {
      react: pluginReact,
      "react-hooks": pluginReactHooks,
      // "@typescript-eslint": tseslint.plugin, // TS plugins should be inherited from Block 3 for .tsx files
    },
    languageOptions: { // This whole languageOptions will be merged; specific to jsx/tsx
      parser: tseslint.parser, // ESSENTIAL: ensure ts-parser for TSX
      parserOptions: {
        project: "./tsconfig.eslint.json", // ESSENTIAL: ensure project context for TSX
        tsconfigRootDir: projectRoot,      // ESSENTIAL: ensure root dir for TSX
        ecmaFeatures: { jsx: true },       // Specific to JSX/TSX
        sourceType: "module",
      },
      globals: { ...globals.browser, process: "readonly" }
    },
    rules: {
      // Rules from Block 3 (Base TS) will apply to .tsx files.
      // Add React-specific rules:
      ...pluginReact.configs.flat.recommended.rules,
      ...pluginReact.configs.flat['jsx-runtime'].rules,
      ...pluginReactHooks.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "warn", // Keep for .jsx, TSX uses TS types
    },
    settings: {
      react: { version: "detect" },
    },
  },

  // 5. Environment Specific Overrides & Globals

  // Node.js CommonJS files
  {
    files: [
        "*.cjs",
        "babel.config.cjs",
        "tailwind.config.js", // Typically CJS
        "workbox-config.js",
        "scripts/**/*.{js,cjs}",
        "api/**/*.{js,cjs}",
        "server/**/*.{js,cjs}",
        "__tests__/controllers/**/*.js",
        "__tests__/integration/**/*.js",
        "plugins/**/*.js"
    ],
    languageOptions: {
      globals: { ...globals.node },
      sourceType: "commonjs",
    },
    rules: {
      "@typescript-eslint/no-require-imports": "off", // Allow require
      "no-undef": ["error", { "typeof": true }]
    }
  },

  // Node.js ES Module files
  {
    files: [
        "eslint.config.js", "vite.config.js", "vite.config.ts", "postcss.config.js",
        "scripts/**/*.mjs",
        "api/create-checkout-session.js",
        "api/create-payment-intent.js",
        "api/stripe-webhook.js",
        "scripts/generate-ai-blog-post.js",
        "scripts/index-elasticsearch.js",
        "scripts/monitor-backlinks.js",
        "scripts/switch-netlify-site.js",
        "supabase/functions/**/*.ts"
    ],
    languageOptions: {
      globals: { ...globals.node },
      sourceType: "module",
    },
  },

  // Supabase Functions (Deno specific, ESM)
  {
    files: ["supabase/functions/**/*.ts"],
    languageOptions: {
        globals: { ...globals.deno, ...globals.node },
        sourceType: "module",
    },
  },

  // Test Files Configuration
  {
    files: [
      "__tests__/**/*.{js,jsx,ts,tsx}",
      "tests/**/*.{js,jsx,ts,tsx}",
      "src/**/__tests__/**/*.{js,jsx,ts,tsx}",
      "src/**/*.test.{js,jsx,ts,tsx}",
      "*.test.{js,jsx,ts,tsx}", "*.spec.{js,jsx,ts,tsx}"
    ],
    ignores: ["**/*.cy.{ts,tsx,js,jsx}"],
    languageOptions: {
      globals: {
        ...globals.jest, ...globals.vitest, ...globals.node, ...globals.browser
      },
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
    }
  },

  // Cypress Test Files
  {
    files: ["cypress/**/*.cy.{js,jsx,ts,tsx}", "cypress/support/**/*.{js,ts}"],
    languageOptions: {
      globals: {
        ...globals.cypress,
        ...globals.node,
        "Cypress": "readonly", "cy": "readonly", "context": "readonly", "assert": "readonly"
      }
    },
    rules: {
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-explicit-any": "off",
    }
  },

  // Browser Extension Files
  {
    files: ["extension/**/*.js"],
    languageOptions: {
      globals: { ...globals.browser, "chrome": "readonly" }
    }
  },

  // Service Worker Files
  {
    files: ["public/service-worker.js"],
    languageOptions: {
      globals: { ...globals.serviceworker, ...globals.browser, "workbox": "readonly", "importScripts": "readonly" }
    }
  },

  // src/i18n/index.ts
  {
    files: ["src/i18n/index.ts"],
    languageOptions: {
      globals: { ...globals.browser, "process": "readonly" }
    }
  },

  // Specific file overrides (use sparingly)
  {
      files: ["src/pages/auth/verify-email.tsx"],
      rules: { "no-undef": "off" }
  },
  eslintConfigPrettier
);
