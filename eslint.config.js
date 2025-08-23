import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        // Node.js globals
        process: 'readonly',
        console: 'readonly',
        module: 'readonly',
        exports: 'readonly',
        require: 'readonly',
        __dirname: 'readonly',
        setTimeout: 'readonly',
        setInterval: 'readonly',
        clearTimeout: 'readonly',
        clearInterval: 'readonly',
        NodeJS: 'readonly',
        // Browser globals
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        fetch: 'readonly',
        URL: 'readonly',
        URLSearchParams: 'readonly',
        File: 'readonly',
        localStorage: 'readonly',
        sessionStorage: 'readonly',
        // Performance APIs
        performance: 'readonly',
        PerformanceObserver: 'readonly',
        PerformanceEntry: 'readonly',
        PerformanceNavigationTiming: 'readonly',
        PerformanceEventTiming: 'readonly',
        // Intersection Observer API
        IntersectionObserver: 'readonly',
        IntersectionObserverEntry: 'readonly',
        IntersectionObserverCallback: 'readonly',
        IntersectionObserverInit: 'readonly',
        // DOM types
        HTMLElement: 'readonly',
        HTMLFormElement: 'readonly',
        HTMLButtonElement: 'readonly',
        HTMLInputElement: 'readonly',
        HTMLTextAreaElement: 'readonly',
        HTMLSelectElement: 'readonly',
        HTMLDivElement: 'readonly',
        HTMLAnchorElement: 'readonly',
        HTMLCanvasElement: 'readonly',
        HTMLImageElement: 'readonly',
        // Event types
        Event: 'readonly',
        EventTarget: 'readonly',
        MouseEvent: 'readonly',
        KeyboardEvent: 'readonly',
        MediaQueryListEvent: 'readonly',
        TouchEvent: 'readonly',
        // DOM types
        Node: 'readonly',
        NodeList: 'readonly',
        Element: 'readonly',
        EventTarget: 'readonly',
        DOMRectReadOnly: 'readonly',
        DOMRect: 'readonly',
        DOMStringMap: 'readonly',
        DOMTokenList: 'readonly',
        // Intersection Observer
        IntersectionObserver: 'readonly',
        IntersectionObserverEntry: 'readonly',
        // Touch types
        Touch: 'readonly',
        TouchList: 'readonly',
        // Form types
        FormData: 'readonly',
        // Canvas and animation globals
        CanvasRenderingContext2D: 'readonly',
        requestAnimationFrame: 'readonly',
        cancelAnimationFrame: 'readonly'
      }
    },
    rules: {
      // React rules
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off", // We use TypeScript
      "react/display-name": "warn",
      // Enable react-hooks rules for React 19 compatibility
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      
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
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-console': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-undef': 'error'
    }
  },
  {
    ignores: [
      'node_modules/',
      '.next/',
      'out/',
      'dist/',
      'build/',
      '*.config.js',
      '*.config.ts',
      'scripts/',
      'automation/',
      'public/reports/**',
      'netlify/',
      'ecosystem*.cjs',
      '**/*.cjs'
    ]
  }
];