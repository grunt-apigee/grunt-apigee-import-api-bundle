/*
 * grunt-apigee-import-api-bundle
 * https://github.com/grunt-apigee/grunt-apigee-import-api-bundle
 *
 * Copyright (c) 2015 dzuluaga
 * Licensed under the Apache-2.0 license.
 */

/*jslint node: true */

var grunt_common = require('apigee-sdk-mgmt-api');
var request = require('request');
var async = require('async');
var curl = require('curl-cmd');
var apigeeSdk = require('apigee-sdk-mgmt-api');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerTask('apigee_import_api_bundle', 'Import API bundle under a API proxy name', function() {
    var importedBundle = function(error, response, body) {
      if (!error && response.statusCode === 201) {
        var importBundleRes = JSON.parse(body);
        grunt.option('revision', importBundleRes.revision);
      }
      grunt.log.debug(response.statusCode);
      grunt.log.debug(body);
      done(error);
    };
    var done = this.async();
    grunt_common.importApiBundle(grunt.config.get('apigee_profiles'), importedBundle, grunt.option.flags().indexOf('--curl') !== -1);
  });
};
