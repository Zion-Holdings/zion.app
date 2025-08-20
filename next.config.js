const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	optimizeFonts: false,
	// Enhanced performance settings
	compiler: {
		removeConsole: process.env.NODE_ENV === 'production',
	},
	// Security headers
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'X-Frame-Options',
						value: 'DENY',
					},
					{
						key: 'X-Content-Type-Options',
						value: 'nosniff',
					},
					{
						key: 'Referrer-Policy',
						value: 'origin-when-cross-origin',
					},
					{
						key: 'Permissions-Policy',
						value: 'camera=(), microphone=(), geolocation=()',
					},
				],
			},
		];
	},
	// Image optimization
	images: {
		domains: [],
		formats: ['image/webp', 'image/avif'],
	},
	// Webpack optimizations
	webpack: (config, { dev, isServer }) => {
		// Production optimizations
		if (!dev && !isServer) {
			config.optimization.splitChunks = {
				chunks: 'all',
				cacheGroups: {
					vendor: {
						test: /[\\/]node_modules[\\/]/,
						name: 'vendors',
						chunks: 'all',
					},
				},
			};
		}
		return config;
	},
};

module.exports = nextConfig;
