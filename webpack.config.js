const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');

const config = {
  entry: {
    app: './public/index.js',
    database: './public/db.js',
    routes: './routes/api.js',
  },
  output: {
    path: __dirname + './public/dist',
    filename: '[name].bundle.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new WebpackPwaManifest({
      fingerprints: false,
      name: 'Know Your Budget',
      short_name: 'Budget App',
      description: 'An application that allows you to view you budget online as wells as offline.',
      background_color: '#01579b',
      theme_color: '#ffffff',
      'theme-color': '#ffffff',
      start_url: '/',
      icons: [
        {
          src: path.resolve('public/icons/icon-192x192.png'),
          sizes: [192, 512],
          destination: path.join('icons'),
        },
      ],
    }),
  ],
};


module.exports = config;