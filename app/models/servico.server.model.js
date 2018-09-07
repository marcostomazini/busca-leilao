'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * ServicoSchema
 */
var ServicoSchema = new Schema({
	nomeCliente: {
		type: String,
		trim: true,
		default: ''
	},
	celular: {
		type: String,
		trim: true,
		default: ''
	},
	tipoServico: {
		type: String,
		trim: true,
		//enum: ['lavagem', 'polimento', 'outros'],
		default: ''
	},
	placa: {
		type: String,
		trim: true,
		default: ''
	},
	valorRecebido: {
		type: String,
		trim: true,
		default: ''
	},	
	ordemChegadaDia: {
		type: Number
	},
	tipoPagamento: {
		type: String,
		enum: ['Dinheiro', 'Debito', 'Credito', 'Outros'],
		default: 'Dinheiro'
	},
	numeroParcelas: {
		type: Number
	},
	observacao: {
		type: String,
		trim: true,
		default: ''
	},
	situacao: {
		type: String,
		enum: ['Fila', 'Lavagem', 'Secagem', 'Acabamento', 'Polimento', 'Finalizado', 'Outros'],
		default: 'Fila'
	},
	dataHoraEntrada: {
		type: Date,
		default: Date.now
	},
	dataHoraSaida: {
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

mongoose.model('Servico', ServicoSchema);