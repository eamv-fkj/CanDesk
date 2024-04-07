const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development', // or 'production'
  entry: path.resolve(__dirname, 'src/index-test.js'),
  output: {
    path: path.resolve(__dirname, 'dist-test'),
    filename: 'candesk.js',
    clean: true
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'src/assets', to: 'assets' },
        { from: 'src/styles', to: 'styles' },
        { from: 'src/index-test.html', to: 'index.html' }
      ]
    })
  ]
}