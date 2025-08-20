const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	optimizeFonts: false,
	compiler: {
		removeConsole: process.env.NODE_ENV === 'production',
	},
	images: {
		domains: [],
		formats: ['image/webp', 'image/avif'],
	},
	headers: async () => {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'X-Content-Type-Options',
						value: 'nosniff',
					},
					{
						key: 'X-Frame-Options',
						value: 'DENY',
					},
					{
						key: 'X-XSS-Protection',
						value: '1; mode=block',
					},
				],
			},
		];
	},
};

module.exports = nextConfig;
