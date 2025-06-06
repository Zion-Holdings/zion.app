import transpileModules from 'next-plugin-transpile-modules';

const withTM = transpileModules([]);

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withTM(nextConfig);
