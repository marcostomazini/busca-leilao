'use strict';

//Articles service used for communicating with the articles REST endpoints
angular.module('movimentacoes').factory('Servicos', ['$resource',
	function($resource) {

		var Quantidade = $resource('api/pesquisa/servicos');

		var Servicos = $resource('api/servicos/:servicoId', 
			{ servicoId: '@_id' });

		var Servico = $resource('api/servico/:servicoId', 
			{ servicoId: '@_id' }, 
			{ update: { method: 'PUT' } });
    	
    	return {
    		servicos: Servicos,
    		servico: Servico,
    		quantidade: Quantidade
    	};
	}
]).factory('Depositos', ['$resource',
	function($resource) {

		var Quantidade = $resource('api/pesquisa/depositos');

		var Depositos = $resource('api/depositos/:depositoId', 
			{ depositoId: '@_id' });

		var Deposito = $resource('api/deposito/:depositoId', 
			{ depositoId: '@_id' }, 
			{ update: { method: 'PUT' } });
    	
    	return {
    		depositos: Depositos,
    		deposito: Deposito,
    		quantidade: Quantidade
    	};
	}
]);