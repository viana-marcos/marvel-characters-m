module.exports = function (config) {
  config.set({
      basePath: '',
      frameworks: ['jasmine'],

      files: [
         'js/**/*.js',
         'js/**/*.specs.js'
      ],

      exclude: [
        'js/libs/**',
        'js/libs/*.js',
        'js/interceptors/*.js',
        'js/app.js'        
      ],

      preprocessors: {
        'js/**/*.js': ['coverage']
      },

      plugins: [
          'karma-jasmine',
          'karma-chrome-launcher',
          'karma-phantomjs-launcher',          
          'karma-coverage'
      ],
      
      reporters: ['progress', 'coverage'],
      port: 9878,
      colors: true,
      logLevel: config.LOG_DEBUG,
      autowatch: true,      
      browsers: ['Chrome'],      
      singleRun: false,
      concurrency: Infinity,
      coverageReporter: {
          includeAllSources: true,
          dir: 'coverage/',
          reporters: [
              { type: "html", subdir: "html" },
              { type: 'text-summary' }
          ]
      }
  });
};