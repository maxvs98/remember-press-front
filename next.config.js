const webpack = require("webpack");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Force this module to use 3.0.0 version (see package.json), because 5.2.0 is not compatible
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.resolve.alias["@aws-crypto/util$"] = "aws-crypto-util-workaround";
    }
    return config;
  },
  images: {
    domains: ["static01.eu", "remember-press.s3.eu-north-1.amazonaws.com"],
    minimumCacheTTL: 24 * 3600,
    unoptimized: true,
  },
};

module.exports = nextConfig;
