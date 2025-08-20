const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	optimizeFonts: false,
	poweredByHeader: false,
	compress: true,
	generateEtags: true,
	headers: async () => [
		{
			source: '/(.*)',
			headers: [
				{
					key: 'X-Content-Type-Options',
					value: 'nosniff'
				},
				{
					key: 'X-Frame-Options',
					value: 'DENY'
				},
				{
					key: 'X-XSS-Protection',
					value: '1; mode=block'
				}
			]
		}
	]
};

module.exports = nextConfig;
