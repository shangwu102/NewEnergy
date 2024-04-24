const vueConfig = {
    lintOnSave: false,
    devServer: {
      port:9000,
        proxy: {
            '/api': {
                target: 'http://localhost:8080/',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/'
                }
            } 
        }
    }
  }
  
  
  module.exports = vueConfig