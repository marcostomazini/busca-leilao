'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * DepositoSchema
 */
var DepositoSchema = new Schema({
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
	dataDeposito: {
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

mongoose.model('Deposito', DepositoSchema);