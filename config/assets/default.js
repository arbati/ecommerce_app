'use strict';

/* eslint comma-dangle:[0, "only-multiline"] */

module.exports = {
  client: {
    lib: {
      css: [
        // bower:css
        'public/lib/bootstrap/dist/css/bootstrap.css',
        'public/lib/bootstrap/dist/css/bootstrap-theme.css',
        'public/lib/angular-ui-notification/dist/angular-ui-notification.css'
        // endbower
      ],
      js: [
        // bower:js
        'public/lib/angular/angular.js',
        'public/lib/angular-animate/angular-animate.js',
        'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
        'public/lib/ng-file-upload/ng-file-upload.js',
        'public/lib/angular-messages/angular-messages.js',
        'public/lib/angular-mocks/angular-mocks.js',
        'public/lib/angular-resource/angular-resource.js',
        'public/lib/angular-ui-notification/dist/angular-ui-notification.js',
        'public/lib/angular-ui-router/release/angular-ui-router.js',
        'public/lib/owasp-password-strength-test/owasp-password-strength-test.js',
        // endbower
        'public/sources/js/vendor/jquery-1.12.4.min.js',
        'public/sources/js/vendor/popper.min.js',
        'public/sources/js/bootstrap.min.js',
        'public/sources/js/ajax-mail.js',
        'public/sources/js/jquery.meanmenu.min.js',
        'public/sources/js/wow.min.js',
        'public/sources/js/slick.min.js',
        'public/sources/js/owl.carousel.min.js',
        'public/sources/js/jquery.magnific-popup.min.js',
        'public/sources/js/isotope.pkgd.min.js',
        'public/sources/js/imagesloaded.pkgd.min.js',
        'public/sources/js/jquery.mixitup.min.js',
        'public/sources/js/jquery.countdown.min.js',
        'public/sources/js/jquery.counterup.min.js',
        'public/sources/js/waypoints.min.js',
        'public/sources/js/jquery.barrating.min.js',
        'public/sources/js/jquery-ui.min.js',
        'public/sources/js/venobox.min.js',
        'public/sources/js/jquery.nice-select.min.js',
        'public/sources/js/scrollUp.min.js',
        'public/sources/js/main.js'
      ],
      tests: ['public/lib/angular-mocks/angular-mocks.js']
    },
    css: [
      'modules/*/client/{css,less,scss}/*.css'
    ],
    less: [
      'modules/*/client/less/*.less'
    ],
    sass: [
      'modules/*/client/scss/*.scss'
    ],
    js: [
      'modules/core/client/app/config.js',
      'modules/core/client/app/init.js',
      'modules/*/client/*.js',
      'modules/*/client/**/*.js'
    ],
    img: [
      'modules/**/*/img/**/*.jpg',
      'modules/**/*/img/**/*.png',
      'modules/**/*/img/**/*.gif',
      'modules/**/*/img/**/*.svg'
    ],
    views: ['modules/*/client/views/**/*.html'],
    templates: ['build/templates.js']
  },
  server: {
    gulpConfig: ['gulpfile.js'],
    allJS: ['server.js', 'config/**/*.js', 'modules/*/server/**/*.js'],
    models: 'modules/*/server/models/**/*.js',
    routes: ['modules/!(core)/server/routes/**/*.js', 'modules/core/server/routes/**/*.js'],
    sockets: 'modules/*/server/sockets/**/*.js',
    config: ['modules/*/server/config/*.js'],
    policies: 'modules/*/server/policies/*.js',
    views: ['modules/*/server/views/*.html']
  }
};
