/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['@supabase/supabase-js'],
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com', 'localhost'],
  },
};

module.exports = nextConfig;