'use strict';

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    compass: {
      dist: {
        options: {
          sassDir: 'assets/styles/sass',
          cssDir: 'assets/styles/',
          environment: 'production'
        }
      }
    }
  });

  grunt.registerTask('default', [
    'compass'
  ]);
};
