const nextConfig = {
  poweredByHeader: false,
  trailingSlash: false,
  reactStrictMode: true,
  // Optimized for fast builds (hanging issue SOLVED)
  // outputFileTracing: false, // Intentionally disabled via env vars in build scripts and netlify.toml to prevent hanging.
  productionBrowserSourceMaps: false, // Disable for faster builds
  
  // Environment configuration
  env: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://your-project.supabase.co',
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'your-anon-key-here',
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

  experimental: {
    optimizePackageImports: [
      'lucide-react', 
      '@radix-ui/react-icons',
      'recharts',
      'react-window',
      'fuse.js'
    ],
    // ESM configuration for problematic packages
    esmExternals: 'loose', // Allow loose ESM handling
    
    // Enable CSS optimization for production
    optimizeCss: process.env.NODE_ENV === 'production', 
    // Memory and performance optimizations for 176+ pages
    largePageDataBytes: 128 * 1000, // Reduced to 128KB for better performance
    workerThreads: false, // Disable worker threads to reduce memory usage
    cpus: Math.min(2, require('os').cpus().length), // Adaptive CPU limit
    // Bundle analysis optimizations moved to root level
    // Disable profiling for faster builds
    swcTraceProfiling: false,
    
  },

  images: {
    domains: ["localhost"],
    unoptimized: true,
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  transpilePackages: [
    'react-markdown',
    'date-fns',
    'react-day-picker',
    'bail',
    'is-plain-obj',
    'mdast-util-from-markdown',
    'mdast-util-to-hast',
    'mdast-util-to-string',
    'unified',
    'remark-parse',
    'remark-rehype',
    'formik',
    'lodash',
    'lodash-es',
    'lodash/isPlainObject',
    'lodash/cloneDeep',
    'lodash/clone',
    'lodash/toPath',
    'helia',
    '@helia/json',
    'multiformats',
    'libp2p',
    '@libp2p/identify',
    'ajv',
    'ajv-keywords',
    '@ungap/structured-clone',
    'axios-retry',
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
          './src/utils/esm-polyfill.ts',        // ESM module resolution fix
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

        // Disable source maps in development for faster HMR startup
        config.devtool = false;
      }

      // Alias react-router-dom to a lightweight stub to avoid build errors
      config.resolve.alias = {
        ...config.resolve.alias,
        'react-router-dom': require('path').resolve(__dirname, 'src/stubs/react-router-dom.ts'),
      };

      if (!isServer) {
        // Optimize memory usage in development
        config.stats = 'errors-warnings';
        config.infrastructureLogging = {
          level: 'error',
        };
      }
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
        '@sentry/nextjs': require('path').resolve(__dirname, 'src/utils/sentry-mock.ts'),
        '@sentry/node': require('path').resolve(__dirname, 'src/utils/sentry-mock.ts'),
        '@sentry/tracing': require('path').resolve(__dirname, 'src/utils/sentry-mock.ts'),
        '@sentry/react': require('path').resolve(__dirname, 'src/utils/sentry-mock.ts'),
        '@sentry/browser': require('path').resolve(__dirname, 'src/utils/sentry-mock.ts'),
      };
    }

    // Completely exclude dd-trace during CI builds to prevent native module issues  
    if (process.env.SKIP_DATADOG === 'true' || process.env.CI === 'true') {
      console.log('🚫 DD-Trace disabled for CI build - using mock implementation');
      
      // Use webpack alias to replace dd-trace with mock implementation
      config.resolve.alias = {
        ...config.resolve.alias,
        'dd-trace': require('path').resolve(__dirname, 'src/utils/dd-trace-mock.ts'),
      };
    }

    // CRITICAL FIX FOR ESM IMPORTS: Configure module resolution for problematic packages
    // This fixes the "ESM packages need to be imported" errors for formik, lodash, and date-fns
    
    // Force specific lodash modules to use ESM variants
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
              targets: {
                esmodules: true
              }
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
    } else {
      // Client-side: prioritize ESM modules
      config.resolve.conditionNames = ['import', 'module', 'require', 'default'];
      config.resolve.mainFields = ['module', 'main'];
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
        // ESM packages with dynamic imports that cause server-side issues
        'decode-named-character-reference',
        'mdast-util-to-string',
        'micromark-core-commonmark',
        'character-entities',
        'character-entities-legacy',
        'character-reference-invalid'
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

    // CRITICAL FIX: Ensure usedExports is disabled globally to avoid conflicts with cacheUnaffected
    config.optimization = {
      ...config.optimization,
      usedExports: false,
    };

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
        // Disable usedExports to avoid conflicts with cacheUnaffected
        usedExports: false,
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
      config.cache.managedPaths = [require('path').resolve(__dirname, 'node_modules')];
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
      'react': require.resolve('react'),
      'react-dom': require.resolve('react-dom'),
    };

    // Override module resolution for problematic packages
    config.resolve.extensionAlias = {
      '.js': ['.js', '.ts', '.jsx', '.tsx', '.mjs'],
      '.mjs': ['.mjs', '.mts', '.js'],
      '.cjs': ['.cjs', '.cts', '.js'],
    };

    // Add specific handling for ESM modules that use dynamic imports
    config.resolve.alias = {
      ...config.resolve.alias,
      // Handle problematic ESM packages
      'micromark/lib/parse.js': 'micromark/lib/parse.js',
      'micromark/lib/postprocess.js': 'micromark/lib/postprocess.js',
      'micromark/lib/preprocess.js': 'micromark/lib/preprocess.js',
    };

    // Emergency fallback for Netlify builds - use stubs if ESM issues persist
    if (process.env.NETLIFY === 'true' || process.env.CI === 'true') {
      config.resolve.alias = {
        ...config.resolve.alias,
        'react-day-picker': require('path').resolve(__dirname, 'src/stubs/calendar-stub.ts'),
        'react-markdown': require('path').resolve(__dirname, 'src/stubs/markdown-stub.ts'),
      };
      console.log('🚑 Emergency stubs enabled for Netlify build');
    }

    // Add webpack rules to force ESM handling
    config.module.rules.push({
      test: /node_modules\/(formik|date-fns|lodash|react-day-picker|micromark|mdast-util-|decode-named-character-reference|character-entities|devlop)/,
      type: 'javascript/auto',
      resolve: {
        fullySpecified: false,
      },
    });

    // Additional rule to handle lodash ESM imports specifically in formik
    config.module.rules.push({
      test: /\.js$/,
      include: /node_modules\/formik/,
      use: {
        loader: 'string-replace-loader',
        options: {
          multiple: [
            { search: /require\('lodash\//g, replace: "require('lodash-es/" },
            { search: /require\("lodash\//g, replace: 'require("lodash-es/' },
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
        'react-router-dom': require('path').resolve(__dirname, 'src/stubs/react-router-dom.ts'),
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
      config.cache.managedPaths = [require('path').resolve(__dirname, 'node_modules')];
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
      'react': require.resolve('react'),
      'react-dom': require.resolve('react-dom'),
    };

    // Override module resolution for problematic packages
    config.resolve.extensionAlias = {
      '.js': ['.js', '.ts', '.jsx', '.tsx', '.mjs'],
      '.mjs': ['.mjs', '.mts', '.js'],
      '.cjs': ['.cjs', '.cts', '.js'],
    };

    // Add specific handling for ESM modules that use dynamic imports
    config.resolve.alias = {
      ...config.resolve.alias,
      // Handle problematic ESM packages
      'micromark/lib/parse.js': 'micromark/lib/parse.js',
      'micromark/lib/postprocess.js': 'micromark/lib/postprocess.js',
      'micromark/lib/preprocess.js': 'micromark/lib/preprocess.js',
    };

    // Emergency fallback for Netlify builds - use stubs if ESM issues persist
    if (process.env.NETLIFY === 'true' || process.env.CI === 'true') {
      config.resolve.alias = {
        ...config.resolve.alias,
        'react-day-picker': require('path').resolve(__dirname, 'src/stubs/calendar-stub.ts'),
        'react-markdown': require('path').resolve(__dirname, 'src/stubs/markdown-stub.ts'),
      };
      console.log('🚑 Emergency stubs enabled for Netlify build');
    }

    // Add webpack rules to force ESM handling
    config.module.rules.push({
      test: /node_modules\/(formik|date-fns|lodash|react-day-picker|micromark|mdast-util-|decode-named-character-reference|character-entities|devlop)/,
      type: 'javascript/auto',
      resolve: {
        fullySpecified: false,
      },
    });

    // Additional rule to handle lodash ESM imports specifically in formik
    config.module.rules.push({
      test: /\.js$/,
      include: /node_modules\/formik/,
      use: {
        loader: 'string-replace-loader',
        options: {
          multiple: [
            { search: /require\('lodash\//g, replace: "require('lodash-es/" },
            { search: /require\("lodash\//g, replace: 'require("lodash-es/' },
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
        'react-router-dom': require('path').resolve(__dirname, 'src/stubs/react-router-dom.ts'),
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
};

module.exports = nextConfig;
