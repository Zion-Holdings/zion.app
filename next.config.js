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

module.exports = nextConfig;
