/*global module:false*/
module.exports = function(grunt) {

    require('time-grunt')(grunt);
    require('jit-grunt')(grunt);

    // Project configuration.
    grunt.initConfig({
        bowercopy: {
            styles: {
                options : {
                    srcPrefix: 'bower_components',
                    destPrefix: 'assets',
                    clean: false
                },
                files : {
                    'styles/vendor/' : 'normalize.css/normalize.css'
                }
            }
        },
        sass: { 
            dist: {  
                options: { 
                    sourcemap: 'none',
                    style: 'expanded'
                },
                files: {  
                    'dist/styles/style.css': 'assets/styles/{,*/}*.scss'       
                }
            }
        },
        concat: {
            dist: {
                src: ['assets/styles/vendor/*.css'],
                dest: 'dist/styles/vendor.css',
            }
        },
        // autoprefixer
        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie 9', 'ios 6', 'android 4'],
                map: false
            },
            files: {
                expand: true,
                flatten: true,
                src: ['assets/styles/{!vendor,*/}/*.css', 'dist/styles/*.css'],
                dest: 'dist/styles/'
            },
        },
        // css minify
        cssmin: {
            options: {
                keepSpecialComments: 1
            },
            minify: {
                expand: true,
                cwd: '',
                src: ['dist/styles/*.css']
            }
        },
        // uglify to concat, minify, and make source maps
        uglify: {
            vendor: {
                files: {
                    'dist/scripts/vendor.min.js': [
                        'assets/scripts/vendor/*.js'
                    ]
                }
            },
            main: {
                files: [{
                    expand: true,
                    cwd: 'assets/scripts/',
                    src: '*.js',
                    dest: 'dist/scripts/',
                    ext: '.min.js'
                }]
            }
        },

        // image optimization
        imagemin: {
            dist: {
                options: {
                    progressive: true,
                    interlaced: true
                },
                files: [{
                    expand: true,
                    cwd: 'assets/images/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'dist/images/'
                }]
            }
        },
        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'assets/images/',
                    src: ['*.svg'],
                    dest: 'assets/images/svgmin/'
                }]
            }
        },
        grunticon: {
            myIcons: {
                files: [{
                    expand: true,
                    cwd: 'assets/images/svgmin',
                    src: ['*.svg'],
                    dest: "dist/images/svg/"
                }],
                options: {
                    pngpath : '/dist/images/svg/png/',
                    cssprefix : '.icon--'
                }
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'dist/styles/style.css',
                        'dist/scripts/*.min.js'
                    ]
                },
                options: {
                    watchTask: true,
                    proxy: 'local.wp.com',
                    port: 8080
                }
            }
        },
        watch: {
            sass: {
                files: ['assets/styles/scss/**/*.{scss,sass}'],
                tasks: ['sass']
            },
            uglify: {
                files: ['assets/scripts/**/*.js'],
                tasks: ['newer:uglify:main']
            },
            images: {
                files: ['assets/images/*.{png,jpg,gif,svg}'],
                tasks: ['images']
            }
        }
    });

    grunt.registerTask('bower', [
        'bowercopy',
        'newer:concat:dist'
    ]);

    // Images SVG task.
    grunt.registerTask('images', [
        'newer:imagemin',
        'newer:svgmin', 
        'grunticon',
    ]);


    // Default task.
    grunt.registerTask('default', [
        'bower',
        'sass',
        'uglify',
        'browserSync',
        'watch'
    ]);

    grunt.registerTask('build', [
        'bower',
        'images',
        'sass',
        'autoprefixer', 
        'newer:cssmin',
        'uglify'
    ]);

};
