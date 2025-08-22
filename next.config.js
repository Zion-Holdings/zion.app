const nextConfig = {
	reactStrictMode: true,
	trailingSlash: true,
	output: 'export',
	images: {
		unoptimized: true,
		formats: ['image/webp', 'image/avif'],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
	},
	eslint: {
		ignoreDuringBuilds: true
	},
	experimental: {
		optimizePackageImports: ['lucide-react', 'framer-motion'],
	},
	compiler: {
		removeConsole: process.env.NODE_ENV === 'production',
	},
	webpack: (config, { dev, isServer }) => {
		// Bundle analyzer in development
		if (dev && !isServer) {
			try {
				const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
				config.plugins.push(
					new BundleAnalyzerPlugin({
						analyzerMode: 'static',
						openAnalyzer: false,
					})
				);
			} catch (e) {
				// Bundle analyzer not available
			}
		}

		// Tree shaking optimization
		config.optimization = {
			...config.optimization,
			usedExports: true,
			sideEffects: false,
		};

		return config;
	},
};

module.exports = nextConfig;
