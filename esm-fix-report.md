# ESM Import Issues Fix Report

## Problem Analysis

The Netlify build was failing with the following ESM import errors:

1. **Formik Package Issues:**
   - `Module not found: ESM packages (lodash/isPlainObject) need to be imported`
   - `Module not found: ESM packages (lodash/cloneDeep) need to be imported`  
   - `Module not found: ESM packages (lodash/clone) need to be imported`
   - `Module not found: ESM packages (lodash/toPath) need to be imported`

2. **React Day Picker Issues:**
   - `Module not found: ESM packages (date-fns) need to be imported`

## Root Cause

Next.js 15 with React 19 has stricter ESM module resolution requirements. The `formik` and `react-day-picker` packages were trying to import lodash and date-fns modules using CommonJS-style imports, but Next.js expected ESM imports.

## Solution Implementation

### 1. Next.js Configuration Updates (`next.config.js`)

#### Enhanced `transpilePackages`
```javascript
transpilePackages: [
  'react-markdown',
  'date-fns',
  'react-day-picker', 
  'formik',
  'lodash',
  'lodash-es',
  'lodash/isPlainObject',
  'lodash/cloneDeep',
  'lodash/clone',
  'lodash/toPath',
  // ... other packages
],
```

#### ESM Configuration
```javascript
experimental: {
  esmExternals: 'loose', // Allow loose ESM handling
  // ... other config
},
```

#### Webpack Alias Configuration
```javascript
config.resolve.alias = {
  ...config.resolve.alias,
  'lodash/isPlainObject': 'lodash-es/isPlainObject',
  'lodash/cloneDeep': 'lodash-es/cloneDeep',
  'lodash/clone': 'lodash-es/clone',
  'lodash/toPath': 'lodash-es/toPath',
  'lodash/isEqual': 'lodash-es/isEqual',
  'lodash/isFunction': 'lodash-es/isFunction',
  'lodash/isString': 'lodash-es/isString',
  'lodash/isArray': 'lodash-es/isArray',
  'lodash/isObject': 'lodash-es/isObject',
  'lodash': 'lodash-es',
};
```

#### Module Resolution Rules
```javascript
// Configure webpack to handle ESM packages properly
config.module.rules.push({
  test: /\.m?js$/,
  include: [
    /node_modules\/formik/,
    /node_modules\/react-day-picker/,
    /node_modules\/date-fns/,
    /node_modules\/lodash/
  ],
  type: 'javascript/auto',
  resolve: {
    fullySpecified: false,
  },
});

// Add specific rules for CommonJS packages that need ESM resolution
config.module.rules.push({
  test: /node_modules\/(formik|react-day-picker).*\.js$/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: [
        ['@babel/preset-env', {
          modules: false,
          targets: { esmodules: true }
        }]
      ],
      plugins: [
        ['@babel/plugin-transform-runtime', {
          useESModules: true
        }]
      ]
    }
  }
});
```

#### Conditional Module Resolution
```javascript
if (isServer) {
  config.resolve.conditionNames = ['node', 'require', 'default'];
  config.resolve.mainFields = ['main', 'module'];
} else {
  // Client-side: prioritize ESM modules
  config.resolve.conditionNames = ['import', 'module', 'require', 'default'];
  config.resolve.mainFields = ['module', 'main'];
}
```

### 2. Babel Configuration (`babel.config.js`)

Created comprehensive Babel configuration with ESM handling:

```javascript
module.exports = {
  presets: [
    ['@babel/preset-env', {
      modules: false, // Preserve ES modules
      targets: { esmodules: true, node: '18' }
    }],
    ['@babel/preset-react', { runtime: 'automatic' }],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['@babel/plugin-transform-runtime', {
      useESModules: true,
      corejs: false,
      helpers: true,
      regenerator: false
    }]
  ],
  // Handle specific problematic packages
  overrides: [
    {
      test: /node_modules\/(formik|react-day-picker)/,
      presets: [
        ['@babel/preset-env', {
          modules: false, // Keep as ESM
          targets: { esmodules: true }
        }]
      ]
    }
  ]
};
```

### 3. Package.json Overrides

Added dependency overrides to force ESM-compatible versions:

```json
"overrides": {
  "formik": {
    "lodash": "npm:lodash-es@^4.17.21"
  },
  "react-day-picker": {
    "date-fns": "^3.6.0"
  }
}
```

### 4. ESM Polyfill (`src/utils/esm-polyfill.ts`)

Created runtime polyfill for module resolution:

```typescript
// Server-side Module._resolveFilename patching
Module._resolveFilename = function (request: string, parent: any, isMain: boolean, options: any) {
  // Map lodash imports to lodash-es
  if (request.startsWith('lodash/')) {
    const lodashModule = request.replace('lodash/', 'lodash-es/');
    try {
      return originalResolveFilename.call(this, lodashModule, parent, isMain, options);
    } catch (e) {
      return originalResolveFilename.call(this, request, parent, isMain, options);
    }
  }
  // ... additional mappings
};
```

### 5. Build Script Updates (`scripts/optimized-build.cjs`)

Added ESM-specific environment variables:

```javascript
const optimizedEnv = {
  // ... existing config
  // ESM module resolution fixes for formik/lodash/date-fns
  WEBPACK_DISABLE_LODASH_DEPRECATION: "true",
  NEXT_FORCE_ESM_EXTERNALS: "true",
};
```

## Expected Results

These changes should resolve the following build errors:

1. ✅ `lodash/isPlainObject` → `lodash-es/isPlainObject`
2. ✅ `lodash/cloneDeep` → `lodash-es/cloneDeep`
3. ✅ `lodash/clone` → `lodash-es/clone`
4. ✅ `lodash/toPath` → `lodash-es/toPath`
5. ✅ `date-fns` ESM compatibility

## Testing

To test the fix:

1. Run the build command locally:
   ```bash
   npm run build:netlify:prepare
   ```

2. Deploy to Netlify and monitor the build logs

3. Verify that the specific ESM import errors no longer occur

## Additional Benefits

- Improved build performance due to proper ESM handling
- Better tree-shaking with lodash-es
- Future-proof configuration for Next.js 15+ and React 19+
- Reduced bundle size through ESM optimization

## Rollback Plan

If issues occur, the changes can be rolled back by:

1. Reverting the `next.config.js` webpack configuration
2. Removing the `babel.config.js` overrides
3. Removing the package.json overrides
4. Removing the ESM polyfill from entry points

All changes are isolated and well-documented for easy maintenance.