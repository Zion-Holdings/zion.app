/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	// Optimize images
	images: {
		unoptimized: true,
	},
	// Optimize bundle
	compiler: {
		removeConsole: process.env.NODE_ENV === 'production',
	},
};

  // Enhanced compress
  compress: true,

  // Enhanced devIndicators
  devIndicators: {
    buildActivity: true,
    buildActivityPosition: 'bottom-right',
  },

  // Enhanced onDemandEntries
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },

  // Enhanced pageExtensions
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],

  // Enhanced typescript
  typescript: {
    ignoreBuildErrors: false,
  },

  // Enhanced eslint
  eslint: {
    ignoreDuringBuilds: false,
  },

  // Enhanced swcMinify
  swcMinify: true,

  // Enhanced modularizeImports
  modularizeImports: {
    'lucide-react': {
      transform: 'lucide-react/dist/esm/icons/{{kebabCase}}',
    },
  },
};
