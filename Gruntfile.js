module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        //Get some details from the package.json
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*!\n' +
        ' * <%= pkg.name %> - version <%= pkg.version %> \n' +
        ' * <%= pkg.description %>\n' +
        ' *\n' +
        ' * <%= pkg.author %>\n' +
        ' * Build at <%= grunt.template.today("dd-mm-yyyy") %>\n' +
        ' * Released under MIT License \n' +
        ' */\n',
        usebanner: {
            dist: {
                options: {
                    position: 'top',
                    banner: '<%= banner %>'
                },
                files: {
                    src: [ 'build/*.js' ]
                }
            }
        },
        //Typescript settings per build
        typescript: {
            options: {
                module: 'amd',
                target: 'es5',
                sourceMap: true,
                declaration: true,
                references: [
                    'node_modules/phaser/typescript/pixi.d.ts',
                    'node_modules/phaser/typescript/phaser.d.ts',
                    'vendor/*.d.ts'
                ],
                noImplicitAny: false
            },
            dist: {
                src: ['ts/**/*.ts'],
                dest: 'tmp/<%= pkg.name %>.js'
            }
        },
        watch: {
            files: ['ts/**/*', 'styles/*', 'Gruntfile.js'],
            tasks: ['dist'],
            options: {
                livereload: true
            }
        },
        copy: {
            dist: {
                files: [
                    {expand: true, cwd: 'tmp', dest: 'build', src: ['**/*.d.ts', '**/*.js.map']}
                ]
            }
        },
        connect: {
            server: {
                options: {
                    port: 8080
                }
            }
        },
        handlebars: {
            options: {
                namespace: 'Fabrique.Debug.Templates'
            },
            dist: {
                files: {
                    "tmp/templates.js": ["ts/Templates/*.hbs"]
                }
            }
        },
        less: {
            dist: {
                files: {
                    "build/style.css": "styles/*.less"
                }
            }
        },
        concat: {
            dist: {
                src: [
                    'node_modules/handlebars/dist/handlebars.runtime.js',
                    'tmp/templates.js',
                    'tmp/<%= pkg.name %>.js'
                ],
                dest: 'build/<%= pkg.name %>.js',
            }
        },
        uglify: {
            options: {
                compress: {
                    sequences: true,
                    dead_code: true,
                    conditionals: true,
                    booleans: true,
                    unused: true,
                    if_return: true,
                    join_vars: true,
                    drop_console: true
                },
                mangle: true,
                beautify: false
            },
            dist: {
                files: {
                    'build/<%= pkg.name %>.min.js': [
                        'build/*.js'
                    ]
                }
            }
        },
        clean: {
            dist: ['build'],
            temp: ['tmp']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-banner');
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-handlebars');

    //dist Build
    grunt.registerTask('dist', [
        'clean:dist',     //Clean the dist folder
        'typescript:dist',//Run typescript on the preprocessed files, for dist (client)
        'less:dist',
        'handlebars:dist',
        'concat:dist',
        'uglify:dist',    //Minify everything
        'copy:dist',
        'usebanner:dist',    //Minify everything
        'clean:temp'
    ]);

    grunt.registerTask('dev', [
        'dist',
        'connect',
        'watch'
    ]);

};
