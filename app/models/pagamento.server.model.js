'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * PagamentoSchema
 */
var PagamentoSchema = new Schema({
	descricao: {
		type: String,
		trim: true,
		default: ''
	},	
	valor: {
		type: String,
		trim: true,
		default: ''
	},
	tipoPagamento: {
        type: String,
        enum: ['CONTA', 'MATERIAL', 'FUNCIONARIO', 'EQUIPAMENTO', 'OUTROS'],
        default: 'OUTROS'
    },
	dataPagamento: {
		type: Date,
		default: Date.now
	},
	updated: {
		type: Date,
		default: Date.now
	},
	created: {
		type: Date,
		default: Date.now
	}
});

mongoose.model('Pagamento', PagamentoSchema);