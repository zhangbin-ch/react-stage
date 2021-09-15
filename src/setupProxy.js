const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(createProxyMiddleware('/gis', {
        target : 'http://39.96.17.40:8619',
        changeOrigin : true,
    }));
};