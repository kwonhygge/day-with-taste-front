/* eslint-disable @typescript-eslint/no-var-requires */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  target: 'serverless',
  env: {
    NEXT_PUBLIC_KAKAO_KEY: process.env.NEXT_PUBLIC_KAKAO_KEY,
  },

  webpack(conf) {
    conf.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  removeRasterImages: false,
                  removeStyleElement: false,
                  removeUnknownsAndDefaults: false,
                },
              ],
            },
          },
        },
      ],
    });

    return conf;
  },
});
