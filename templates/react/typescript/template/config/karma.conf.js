const webpackConfig = require('./webpack.test.js')

module.exports = function(config) {
  const _config = {
    basePath: '',
    frameworks: ['jasmine'],
    files: [{
      pattern: './config/karma-test-shim.js',
      watched: false
    }],
    preprocessors: {
      './config/karma-test-shim.js': ['webpack', 'sourcemap']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      stats: 'errors-only'
    },
    webpackServer: {
      noInfo: true
    },
    plugins: [
      require('karma-webpack'),
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-sourcemap-loader')
    ],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: true
  }
  config.set(_config)
}