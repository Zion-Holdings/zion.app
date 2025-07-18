import js from "@eslint/js";
import globals from "globals";

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
      "no-unused-vars": "warn",
      "no-console": ["warn", { allow: ["warn", "error"] }],
    }
  },

  // React/JSX specific configuration
  {
    files: ["**/*.{jsx,tsx}"],
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
    }
  }
];
