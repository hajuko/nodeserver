module.exports = function(grunt) {

  var loadNodeTasks = function() {
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jscs');
  };

  var registerNodeTasks = function() {
    grunt.registerTask('dev', ['express:dev', 'watch']);
    grunt.registerTask('lint', ['env:dev', 'jshint', 'jscs']);
  };

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    express: {
      options: {},
      dev: {
        options: {
          script: 'server.js'
        }
      }
    },

    jshint: {
      files: ['**/*.js', '!node_modules/**/*'],
      options: {
        jshintrc: true
      }
    },

    jscs: {
      src: ['**/*.js', '!node_modules/**/*'],
      options: {
        config: '.jscsrc'
      }
    },

    watch: {
      express: {
        files: ['**/*.js', '**/*.css', '!node_modules/'],
        tasks: ['express:dev'],
        options: {
          spawn: false,
          livereload: true
        }
      }
    }
  });

  loadNodeTasks();
  registerNodeTasks();
};
