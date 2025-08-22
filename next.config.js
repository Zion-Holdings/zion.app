const nextConfig = {
	reactStrictMode: true,
	trailingSlash: true,
	output: 'export',
	images: {
		unoptimized: true
	},
	eslint: {
		ignoreDuringBuilds: true
	},
	experimental: {
		optimizePackageImports: ['lucide-react', 'framer-motion']
	}
};

module.exports = nextConfig;
