const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'https://lz93y7sr.api.sanity.io',
    changeOrigin: true,
    pathRewrite: { '^/api': '' },
    secure: false,
  },
];

module.exports = PROXY_CONFIG;