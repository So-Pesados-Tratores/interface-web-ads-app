/*eslint no-undef: "off"*/

const withPWA = require("next-pwa");

const nextConfig = {
  env: {
    SITE_DOMAIN: process.env.SITE_DOMAIN || "https://sopesadostratores.com/",
  },

  pwa: {
    dest: "public",
  },

  webpack: (config, { isServer }) => {
    if (isServer) {
      require("./src/utils/generateSiteMap");
    }

    return config;
  },
};

module.exports = withPWA(nextConfig);
