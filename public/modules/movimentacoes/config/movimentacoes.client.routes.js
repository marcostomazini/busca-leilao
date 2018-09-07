'use strict';

// Setting up route
angular.module('movimentacoes').config(['$stateProvider', 'RouteHelpersProvider',
	function($stateProvider, helper) {
		// Articles state routing
		$stateProvider.
		state('app.listDepositos', {
			url: '/depositos/:depositoId',
			title: 'Listar Depositos',
			templateUrl: 'modules/movimentacoes/views/list-depositos.client.view.html',
			resolve: helper.resolveFor('datatables')
		}).
		state('app.listTodosDepositos', {
			url: '/pesquisa-depositos',
			title: 'Listar Depositos',
			templateUrl: 'modules/movimentacoes/views/todos-depositos.client.view.html',
			resolve: helper.resolveFor('datatables', 'xeditable')
		}).
		state('app.listServicos', {
			url: '/servicos/:servicoId',
			title: 'Listar Servicos',
			templateUrl: 'modules/movimentacoes/views/list-servicos.client.view.html',
			resolve: helper.resolveFor('datatables')
		}).
		state('app.listTodosServicos', {
			url: '/pesquisa-servicos',
			title: 'Listar Servicos',
			templateUrl: 'modules/movimentacoes/views/todos-servicos.client.view.html',
			resolve: helper.resolveFor('datatables', 'xeditable')
		});
	}
]);