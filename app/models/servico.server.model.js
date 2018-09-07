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