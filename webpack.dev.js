const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const devConfig = {
  mode: 'development',
  /**
   * 设置源码和打包后文件的映射关系,
   * cheap-inline-source-map只精确到行,不包括第三方
   * cheap-module-inline-source-map包含第三方
   * 最佳实践：development 使用 cheap-module-eval-source-map
   * production 使用 cheap-module-source-map
   */
  devtool: 'cheap-module-eval-source-map',

  devServer: {
    contentBase: './dist',
    open: true,
    port: 1024,
    // hot module replacement
    hot: true,
    // hotOnly: true,
  },

  plugins: [new webpack.HotModuleReplacementPlugin()],
};
module.exports = merge(commonConfig, devConfig);
