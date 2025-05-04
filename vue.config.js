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
  }
})
