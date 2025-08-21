const nextConfig = {
	reactStrictMode: true,
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
			{ source: '/ai-energy-management', destination: '/services/ai-energy-management', permanent: true },
			{ source: '/ai-legal-analysis', destination: '/services/ai-legal-analysis', permanent: true },
			{ source: '/ai-real-estate', destination: '/services/ai-real-estate-analytics', permanent: true },
			{ source: '/quantum-ai-supercomputer', destination: '/services/quantum-ai-supercomputer', permanent: true },
			{ source: '/space-mission-control', destination: '/services/space-mission-control', permanent: true },
			{ source: '/quantum-ai-drug-discovery', destination: '/services/quantum-ai-drug-discovery', permanent: true }
		];
	}
};

module.exports = nextConfig;
