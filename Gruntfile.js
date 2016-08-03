module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        reporter: require('jshint-stylish')
      },
      all: ['Gruntfile.js','client/**/*.js','dist/**/*.js']
    },
    sass: {
        build: {
            files: {
                'client/styles/style.css': 'client/styles/style.scss'
            }
        }
    },
    uglify: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      build: {
        files: {
          'dist/**/*.min.js': 'client/**/*.js'
        }
      },
      dev: {
        files: { }
      },
      production: {
        files: { 'dist/js/app.min.js': 'client/**/*.js'}
      }
    },
    cssmin: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      build: {
        files: {
          'dist/styles/style.min.css': 'client/styles/style.css'
        }
      }
    },
    build: ['Gruntfile.js','client/**/*.js'],
    watch: {
      options: {
        livereload: true,
      },
      css: {
        files: ['client/styles/*.scss'],
        task: ['sass']
      },
      src: {
        files: ['client/**/*.js','client/**/*.scss'],
        tasks: ['default'],
        options: {
          spawn: false,
          event: ['all']
        }
      }
    },
    connect: {
      server: {
        options: {
          port: 9000,
          hostname: 'localhost'
        }
      }
    }
  });


  // Default task(s).
  grunt.registerTask('default', ['sass','connect','watch']);

  grunt.registerTask('dev', ['jshint:dev','uglify:dev','cssmin','sass']);

  grunt.registerTask('production', ['jshint:production', ''])

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-connect');  
  grunt.loadNpmTasks('grunt-contrib-watch');

};
