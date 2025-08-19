const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	output: 'standalone',
	trailingSlash: true,
	distDir: '.next',
	generateBuildId: async () => {
		return 'build-' + Date.now()
	}
};

module.exports = nextConfig;
