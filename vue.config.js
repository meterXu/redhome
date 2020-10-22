const CompressionPlugin = require('compression-webpack-plugin')


// vue.config.js
module.exports = {
  lintOnSave: undefined,
  productionSourceMap: true,

  // 打包app时放开该配置
  publicPath: './',
  configureWebpack: config => {
    // 生产环境取消 console.log
    if (process.env.NODE_ENV === 'production') {
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
    }
  },
  chainWebpack: (config) => {
    // 生产环境，开启js\css压缩
    if (process.env.NODE_ENV === 'production') {
        config.plugin('compressionPlugin').use(new CompressionPlugin({
          // eslint-disable-next-line no-useless-escape
          test: /\.js$|\.css|\.less/, // 匹配文件名
          threshold: 10240, // 对超过10k的数据压缩
          deleteOriginalAssets: false // 不删除源文件
        }))
    }

    // 配置 webpack 识别 markdown 为普通的文件
    config.module
      .rule('markdown')
      .test(/\.md$/)
      .use()
      .loader('file-loader')
      .end()
  }
}
