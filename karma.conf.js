module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'dist/js/app.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'build/test/view*/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};