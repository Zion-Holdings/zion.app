const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	optimizeFonts: false,
	poweredByHeader: false,
	compress: true,
	generateEtags: false,
	experimental: {
		optimizeCss: true,
		scrollRestoration: true
	},
	images: {
		domains: [],
		formats: ['image/webp', 'image/avif'],
		minimumCacheTTL: 60,
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
	},
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
				},
				{
					key: 'Referrer-Policy',
					value: 'strict-origin-when-cross-origin'
				}
			]
		}
	]
};

module.exports = nextConfig;
