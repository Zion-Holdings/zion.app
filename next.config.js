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
	}
};

module.exports = nextConfig;
