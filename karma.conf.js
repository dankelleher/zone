module.exports = function(config){
    config.set({

        basePath : 'app/',

        files : [
            'bower_components/angular/angular.js',
            'bower_components/angular-animate/angular-animate.js',
            'bower_components/angular-mocks/angular-mocks.js',
            '*.js',
            'components/**/*.js',
            'test/**/*.js',
            'components/zone/*.html'
        ],

        autoWatch : true,

        frameworks: ['jasmine', 'jasmine-matchers'],

        browsers : ['PhantomJS', 'Chrome', 'SlimerJS', 'Firefox'],
        
        preprocessors: {
            'components/zone/*.html': ['ng-html2js']
        },

        ngHtml2JsPreprocessor: {
            moduleName: 'templates'
        },

        junitReporter : {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }

    });
};
