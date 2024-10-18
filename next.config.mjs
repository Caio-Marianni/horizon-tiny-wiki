/** @type {import('next').NextConfig} */
const nextConfig = {};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
module.exports = withBundleAnalyzer({
  // Configuração adicional...
});

export default nextConfig;
