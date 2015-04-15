/* jslint node: true */
'use strict';

module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON("bower.json"),

    meta: {
      mainFile: 'email_obfuscator',
      banner: '/*! <%= pkg.name %> - v<%= pkg.version %> | <%= pkg.license %> License | ' +
        '<%= pkg.homepage %> */\n'
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

    jasmine: {
      src: ['dist/<%= meta.mainFile %>.js'],
      options: {
        specs: 'test/spec/*Spec.js',
        outfile: 'test/_SpecRunner.html',
        vendor: 'http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'
      }
    },

    jshint: {
      all: ['Gruntfile.js', 'src/<%= meta.mainFile %>.js', 'test/**/*.js'],
      options: {
        jshintrc: '.jshintrc',
      }
    },

    watch: {
      files: ['src/*'],
      tasks: ['default']
    }

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['concat','uglify','jshint','jasmine']);
  grunt.registerTask('travis', ['jshint','jasmine']);

};
