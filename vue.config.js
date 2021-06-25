const path = require('path');
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/TestTask/'
    : '/',

  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/')
      }
    }
  }
}
