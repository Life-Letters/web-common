'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    watch: {
      compass: {
        files: ['scss/*.{scss,sass}'],
        tasks: ['compass:dev']
      }
    },
    compass: {
      dev: {
        options: {              
          sassDir: ['scss'],
          cssDir: ['styles'],
          importPath: './bower_components',  
        }
      }
    }
  });

  // Load the plugin
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');

  // Default task(s).
  grunt.registerTask('default', [
  		'compass:dev',
  		'watch']);
};