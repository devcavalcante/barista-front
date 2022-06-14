import { createProxyMiddleware } from 'http-proxy-middleware';

module.exports = function(app) {
  app.use('/',
    createProxyMiddleware({
      target: 'https://barista-backend.herokuapp.com',
      secure: false,
      changeOrigin: true,
    })
  );
};