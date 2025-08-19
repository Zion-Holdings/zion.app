const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	experimental: {
		appDir: false,
		serverComponentsExternalPackages: [],
	},
	output: 'standalone',
	trailingSlash: true,
	distDir: '.next',
	generateBuildId: async () => {
		return 'build-' + Date.now()
	}
};

module.exports = nextConfig;
