module.exports = function(grunt) {

	grunt.initConfig({
		concat: {
			// options: {
			// 	separator: ';',
			// },
			js: {
				src: ['src/js/*'],
				dest: 'dist/js/app.js'
			},
			chess_pieces: {
				src: ['src/js/chess_pieces/*'],
				dest: 'dist/js/pieces.js'
			}
		},
	sass: {
		options: {
			noCache: true
		},
		dist: {
			files: {
				'dist/css/main.css': 'src/css/main.scss'
			}
		}
	},
	watch: {
		js: {
			files: ['src/js/*.js', 'src/js/**/*'],
			tasks: ['concat']
		},
		css: {
			files: ['src/css/**/*.scss'],
			tasks: ['sass']
		},
	}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.registerTask('default', ['concat', 'watch', 'sass']);

}