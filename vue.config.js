const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  configureWebpack: {
    externals: {
      qc: 'QC' // 告诉 Webpack import qc from 'qc' 实际上用的是 window.QC
    }
  },
  transpileDependencies: true,
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.join(__dirname, './src/assets/styles/variables.less'),
        path.join(__dirname, './src/assets/styles/mixins.less')
      ]
    }
  },
  chainWebpack: config => {
    // 使用 allowedHosts 来代替 disableHostCheck
    config.devServer.set('allowedHosts', 'all') // 允许所有主机访问
    // 或者指定特定的主机
    // config.devServer.set('allowedHosts', ['your-host.com']);
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://apipc-xiaotuxian-front.itheima.net', // 目标服务器地址
        changeOrigin: true, // 改变请求的源头
        pathRewrite: { '^/api': '' } // 路径重写
      }
    }
  }
})
