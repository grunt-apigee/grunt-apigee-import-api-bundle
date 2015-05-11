# grunt-apigee-import-api-bundle

> Grunt plugin to import API Proxy Bundles into Apigee Edge. This plugin plays well with API Lifecycle Tools such as [Apigee Deploy Grunt Plugin](https://github.com/apigeecs/apigee-deploy-grunt-plugin).

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-apigee-import-api-bundle --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-apigee-import-api-bundle');
```

## The "apigee_import_api_bundle" task

### Overview
There is no need to add any configuration to grunt.initConfig function.

### Options
N/A

#### options.type
N/A

### Usage Examples

This task will pick an API proxy bundle and will import it into Apigee Edge. The zip file should be located under /target directory with a name set by the apiproxy attribute by /grunt/apigee-config.js.

```bash
grunt --env=test --username=$ae_username --password=$ae_password --debug
```
![alt text](https://www.dropbox.com/s/uhzbclhpfc64iu8/Screenshot%202015-05-10%2020.12.27.png?dl=1
 "Upload an API Proxy bundle from the command line")


#### Default Options


#### Custom Options

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_