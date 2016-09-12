// this file lets you configure what webpack does

var webpack = require('webpack');


module.exports = {
  entry : [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output : {
    path : __dirname,
    filename: './public/bundle.js'
  },
  resolve : {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      Timer: 'app/components/Timer.jsx',
      Countdown: 'app/components/Countdown.jsx',


      applicationStyles: 'app/styles/app.scss',

    },
    extensions: ['', '.js', '.jsx']
  },
  // because the entry file is jsx we require a loader to get it started
  // babe-loader takes our files pass them through react, get output and run them through es2015 as well
  // preset tells babel what to do
  module : {
    loaders : [
      {
        loader : 'babel-loader',
        query : {
                presets: ['react', 'es2015']
                },
        test : /\.jsx?$/,
        exclude : /(node_modules | bower_components)/
      }
    ]

  }
};
