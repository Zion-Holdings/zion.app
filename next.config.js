const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	// Optimize images
	images: {
		unoptimized: true,
	},
	// Optimize bundle
	compiler: {
		removeConsole: process.env.NODE_ENV === 'production',
	},
};

module.exports = nextConfig;
