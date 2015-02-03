'use strict';

module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON("bower.json"),

    meta: {
      mainFile: 'email_obfuscator',
      banner: '/*! <%= pkg.name %> - v<%= pkg.version %> | <%= pkg.license %> License | ' +
        ' <%= pkg.homepage %> */\n'
    },

    concat: {
      dist: {
        src: ['src/<%= meta.mainFile %>.js'],
        dest: 'dist/<%= meta.mainFile %>.js'
      },
      options: {
        banner: '<%= meta.banner %>'
      }
    },

    uglify: {
      my_target: {
        src: ['dist/<%= meta.mainFile %>.js'],
        dest: 'dist/<%= meta.mainFile %>.min.js'
      },
      options: {
        banner: '<%= meta.banner %>'
      }
    },

    watch: {
      files: ['src/*'],
      tasks: ['default']
    }

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['concat','uglify']);

};
