const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssLoader = {
  loader: MiniCssExtractPlugin.loader,
  options: {
    // only enable hot in development
    hmr: process.env.NODE_ENV === 'development',
    // if hmr does not work, this is a forceful method.
    // reloadAll: true,
  },
}
console.log(MiniCssLoader)
module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    // filename: 'bundle.js',
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    path: path.resolve(__dirname, 'dist'),
    // 设置打包后js文件引入的前缀
    // publicPath: 'http://cdn.com.cn',
  },
  module: {
    rules: [
      {
        test: /\.(jpg|gif|png)$/,
        use: {
          // loader: 'file-loader',
          // url-loader可以把静态图片打包成base64放到打包后的js文件中
          loader: 'url-loader',
          options: {
            // 配置打包后的图片名字、hash值和后缀名
            name: '[name]_[hash].[ext]',
            // 配置打包后图片存放的目录
            outputPath: 'images/',
            // 大于limit的值，url-loader则单独打包不转化成base64
            limit: 2048,
          },
        },
      },
      {
        test: /\.(eot|ttf|svg|woff)$/,
        use: {
          loader: 'file-loader',
        },
      },
      {
        test: /\.scss$/,
        /**
         * css-loader会分析css文件的彼此依赖
         * style-loader会根据css-loader分析生成的文件，挂在到html的style标签中
         */
        use: [
          MiniCssLoader,
          {
            loader: 'css-loader',
            options: {
              // scss中引入的scss文件引入之前，走下面2个loader
              importLoaders: 2,
              // 开启css modules
              // modules: true,
            },
          },
          'sass-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssLoader,
          'css-loader',
          'postcss-loader'
        ],
      },
      // 配置babel
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        // options配置内容可以转移至.babelrc中
        options: {
          plugins: [['import', { libraryName: 'antd', style: 'css' }]],
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  // 配置code-spliting
  optimization: {
    // 开发环境时，配置treeshaking,production时可以删掉
    usedExports: true,

    splitChunks: {
      chunks: 'all',
    },
  },
};
