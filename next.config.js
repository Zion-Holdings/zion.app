const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	optimizeFonts: false,
	
	// Performance optimizations
	experimental: {
		optimizeCss: true,
		scrollRestoration: true
	},
	
	// Security headers
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'X-Frame-Options',
						value: 'DENY'
					},
					{
						key: 'X-Content-Type-Options',
						value: 'nosniff'
					},
					{
						key: 'Referrer-Policy',
						value: 'origin-when-cross-origin'
					},
					{
						key: 'X-XSS-Protection',
						value: '1; mode=block'
					}
				]
			}
		];
	},
	
	// Image optimization
	images: {
		domains: [],
		formats: ['image/webp', 'image/avif'],
		minimumCacheTTL: 60,
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
	},
	
	// Compiler options
	compiler: {
		removeConsole: process.env.NODE_ENV === 'production'
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
						priority: 10,
						enforce: true
					}
				}
			};
		}
		
		return config;
	}
};

module.exports = nextConfig;
