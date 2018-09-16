const path = require('path');

const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: './static/index.html',
  filename: './index.html'
});

const projectDir = path.resolve(__dirname);

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(s*)css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
    ]
  },
  plugins: [htmlWebpackPlugin],
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
  resolve: {
    modules: ['node_modules', projectDir],
    extensions: ['.webpack.js', '.web.js', '.js', '.jsx', '.css', '.scss', '.css.scss', 'config.js'],
    alias: {
      actions: path.join(__dirname, './src/actions'),
      components: path.join(__dirname, './src/components'),
      constants: path.join(__dirname, './src/constants'),
      containers: path.join(__dirname, './src/containers'),
      decorators: path.join(__dirname, './src/decorators'),
      hocs: path.join(__dirname, './src/hocs'),
      fonts: path.join(__dirname, './fonts'),
      images: path.join(__dirname, './images'),
      middlewares: path.join(__dirname, './src/middlewares'),
      reducers: path.join(__dirname, './src/reducers'),
      selectors: path.join(__dirname, './src/selectors'),
      services: path.join(__dirname, './src/services'),
      style: path.join(__dirname, './style'),
      utils: path.join(__dirname, './src/utils'),
    },
  },
};
