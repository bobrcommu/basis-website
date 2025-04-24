const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: true,
});

module.exports = (nextConfig = {}) => {
  return withBundleAnalyzer(nextConfig);
}; 