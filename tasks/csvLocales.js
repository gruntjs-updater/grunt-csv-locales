var csvLocales = require('csv-locales');
var path = require('path');

module.exports = function (grunt) {
  var TASK_NAME = 'csvLocales';
  var TASK_DESCR = 'Create locales from the CSV file';

  grunt.registerMultiTask(TASK_NAME, TASK_DESCR, function () {
    var done = this.async();
    var processDir = process.cwd();

    var options = this.options({
      csvPath: path.join(processDir, this.data)
    });
    options.dirPath = path.join(processDir, options.dirPath);

    csvLocales(options, function (err) {
      if (err) {
        throw err;
      }
      done();
    });
  });
};
