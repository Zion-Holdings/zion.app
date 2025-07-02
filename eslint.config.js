import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";

export default [
  // Global ignores
  {
    ignores: [
      "node_modules/**",
      "dist/**", 
      "out/**",
      "coverage/**",
      "build/**",
      ".next/**",
      "public/build/**",
      "*.config.js",
      "*.config.ts",
      "*.config.cjs",
      "*.config.mjs"
    ],
  },

  // Base JavaScript configuration
  js.configs.recommended,

  // TypeScript configuration
  ...tseslint.configs.recommended,

  // Custom rules for all files
  {
    files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        process: "readonly"
      }
    },
    rules: {
      "no-unused-vars": "off", // Disable base rule
      "@typescript-eslint/no-unused-vars": ["warn", { 
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_" 
      }],
      "@typescript-eslint/no-explicit-any": "warn",
      "no-console": ["warn", { allow: ["warn", "error"] }],
    }
  },

  // React/JSX specific configuration
  {
    files: ["**/*.{jsx,tsx}"],
    plugins: {
      react: pluginReact,
      "react-hooks": pluginReactHooks,
      "jsx-a11y": pluginJsxA11y,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.browser,
        process: "readonly"
      }
    },
    rules: {
      // React rules
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off", // We use TypeScript
      "react/display-name": "warn",
      // Disabled react-hooks rules due to ESLint v9 compatibility issues
      // "react-hooks/rules-of-hooks": "error",
      // "react-hooks/exhaustive-deps": "warn",
      
      // Basic accessibility rules
      "jsx-a11y/alt-text": "error",
      "jsx-a11y/aria-props": "error",
    },
    settings: {
      react: {
        version: "detect"
      }
    }
  },

  // Test files configuration
  {
    files: [
      "**/__tests__/**/*.{js,jsx,ts,tsx}",
      "**/tests/**/*.{js,jsx,ts,tsx}",
      "**/*.test.{js,jsx,ts,tsx}",
      "**/*.spec.{js,jsx,ts,tsx}"
    ],
    languageOptions: {
      globals: {
        ...globals.jest,
        ...globals.node,
        ...globals.browser,
        vi: "readonly",
        test: "readonly",
        expect: "readonly",
        describe: "readonly",
        it: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
        beforeAll: "readonly",
        afterAll: "readonly"
      }
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "no-console": "off"
    }
  },

  // Node.js specific files
  {
    files: [
      "**/*.cjs",
      "scripts/**/*.js",
      "api/**/*.js",
      "server/**/*.js",
      "backend/**/*.js",
      "token/**/*.js",
      "hardhat.config.js"
    ],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        ...globals.node
      }
    },
    rules: {
      "@typescript-eslint/no-require-imports": "off"
    }
  },

  // Cypress files
  {
    files: ["cypress/**/*.{js,ts,jsx,tsx}"],
    languageOptions: {
      globals: {
        ...globals.node,
        cy: "readonly",
        Cypress: "readonly",
        context: "readonly",
        assert: "readonly",
        describe: "readonly",
        it: "readonly",
        expect: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
        before: "readonly",
        after: "readonly"
      }
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off"
    }
  },

  // Chrome Extension files
  {
    files: ["extension/**/*.{js,ts}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        chrome: "readonly"
      }
    },
    rules: {
      "no-console": "off"
    }
  },

  // Service Worker files
  {
    files: ["public/service-worker.js", "**/sw.js", "**/*service-worker*.js"],
    languageOptions: {
      globals: {
        ...globals.serviceworker,
        workbox: "readonly",
        importScripts: "readonly",
        self: "readonly",
        clients: "readonly",
        caches: "readonly"
      }
    },
    rules: {
      "no-console": "off",
      "no-redeclare": "off" // Allow workbox to be redeclared in service worker context
    }
  },

  // Jest setup files
  {
    files: ["tests/jest.setup.ts", "**/*jest.setup*"],
    languageOptions: {
      globals: {
        ...globals.jest,
        ...globals.node,
        jest: "readonly",
        global: "readonly"
      }
    },
    rules: {
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-explicit-any": "off"
    }
  },

  // Mock files in scripts directory
  {
    files: ["scripts/__mocks__/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.jest,
        ...globals.node,
        jest: "readonly"
      }
    },
    rules: {
      "@typescript-eslint/no-require-imports": "off"
    }
  }
];
