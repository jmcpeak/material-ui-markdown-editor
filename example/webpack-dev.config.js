const path = require('path');

const srcPath = path.join(__dirname, 'src');
const buildPath = path.join(__dirname, 'dist');

console.log(srcPath);
console.log('------', buildPath);

const config = {
  entry: path.join(srcPath, 'index.js'),
  output: {
    path: buildPath,
    filename: 'bundle.js'
  },
  devServer: {
    hot: false,
    inline: true,
    port: 3000,
    contentBase: buildPath,
  },
  devtool: 'source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader!css-loader'
          }
        ]
      }
    ]
  }
}

module.exports = config;