import withTMInit from 'next-transpile-modules';

const withTM = withTMInit([]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default withTM(nextConfig);
