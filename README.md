# grunt-csv-locales

This is a grunt task for the [csv-locales module](https://www.npmjs.com/package/csv-locales) which creates json files with n18i locales for Google Chrome extensions and applications from a CSV file.


## Installation

    npm install --save-dev grunt-csv-locales


## Usage

To create locales use a CSV file which generated from a spreadsheet with [this structure](https://docs.google.com/spreadsheets/d/1ONVyE5iwe7Hjg74eUQ5WdJjQ7i8kWNcbfXI-uh3bvdc/edit?usp=sharing).

    grunt.initConfig({
    
      csvLocales: {
        all: 'locales.csv',
        options: {
          dirPath: '_locales',
          csvParse: {}
        }
      }
    });
    grunt.loadNpmTasks('grunt-csv-locales');


### Params available

* `all` - a path to the CSV file with locales.
* `options.dirPath` - a path to the target directory. If it doesn't exist, it will be created.
* `options.csvParse` — a list of options for the [CSV parser](http://csv.adaltas.com/parse/).


License
-------

[MIT](LICENSE)
