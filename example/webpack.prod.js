const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const prodConfig = {
  mode: 'production',
  /**
   * 设置源码和打包后文件的映射关系,
   * cheap-inline-source-map只精确到行,不包括第三方
   * cheap-module-inline-source-map包含第三方
   * 最佳实践：development 使用 cheap-module-eval-source-map
   * production 使用 cheap-module-source-map
   */
  devtool: 'cheap-module-source-map',
  plugins: [new CleanWebpackPlugin()],
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})],
  },
};
module.exports = merge(prodConfig, commonConfig);
