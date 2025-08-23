/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	poweredByHeader: false,
	trailingSlash: true,
	output: 'export',
	images: {
		unoptimized: true
	},
	eslint: {
		ignoreDuringBuilds: true
	},
	async redirects() {
		return [
			{ source: '/rag-evaluation-lab', destination: '/services/rag-evaluation-lab', permanent: true },
			{ source: '/soc2-compliance-automation', destination: '/services/soc2-compliance-automation', permanent: true },
			{ source: '/browser-automation-cloud', destination: '/services/browser-automation-cloud', permanent: true },
			{ source: '/secrets-rotation-automation', destination: '/services/secrets-rotation-automation', permanent: true },
			{ source: '/api-performance-testing', destination: '/services/api-performance-testing', permanent: true }
		];
	}
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
