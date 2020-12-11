const webpack = require('webpack')

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jquery: 'jquery',
        'window.jQuery': 'jquery',
        jQuery: 'jquery'
      })
    ]
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
      args[0].title = 'Tilesy'
      return args;
    });
  }
};