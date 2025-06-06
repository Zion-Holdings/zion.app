import withTMInit from 'next-transpile-modules';

const withTM = withTMInit([]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

export default withTM(nextConfig);
