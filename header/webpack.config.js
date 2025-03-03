const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devServer: { port: 3001 },
  entry: './src/index.js',
  output: { publicPath: 'auto', libraryTarget: "commonjs2" }, // Ajout de `libraryTarget`
  plugins: [
    new ModuleFederationPlugin({
      name: 'header',
      filename: 'remoteEntry.js',
      exposes: { './Header': './src/Header.js' },
    }),
    new HtmlWebpackPlugin({ template: './public/index.html' }),
  ],
};
