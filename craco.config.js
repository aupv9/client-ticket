// const webpack = require('webpack');

// craco.config.js
module.exports = {
    style: {
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
          // new webpack.ProvidePlugin({
          //   $: 'jquery',
          //   jQuery: 'jquery',
          //   'window.jQuery': 'jquery'
          // }),
        ],
      },
    },
  }