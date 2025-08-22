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
	rewrites: async () => {
		return [
			{ source: '/edge-computing-orchestration', destination: '/edge-computing-orchestration-platform' },
			{ source: '/quantum-secure-cloud', destination: '/quantum-secure-cloud-infrastructure' },
			{ source: '/managed-postgres-ha', destination: '/services/managed-postgres-ha' },
			{ source: '/it-asset-discovery-agent', destination: '/services/it-asset-discovery-agent' }
		];
	}
};

module.exports = nextConfig;
