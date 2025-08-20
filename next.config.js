const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	optimizeFonts: false,
	poweredByHeader: false,
	compress: true,
	generateEtags: false,
	experimental: {
		optimizeCss: true,
		scrollRestoration: true,
		legacyBrowsers: false
	},
	headers: async () => {
		return [
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
					},
					{
						key: 'Referrer-Policy',
						value: 'strict-origin-when-cross-origin'
					}
				]
			}
		];
	},
	webpack: (config, { dev, isServer }) => {
		// Optimize bundle size
		if (!dev && !isServer) {
			config.optimization.splitChunks = {
				chunks: 'all',
				cacheGroups: {
					vendor: {
						test: /[\\/]node_modules[\\/]/,
						name: 'vendors',
						chunks: 'all'
					}
				}
			};
		}
		
		return config;
	}
};

module.exports = nextConfig;
