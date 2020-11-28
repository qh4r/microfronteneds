const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8082
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'cart',
      filename: 'remoteEntry.js',
      exposes: {
        "./CartView": "./src/bootstrap",
      },
      shared: {
        // forces exact version (even if majors match)
        'faker': {
          singleton: true,
        }
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    })
  ]
}
