'use strict';

// Setting up route
angular.module('veiculos').config(['$stateProvider', 'RouteHelpersProvider',
	function($stateProvider, helper) {
		// Articles state routing
		$stateProvider.
		state('app.listVeiculos', {
			url: '/veiculos/:leilaoId',
			title: 'Listar Veiculos',
			templateUrl: 'modules/veiculos/views/list-veiculos.client.view.html',
			resolve: helper.resolveFor('datatables')
		});
	}
]);