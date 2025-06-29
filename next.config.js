import path from 'path';
import { fileURLToPath } from 'url';

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
  swcMinify: true,
  // Optimized for fast builds (hanging issue SOLVED)
  // outputFileTracing: false, // Intentionally disabled via env vars in build scripts and netlify.toml to prevent hanging.
  productionBrowserSourceMaps: false, // Disable for faster builds
  
  // Environment configuration
  env: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },

  experimental: {
    serverComponentsExternalPackages: ['@prisma/client'],
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
    outputFileTracingExcludes: {
      '*': [
        'node_modules/@swc/core-linux-x64-gnu',
        'node_modules/@swc/core-linux-x64-musl',
        'node_modules/@esbuild/linux-x64',
      ],
    },
    // Disable CSS optimization for faster builds with many pages
    optimizeCss: false, 
    esmExternals: true,
              // Memory and performance optimizations for 176+ pages
    largePageDataBytes: 256 * 1000, // 256KB threshold for large pages
    workerThreads: false, // Disable worker threads to reduce memory usage
    cpus: 2, // Limit to 2 CPUs for memory management
    // CRITICAL: Completely disable turbotrace to prevent hanging
    // turbotrace: false, // Disabled via NEXT_DISABLE_TRACE_COLLECTION and NEXT_PRIVATE_OUTPUT_TRACE in build scripts
    // Netlify-specific optimizations
    swcTraceProfiling: false, // Disable profiling for faster builds
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
  },

  transpilePackages: [
    'react-markdown',
    'date-fns',
    'helia',
    '@helia/json',
    'multiformats',
    'libp2p',
    '@libp2p/identify',
  ],

  webpack: (config, { dev, isServer, webpack }) => {
    // Fix EventEmitter memory leak by increasing max listeners
    // events.EventEmitter.defaultMaxListeners = 20; // Will be set by build script
    
    // Development optimizations to prevent memory leaks with 176+ pages
    if (dev && !isServer) {
      config.watchOptions = {
        ignored: /node_modules/,
        aggregateTimeout: 300,
        poll: false, // Use native file watching instead of polling
      };
      
      // Optimize memory usage in development
      config.stats = 'errors-warnings';
      config.infrastructureLogging = {
        level: 'error',
      };
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

    // Optimize caching to reduce "Serializing big strings" warnings
    if (config.cache && config.cache.type === 'filesystem') {
      config.cache.buildDependencies = {
        ...config.cache.buildDependencies,
        config: [__filename],
      };
      
      // Optimize cache serialization to reduce large string warnings
      config.cache.compression = 'gzip';
      config.cache.maxAge = 7 * 24 * 60 * 60 * 1000; // 7 days
      
      // Reduce cache store size to prevent large string serialization
      config.cache.maxMemoryGenerations = dev ? 2 : 5; // Further reduced for memory efficiency
      config.cache.maxGenerations = dev ? 3 : 8; // Limit total generations
      
      // Advanced cache optimization - simplified for compatibility
      config.cache.store = 'pack';
      config.cache.version = '1.0.1'; // Updated version
      
      // Additional optimizations to prevent large string serialization
      config.cache.profile = false; // Disable profiling to reduce memory usage
      config.cache.hashAlgorithm = 'md4'; // Faster hash algorithm
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

    // Alias React Router to a lightweight shim to avoid bundling the full library
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-router-dom': path.resolve(__dirname, './src/shims/react-router-dom.ts'),
    };

    // Simplified bundle optimization for large applications (176+ pages)
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        // Enhanced chunk splitting for better performance
        splitChunks: {
          chunks: 'all',
          minSize: 20000,
          maxSize: 200000, // Reduced from 250KB to 200KB for better loading
          maxAsyncRequests: 30, // Increased for better code splitting
          maxInitialRequests: 25, // Increased for better initial load
          cacheGroups: {
            default: false,
            vendors: false,
            
            // Framework chunk for React/Next.js (highest priority)
            framework: {
              chunks: 'all',
              name: 'framework',
              test: /[\\/]node_modules[\\/](react|react-dom|scheduler|next)[\\/]/,
              priority: 50,
              enforce: true,
              reuseExistingChunk: true,
            },
            
            // Heavy libraries chunk (separate from framework)
            heavy: {
              name: 'heavy-libs',
              test: /[\\/]node_modules[\\/](three|firebase|helia|@google\/model-viewer)[\\/]/,
              priority: 45,
              enforce: true,
              reuseExistingChunk: true,
            },
            
            // Chart and visualization libraries
            charts: {
              name: 'chart-libs',
              test: /[\\/]node_modules[\\/](recharts|d3|chart\.js)[\\/]/,
              priority: 40,
              enforce: true,
              reuseExistingChunk: true,
            },
            
            // UI libraries chunk
            ui: {
              name: 'ui-libs',
              test: /[\\/]node_modules[\\/](@radix-ui|lucide-react|clsx|class-variance-authority)[\\/]/,
              priority: 35,
              enforce: true,
              reuseExistingChunk: true,
            },
            
            // Date and utility libraries
            utils: {
              name: 'util-libs',
              test: /[\\/]node_modules[\\/](date-fns|lodash|fuse\.js|axios)[\\/]/,
              priority: 30,
              enforce: true,
              reuseExistingChunk: true,
            },
            
            // Crypto and blockchain libraries
            crypto: {
              name: 'crypto-libs',
              test: /[\\/]node_modules[\\/](ethers|@reown|web3)[\\/]/,
              priority: 28,
              enforce: true,
              reuseExistingChunk: true,
            },
            
            // Auth and validation libraries
            auth: {
              name: 'auth-libs',
              test: /[\\/]node_modules[\\/](next-auth|@supabase|yup|zod)[\\/]/,
              priority: 26,
              enforce: true,
              reuseExistingChunk: true,
            },
            
            // Markdown and content processing
            content: {
              name: 'content-libs',
              test: /[\\/]node_modules[\\/](react-markdown|rehype|remark)[\\/]/,
              priority: 24,
              enforce: true,
              reuseExistingChunk: true,
            },
            
            // Development tools (only in dev builds)
            devtools: {
              name: 'devtools',
              test: /[\\/]node_modules[\\/](@storybook|webpack-bundle-analyzer)[\\/]/,
              priority: 22,
              enforce: true,
              reuseExistingChunk: true,
              chunks: dev ? 'all' : 'async', // Only async in production
            },
            
            // General vendor libraries
            vendor: {
              chunks: 'all',
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              priority: 20,
              enforce: true,
              reuseExistingChunk: true,
              minChunks: 2, // Only if used by at least 2 modules
            },
            
            // Common application code
            common: {
              name: 'common',
              minChunks: 3, // Increased from 2 to reduce small chunks
              chunks: 'all',
              priority: 10,
              enforce: true,
              reuseExistingChunk: true,
            },
          },
        },
        
        // Enhanced optimization settings
        moduleIds: 'deterministic',
        chunkIds: 'deterministic',
        
        // Better tree shaking - safely configured to avoid webpack conflicts
        usedExports: !dev, // Enable only in production
        sideEffects: false, // Always false to enable tree shaking
        
        // Module concatenation for better performance
        concatenateModules: !dev, // Only in production
        
        // Minimize bundles in production
        minimize: !dev,
      };
      
      // Enhanced performance hints
      config.performance = {
        hints: dev ? false : 'warning',
        maxEntrypointSize: 400000, // 400KB for initial bundle
        maxAssetSize: 400000,
        assetFilter: (assetFilename) => {
          // Only check JS and CSS files
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
    };

    // Optimize bundle size
    if (!dev) {
      config.resolve.alias = {
        ...config.resolve.alias,
        'lodash': 'lodash-es',
      };

      // Note: Compression is handled by Netlify and other deployment platforms
      // Removed compression-webpack-plugin to avoid dependency conflicts
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
