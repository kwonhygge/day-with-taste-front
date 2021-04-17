/* eslint-disable @typescript-eslint/no-var-requires */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
    target: 'serverless',
    env: {
        kakaoKey: 'f8c9abf3ec15c3b736dfff525b062713',
    },

    webpack(conf) {
        conf.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {
                        svgoConfig: {
                            plugins: [{
                                removeRasterImages: false,
                                removeStyleElement: false,
                                removeUnknownsAndDefaults: false,
                            }],
                        },
                    },
                },
            ],
        });

        return conf;
    },
});
