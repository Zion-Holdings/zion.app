const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	optimizeFonts: false,
	
	// Performance optimizations
	experimental: {
		optimizeCss: true,
		scrollRestoration: true,
		legacyBrowsers: false,
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
		minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
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
	
	// Compiler optimizations
	compiler: {
		removeConsole: process.env.NODE_ENV === 'production',
	},
	
	// Output configuration
	output: 'standalone',
	
	// Trailing slash for better SEO
	trailingSlash: false,
	
	// Powered by header removal
	poweredByHeader: false,
};

module.exports = nextConfig;
