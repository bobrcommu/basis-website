/** @type {import('next').NextConfig} */
const nextConfig = {
  // Output configuration for static export
  output: 'export',
  
  // Set unoptimized images for static export compatibility
  images: {
    unoptimized: true,
    domains: ['evere.io'],
  },
  
  // Trailing slash configuration
  trailingSlash: true,
  
  // Skip linting during builds
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Skip TS errors during builds
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Environment variables
  env: {
    LOCIZE_PROJECT_ID: '578277be-b3b6-44f6-ab4f-efefdf5adaeb',
    LOCIZE_API_KEY: '6437ec51-6944-49a4-8b70-05f7cdf07093',
    NEXT_PUBLIC_LOCIZE_VERSION: 'latest'
  },
};

module.exports = nextConfig;
