'use strict';

module.exports = {
	app: {
		title: 'Leilão - Sistema para Leilão',
		description: 'Leilão',
		keywords: 'leilao, carro, veiculos'
	},
	port: process.env.PORT || 3000,
	templateEngine: 'swig',
	sessionSecret: 'ARQUITETAWEB2015',
	sessionCollection: 'sessions',
	assets: {
		lib: {
			css: [
				// 'public/lib/bootstrap/dist/css/bootstrap.css',
				// 'public/lib/bootstrap/dist/css/bootstrap-theme.css',
			],
			js: [
				'public/lib/jquery/dist/jquery.js',
				'public/lib/angular/angular.js',
				'public/lib/angular-route/angular-route.js',
				'public/lib/angular-cookies/angular-cookies.js',
				'public/lib/angular-animate/angular-animate.js',
				'public/lib/angular-touch/angular-touch.js',
				'public/lib/angular-ui-router/release/angular-ui-router.js',
				'public/lib/ngstorage/ngStorage.js',
				'public/lib/angular-ui-utils/ui-utils.js',
				'public/lib/angular-sanitize/angular-sanitize.js',
				'public/lib/angular-resource/angular-resource.js',
				'public/lib/angular-translate/angular-translate.js',
				'public/lib/angular-translate-loader-url/angular-translate-loader-url.js',
				'public/lib/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
				'public/lib/angular-translate-storage-local/angular-translate-storage-local.js',
				'public/lib/angular-translate-storage-cookie/angular-translate-storage-cookie.js',
				'public/lib/oclazyload/dist/ocLazyLoad.js',
				'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
				'public/lib/angular-loading-bar/build/loading-bar.js',
				'public/lib/jquery.browser/dist/jquery.browser.js',
				'public/lib/underscore/underscore.js',

				// 'public/lib/socket-io-client/socket.io.js',
				// 'public/lib/angular-socket-io/socket.min.js',
				// 'public/lib/jquery/dist/jquery.js',
				// 'public/lib/angular/angular.js',
				// 'public/lib/angular-resource/angular-resource.js',
				// 'public/lib/angular-cookies/angular-cookies.js',
				// 'public/lib/angular-animate/angular-animate.js',
				// 'public/lib/angular-touch/angular-touch.js',
				// 'public/lib/angular-sanitize/angular-sanitize.js',
				// 'public/lib/angular-ui-router/release/angular-ui-router.js',
				// 'public/lib/angular-ui-utils/ui-utils.js',
				// 'public/lib/angular-bootstrap/ui-bootstrap-tpls.js'
			]
		},
		css: [
			// 'public/modules/**/css/*.css'
			'public/dist/application.min.css'
		],
		js: [
			'public/config.js',
			'public/application.js',
			'public/modules/*/*.js',
			'public/modules/*/*[!tests]*/*.js'
		],
		tests: [
			'public/lib/angular-mocks/angular-mocks.js',
			'public/modules/*/tests/*.js'
		]
	}
};