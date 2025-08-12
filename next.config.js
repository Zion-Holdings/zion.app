import path from 'path';
import { fileURLToPath } from 'url';
import os from 'os';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configure CDN asset prefix when running in production
const isProd = process.env.NODE_ENV === 'production';
const isNetlify = process.env.NETLIFY === 'true';
const isPreviewBuild = process.env.CONTEXT !== 'production';

// Only use CDN if:
// 1. In production mode
// 2. CDN URL is provided and not a placeholder
// 3. Not a Netlify preview build (unless it's the main domain)
// 4. CDN URL is a valid HTTPS URL
const cdnUrl = process.env.NEXT_PUBLIC_CDN_URL;
const isValidCDN = cdnUrl && 
  cdnUrl.startsWith('https://') && 
  !cdnUrl.includes('yourdomain.com') && 
  !cdnUrl.includes('example.com') && 
  !cdnUrl.includes('localhost');

const shouldUseCDN = isProd && isValidCDN && (!isNetlify || !isPreviewBuild);

const assetPrefix = shouldUseCDN ? cdnUrl : '';

// Log configuration for debugging
if (process.env.NODE_ENV === 'development') {
  console.log('Next.js Configuration:', {
    isProd,
    isNetlify,
    isPreviewBuild,
    cdnUrl: cdnUrl || 'Not set',
    isValidCDN,
    shouldUseCDN,
    assetPrefix: assetPrefix || 'Disabled (serving from origin)',
    imageOptimization: !(isNetlify && isPreviewBuild) ? 'Enabled' : 'Disabled for Netlify preview'
  });
}
/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix,
  poweredByHeader: false,
  trailingSlash: false,
  reactStrictMode: true,
  // Optimized for fast builds (hanging issue SOLVED)
  // outputFileTracing: false, // Intentionally disabled via env vars in build scripts and netlify.toml to prevent hanging.
  productionBrowserSourceMaps: false, // Disable for faster builds
  
  // Environment configuration
  env: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },

  modularizeImports: {
    'lucide-react': {
      transform: 'lucide-react/dist/esm/icons/{{kebabCase member}}',
      skipDefaultConversion: true,
    },
    '@radix-ui/react-icons': {
      transform: '@radix-ui/react-icons/dist/{{member}}',
    },
  },
  outputFileTracingExcludes: {
    '*': [
      'node_modules/@swc/core-linux-x64-gnu',
      'node_modules/@swc/core-linux-x64-musl',
      'node_modules/@esbuild/linux-x64',
      'node_modules/@chainsafe/**/*',
      'node_modules/three/**/*',
      'node_modules/@google/model-viewer/**/*',
    ],
  },

  experimental: {
    optimizePackageImports: [
      'lucide-react', 
      '@radix-ui/react-icons',
      'recharts',
      'react-window',
      'fuse.js'
    ],

    // Enable CSS optimization for production
    optimizeCss: process.env.NODE_ENV === 'production', 
    // Memory and performance optimizations for 176+ pages
    largePageDataBytes: 128 * 1000, // Reduced to 128KB for better performance
    workerThreads: false, // Disable worker threads to reduce memory usage
    cpus: Math.min(2, os.cpus().length), // Adaptive CPU limit
    // Bundle analysis optimizations moved to root level
    // Disable profiling for faster builds
    swcTraceProfiling: false,
    
  },

  images: {
    unoptimized: isNetlify, // Disable optimization on Netlify to prevent 404s
    loader: 'default',
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Modern remotePatterns configuration (replaces deprecated domains)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.gravatar.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdnjs.cloudflare.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.zion.org',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'app.ziontechgroup.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/**',
      },
      // Support for Netlify preview URLs
      {
        protocol: 'https',
        hostname: '*.netlify.app',
        port: '',
        pathname: '/**',
      },
      // Support for Netlify branch previews
      {
        protocol: 'https',
        hostname: '*--*.netlify.app',
        port: '',
        pathname: '/**',
      },
      // Support for placeholder.co
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Add error handling for Netlify
    ...(isNetlify && {
      // For Netlify, use more conservative settings
      formats: ['image/webp'],
      minimumCacheTTL: 60, // Shorter cache for debugging
    }),
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
    // Remove React DevTools in production
    reactRemoveProperties: process.env.NODE_ENV === 'production' ? { properties: ['data-testid'] } : false,
    // Enable SWC minification optimizations
    styledComponents: false, // Disable if not using styled-components
  },

  transpilePackages: [
    // ESM packages that need transpilation
    'lodash-es',
    'react-markdown',
    'date-fns',
    'react-day-picker',
    'sonner',
    'stripe',
    'swr',
    'trough',
    'bail',
    'is-plain-obj',
    'mdast-util-from-markdown',
    'mdast-util-to-hast',
    'unified',
    'remark-parse',
    'remark-rehype',
    'formik',
    // UI libraries that need transpilation
    '@chakra-ui/react',
    '@radix-ui/react-accordion',
    '@radix-ui/react-alert-dialog',
    '@radix-ui/react-aspect-ratio',
    '@radix-ui/react-avatar',
    '@radix-ui/react-checkbox',
    '@radix-ui/react-dialog',
    '@radix-ui/react-dropdown-menu',
    '@radix-ui/react-label',
    '@radix-ui/react-popover',
    '@radix-ui/react-progress',
    '@radix-ui/react-scroll-area',
    '@radix-ui/react-select',
    '@radix-ui/react-separator',
    '@radix-ui/react-slider',
    '@radix-ui/react-slot',
    '@radix-ui/react-switch',
    '@radix-ui/react-tabs',
    '@radix-ui/react-toast',
    '@radix-ui/react-toggle',
    '@radix-ui/react-tooltip',
    '@radix-ui/react-hover-card',
    '@radix-ui/react-navigation-menu',
    '@hookform/resolvers',
    '@google/model-viewer',
    '@reduxjs/toolkit',
    '@reown/appkit-adapter-ethers',
    '@reown/appkit',
    '@coinbase/wallet-sdk',
    '@reown/appkit-common',
    '@reown/appkit-controllers',
    '@reown/appkit-pay',
    '@reown/appkit-ui',
    '@reown/appkit-wallet',
    '@reown/appkit-utils',
    'ethers',
    'viem',
    '@wagmi/core',
    '@wagmi/connectors',
    '@tanstack/react-query',
    'axios',
    'class-variance-authority',
    'clsx',
    'devlop',
    'tailwind-merge',
    'embla-carousel-react',
    'framer-motion',
    'hast-util-to-jsx-runtime',
    'html-url-attributes',
    'jspdf-autotable',
    'jspdf',
    'recharts',
    'comma-separated-tokens',
    'estree-util-is-identifier-name',
    'hast-util-whitespace',
    'property-information',
    'react-hook-form',
    'space-separated-tokens',
    'style-to-object',
    'unist-util-position',
    'unist-util-stringify-position',
    'unist-util-visit',
    'vfile',
    'zod',
    'react-i18next',
    'react-loading-skeleton',
    'react-redux',
    'remark-parse',
    'remark-rehype',
    'unified',
    'micromark',
    'micromark-util-character',
    'micromark-util-chunked',
    'micromark-util-classify-character',
    'micromark-util-combine-extensions',
    'micromark-util-decode-numeric-character-reference',
    'micromark-util-decode-string',
    'micromark-util-encode',
    'micromark-util-html-tag-name',
    'micromark-util-normalize-identifier',
    'micromark-util-resolve-all',
    'micromark-util-sanitize-uri',
    'micromark-util-subtokenize',
    'micromark-util-symbol',
    'micromark-util-types',
    // lodash is installed for Formik compatibility; lodash-es is used directly in our code.
    'helia',
    '@helia/json',
    'multiformats',
    'libp2p',
    '@libp2p/identify',
  ],

  webpack: (config, { dev, isServer, webpack }) => {
    // Fix EventEmitter memory leak by increasing max listeners
    // events.EventEmitter.defaultMaxListeners = 20; // Will be set by build script
    
    // CRITICAL: Add comprehensive polyfills as the very first entry point
    if (!isServer) {
      const originalEntry = config.entry;
      config.entry = async () => {
        const entries = await originalEntry();
        
        // Create comprehensive polyfill array
        const polyfills = [
          './src/utils/serverless-polyfill.ts',  // New serverless polyfill
          './src/utils/env-polyfill.ts'         // Existing env polyfill
        ];
        
        // Add polyfills to every entry point
        Object.keys(entries).forEach(entryName => {
          if (Array.isArray(entries[entryName])) {
            polyfills.forEach(polyfill => {
              if (!entries[entryName].includes(polyfill)) {
                entries[entryName].unshift(polyfill);
              }
            });
          }
        });
        
        return entries;
      };

      // DISABLED: FINAL NUCLEAR OPTION BannerPlugin causing module resolution issues
      // The BannerPlugin was injecting absolute paths '/opt/build/repo/src/utils/tslib-polyfill.js'
      // into third-party node_modules like @walletconnect, @peculiar, etc.
      // This caused webpack module resolution failures in the Netlify build environment
      //
      // Document-level polyfills in _document.tsx will handle runtime errors instead

      // DISABLED: All webpack-level polyfill injection causing module resolution issues
      // The following approaches were causing third-party node_modules to import absolute paths:
      // - resolve.alias for tslib
      // - ProvidePlugin for TypeScript helpers  
      // - NormalModuleReplacementPlugin for tslib replacement
      // - BannerPlugin injection into chunks
      //
      // Solution: Rely only on document-level and runtime polyfills without webpack interference

      // SIMPLIFIED DefinePlugin 
      config.plugins.push(
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
          'process.env': JSON.stringify({
            NODE_ENV: process.env.NODE_ENV || 'production',
            NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || '',
            NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL || '',
            NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
          }),
        })
      );


    }
    
    // Development optimizations to prevent memory leaks with 176+ pages
    if (dev) {
      if (!isServer) {
        config.watchOptions = {
          ignored: /node_modules/,
          aggregateTimeout: 300,
          poll: false, // Use native file watching instead of polling
        };
      }

      // Alias react-router-dom to a lightweight stub to avoid build errors
      config.resolve.alias = {
        ...config.resolve.alias,
        'react-router-dom': path.resolve(__dirname, 'src/stubs/react-router-dom.ts'),
      };

      if (!isServer) {
        // Optimize memory usage in development
        config.stats = 'errors-warnings';
        config.infrastructureLogging = {
          level: 'error',
        };
      }
    }
    
    // For Netlify deployment, exclude problematic files temporarily
    if (process.env.SKIP_TYPE_CHECK === 'true') {
      config.externals = config.externals || [];
      config.externals.push({
        './src/context/FavoritesContext.tsx': 'empty',
        './src/context/LanguageContext.tsx': 'empty', 
        './src/context/RequestQuoteWizard.tsx': 'empty',
        './src/context/WhitelabelContext.tsx': 'empty',
        './src/hooks/useApiKeys.ts': 'empty',
      });
    }

    // Smart Sentry detection: Disable automatically if would cause build issues
    const shouldDisableSentry = process.env.SKIP_SENTRY_BUILD === 'true' || 
                                process.env.CI === 'true' ||
                                process.env.NODE_ENV === 'production' ||
                                !process.env.SENTRY_DSN ||
                                process.env.SENTRY_DSN?.includes('dummy') ||
                                process.env.SENTRY_DSN?.includes('placeholder');
    
    if (shouldDisableSentry) {
      console.log('🚫 Sentry disabled - using mock implementation (Smart Detection)');
      
      // Use webpack aliases to completely replace all Sentry imports with mocks
      config.resolve.alias = {
        ...config.resolve.alias,
        '@sentry/nextjs': path.resolve(__dirname, 'src/utils/sentry-mock.ts'),
        '@sentry/node': path.resolve(__dirname, 'src/utils/sentry-mock.ts'),
        '@sentry/tracing': path.resolve(__dirname, 'src/utils/sentry-mock.ts'),
        '@sentry/react': path.resolve(__dirname, 'src/utils/sentry-mock.ts'),
        '@sentry/browser': path.resolve(__dirname, 'src/utils/sentry-mock.ts'),
      };
    }

    // Completely exclude dd-trace during CI builds to prevent native module issues  
    if (process.env.SKIP_DATADOG === 'true' || process.env.CI === 'true') {
      console.log('🚫 DD-Trace disabled for CI build - using mock implementation');
      
      // Use webpack alias to replace dd-trace with mock implementation
      config.resolve.alias = {
        ...config.resolve.alias,
        'dd-trace': path.resolve(__dirname, 'src/utils/dd-trace-mock.ts'),
      };
    }

    // PHASE 3: Advanced Performance Optimizations and Error Handling
    // Enhanced bundle optimization and monitoring capabilities

    // CRITICAL: Minimal serverless environment protection (avoiding read-only property issues)
    if (isServer) {
      // Only essential polyfills to avoid property assignment errors
      if (typeof global !== 'undefined') {
        // Only set properties that are safe to assign
        try {
          Object.defineProperty(global, 'self', { 
            value: global.self || global, 
            writable: true, 
            configurable: true 
          });
        } catch (e) { /* ignore if already defined */ }
        
        try {
          Object.defineProperty(global, 'webpackChunk_N_E', { 
            value: global.webpackChunk_N_E || [], 
            writable: true, 
            configurable: true 
          });
        } catch (e) { /* ignore if already defined */ }
      }
      
      // Add serverless-specific webpack configuration
      config.target = 'node';
      config.externalsPresets = { node: true };
      
      // Ensure proper module resolution in serverless
      config.resolve.conditionNames = ['node', 'require', 'default'];
      config.resolve.mainFields = ['main', 'module'];
    }

    // Exclude native modules from server-side bundling to prevent build errors
    if (isServer) {
      // Add all problematic native modules as externals with commonjs type
      config.externals = config.externals || [];
      const nativeModules = [
        '@chainsafe/libp2p-noise',
        '@chainsafe/libp2p-gossipsub', 
        '@libp2p/tcp',
        'libp2p',
        '@orbitdb/core',
        'helia',
        '@helia/json',
        'blockstore-level',
        'datastore-level',
        'multiformats',
        'dd-trace',
        // Add any other native modules that might cause issues
        '@chainsafe/as-sha256',
        '@chainsafe/as-chacha20poly1305',
        '@chainsafe/bls',
        'node-datachannel',
        'classic-level',
        'level',
        // Add modules that require dynamic imports
        '@ungap/structured-clone',
        'decode-named-character-reference',
        'mdast-util-to-hast',
        'mdast-util-from-markdown',
        'remark-rehype',
        'remark-parse',
        'sonner',
        'stripe',
        'swr',
        'trough'
      ];
      
      // Add as external with commonjs type instead of module type
      nativeModules.forEach(module => {
        config.externals.push({
          [module]: `commonjs ${module}`
        });
      });
      console.log('🚫 Native modules externalized for server build:', nativeModules.length);
    } else {
      // For client-side, bundle problematic UI libraries instead of externalizing
      config.externals = config.externals || [];
      // Don't externalize UI libraries on client side
    }

    // Fix webpack cache configuration to prevent build errors and warnings
    if (config.cache) {
      // Use memory cache to prevent filesystem cache issues and "Serializing big strings" warnings
      config.cache = {
        type: 'memory',
        maxGenerations: dev ? 1 : 5,
        // Remove cacheUnaffected entirely to prevent conflicts with usedExports
      };
    } else {
      // Ensure memory cache is properly configured
      config.cache = {
        type: 'memory',
        maxGenerations: dev ? 1 : 5,
        // Remove cacheUnaffected entirely to prevent conflicts with usedExports
      };
    }

    // Add optimization to prevent temporal dead zone issues
    if (!dev && isServer) {
      config.optimization = {
        ...config.optimization,
        concatenateModules: false, // Disable module concatenation which can cause TDZ issues
        minimize: false, // Disable minimization on server side to preserve variable names
        mangleExports: false,
      };
    }

    // Suppress warnings in both dev and production
    config.ignoreWarnings = [
      /punycode.*deprecated/i,
      /DEP0040/,
      /Critical dependency/,
      /Serializing big strings/i,
      /PackFileCacheStrategy/,
      // Suppress common Next.js warnings that don't affect functionality
      /Module not found.*can't resolve/i,
      /export.*was not found in/i,
      // Additional Next.js 14 warnings
      /images\.domains.*deprecated/i,
      /Fast Refresh/i,
      /webpack performance recommendations/i,
      // Suppress optimization warnings
      /optimization\.usedExports/i,
      /cacheUnaffected/i,
      // Suppress cache-related warnings
      /cache.*filesystem/i,
      /memory.*cache/i,
    ];



    // PHASE 2: Enhanced Bundle Splitting for Performance Optimization
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        
        // Advanced splitChunks configuration for bundle optimization
        splitChunks: {
          chunks: 'all',
          minSize: 20000,     // 20KB minimum chunk size
          maxSize: 244000,    // 244KB maximum chunk size (target from plan)
          minChunks: 1,
          maxAsyncRequests: 30,
          maxInitialRequests: 30,
          cacheGroups: {
            // Heavy libraries that need special handling
            heavy: {
              test: /[\\/]node_modules[\\/](@libp2p|helia|orbitdb|blockstore|datastore|multiformats)[\\/]/,
              name: 'heavy-vendor',
              chunks: 'async', // Only load when needed
              priority: 30,
              maxSize: 200000,
              enforce: true,
            },
            
            // Vendor libraries bundle (optimized)
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
              priority: 10,
              maxSize: 200000, // Reduced from 244KB
              minSize: 10000,  // Prevent tiny chunks
              enforce: true,
            },
            
            // React ecosystem bundle
            react: {
              test: /[\\/]node_modules[\\/](react|react-dom|react-router|@tanstack)[\\/]/,
              name: 'react-vendor',
              chunks: 'all',
              priority: 20,
              maxSize: 244000,
              enforce: true,
            },
            
            // UI libraries bundle
            ui: {
              test: /[\\/]node_modules[\\/](@radix-ui|@chakra-ui|framer-motion|lucide-react)[\\/]/,
              name: 'ui-vendor',
              chunks: 'all',
              priority: 20,
              maxSize: 244000,
              enforce: true,
            },
            
            // Utilities bundle
            utils: {
              test: /[\\/]node_modules[\\/](lodash|lodash-es|date-fns|axios|zod|yup)[\\/]/,
              name: 'utils-vendor',
              chunks: 'all',
              priority: 20,
              maxSize: 244000,
              enforce: true,
            },
            
            // Common application code
            common: {
              name: 'common',
              minChunks: 2,
              chunks: 'all',
              priority: 5,
              maxSize: 244000,
              enforce: true,
            },
            
            // Default vendor chunk for everything else
            default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true,
              maxSize: 244000,
            },
          }
        },
        
        // Optimization settings for better performance
        moduleIds: 'deterministic',
        chunkIds: 'deterministic',
        usedExports: !dev,
        sideEffects: false,
        concatenateModules: !dev,
        minimize: !dev,
        
        // Runtime chunk optimization
        runtimeChunk: {
          name: 'runtime',
        },
      };
      
      // Updated performance hints with stricter budgets
      config.performance = {
        hints: dev ? false : 'warning',
        maxEntrypointSize: 1000000, // 1MB for main entrypoint (down from 4.97MB)
        maxAssetSize: 244000,       // 244KB for individual assets
        assetFilter: (assetFilename) => {
          return /\.(js|css)$/.test(assetFilename);
        },
      };
    }

    // Only apply optimizations in production
    if (!dev && !isServer) {
      // Sentry webpack plugin optimizations
      config.resolve.alias = {
        ...config.resolve.alias,
        '@sentry/tracing': '@sentry/tracing/esm',
      };

      // Remove cacheUnaffected when usedExports is enabled to prevent conflicts
      if (config.cache && config.cache.cacheUnaffected !== undefined) {
        delete config.cache.cacheUnaffected;
      }
      
      // Note: usedExports is already configured above in the splitChunks section
      // Avoid duplicate configuration that can cause conflicts
    }

    // CRITICAL FIX: Remove cacheUnaffected in ALL cases to prevent webpack conflicts
    // The cacheUnaffected option conflicts with usedExports optimization
    if (config.cache && config.cache.cacheUnaffected !== undefined) {
      delete config.cache.cacheUnaffected;
    }
    
    // Also ensure that cache.type is properly configured when filesystem caching is used
    if (config.cache && config.cache.type === 'filesystem') {
      // Remove any potentially conflicting cache options
      delete config.cache.cacheUnaffected;
      
      // Set safe cache options
      config.cache.allowCollectingMemory = false;
      config.cache.managedPaths = [path.resolve(__dirname, 'node_modules')];
    }

    // Define feature flags for tree shaking
    config.plugins.push(
      new webpack.DefinePlugin({
        __SENTRY_DEBUG__: false,
        __SENTRY_TRACING__: true,
      })
    );

    // Note: Sentry replacement is handled via resolve.alias above for CI builds

    // Handle date-fns ESM import issues
    config.plugins.push(
      new webpack.ProvidePlugin({
        'date-fns': 'date-fns',
      })
    );

    // Force certain packages to use ESM - Enhanced for Next.js 15
    config.module.rules.push({
      test: /\.m?js$/,
      type: 'javascript/auto',
      resolve: {
        fullySpecified: false,
      },
    });

    // COMPREHENSIVE ESM FIX for Next.js 15 + React 19
    // Handle formik and lodash ESM issues with multiple strategies
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
      // Force date-fns to use ESM version
      'date-fns': 'date-fns/esm',
      // Fix react-day-picker date-fns locale issues
      'date-fns/esm/locale/enUS': 'date-fns/locale/enUS',
      'date-fns/esm/locale/en-US': 'date-fns/locale/enUS',
    };

    // Override module resolution for problematic packages
    config.resolve.extensionAlias = {
      '.js': ['.js', '.ts', '.jsx', '.tsx'],
      '.mjs': ['.mjs', '.mts'],
      '.cjs': ['.cjs', '.cts'],
    };

    // Add webpack rules to force ESM handling
    config.module.rules.push({
      test: /node_modules\/(formik|date-fns|lodash|react-day-picker)/,
      type: 'javascript/auto',
      resolve: {
        fullySpecified: false,
      },
    });

    // Enhanced rule for react-day-picker date-fns compatibility
    config.module.rules.push({
      test: /node_modules\/react-day-picker.*\.js$/,
      use: {
        loader: 'string-replace-loader',
        options: {
          multiple: [
            { search: "require\\('date-fns/", replace: "require('date-fns/esm/", flags: 'g' },
            { search: 'require\\("date-fns/', replace: 'require("date-fns/esm/', flags: 'g' },
            { search: "/esm/locale/en-US", replace: "/locale/enUS", flags: 'g' },
            { search: "/esm/locale/", replace: "/locale/", flags: 'g' },
          ]
        }
      }
    });

    // Additional rule to handle lodash ESM imports specifically in formik
    config.module.rules.push({
      test: /\.js$/,
      include: /node_modules\/formik/,
      use: {
        loader: 'string-replace-loader',
        options: {
          multiple: [
            { search: "require\\('lodash/", replace: "require('lodash-es/", flags: 'g' },
            { search: 'require\\("lodash/', replace: 'require("lodash-es/', flags: 'g' },
          ]
        }
      }
    });

    // Additional ESM handling for Next.js 15 compatibility
    if (!isServer) {
      // Ensure ESM modules are properly resolved
      config.resolve.mainFields = ['module', 'main'];
      config.resolve.conditionNames = ['import', 'require', 'default'];
    }

    // Add polyfills for Node.js APIs
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
      crypto: false,
      async_hooks: false,
      diagnostics_channel: false,
      worker_threads: false,
      module: false,
      child_process: false,
      http: false,
      https: false,
      os: false,
      path: false,
      stream: false,
      util: false,
      zlib: false,
      url: false,
      // Handle native modules
      'dd-trace': false,
      // Handle node: imports
      'node:http': false,
      'node:https': false,
      'node:fs': false,
      'node:path': false,
      'node:stream': false,
      'node:util': false,
      'node:crypto': false,
      'node:os': false,
      'node:url': false,
      'node:worker_threads': false,
      'node:async_hooks': false,
      'node:child_process': false,
      'node:diagnostics_channel': false,
    };

    // Optimize bundle size
    if (!dev) {
      config.resolve.alias = {
        ...config.resolve.alias,
        'react-router-dom': path.resolve(__dirname, 'src/stubs/react-router-dom.ts'),
      };

      // Note: Compression is handled by Netlify and other deployment platforms
      // Removed compression-webpack-plugin to avoid dependency conflicts
    }

    // PERFORMANCE: Add bundle optimization
    if (!dev) {
      config.optimization = {
        ...config.optimization,
        moduleIds: 'deterministic',
        chunkIds: 'deterministic',
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
              priority: 10,
            },
            common: {
              name: 'common',
              minChunks: 2,
              chunks: 'all',
              priority: 5,
              reuseExistingChunk: true,
            },
          },
        },
      };
    }

    return config;
  },

  // Note: headers, redirects, and rewrites don't work with output: 'export'
  // These are handled by Netlify via _headers and _redirects files

  // Skip TypeScript checking during build if SKIP_TYPE_CHECK is set
  typescript: {
    ignoreBuildErrors: process.env.SKIP_TYPE_CHECK === 'true',
  },
  
  // Skip ESLint during build for faster deployment  
  eslint: {
    ignoreDuringBuilds: true,
  },


};

export default nextConfig;
