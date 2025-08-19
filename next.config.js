/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	// Ensure static export compatibility if used
	images: { unoptimized: true },
};

module.exports = nextConfig;

