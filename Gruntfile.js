/*
 * grunt-apigee-import-api-bundle
 * https://github.com/grunt-apigee/grunt-apigee-kvm
 *
 * Copyright (c) 2015 dzuluaga
 * Licensed under the Apache-2.0 license.
 */

 'use strict';

 module.exports = function(grunt) {
  var apigee_conf = require('./grunt/apigee-config.js');
  // Project configuration.
  grunt.initConfig({
    apigee_profiles : apigee_conf.profiles(grunt),
    jshint: {
      all: [
      'Gruntfile.js',
      'tasks/*.js',
      '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });
  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('import_api_bundle', ['apigee_import_api_bundle']);
  grunt.registerTask('test', ['clean', 'import_api_bundle'/*, 'nodeunit'*/]);



  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
