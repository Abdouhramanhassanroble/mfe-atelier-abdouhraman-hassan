const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devServer: { port: 3000 },
  entry: './src/index.js',
  output: { publicPath: 'auto' },
  plugins: [
    new ModuleFederationPlugin({
      name: 'shell',
      remotes: { header: 'header@http://localhost:3001/remoteEntry.js' },
    }),
    new HtmlWebpackPlugin({ template: './public/index.html' }),
  ],
};
