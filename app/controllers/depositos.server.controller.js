'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors.server.controller'),
	Deposito = mongoose.model('Deposito'),
	ObjectId = mongoose.Types.ObjectId,
	_ = require('lodash');

/**
 * Create a deposito
 */
exports.create = function(req, res) {
	var self = this;
	var deposito = new Deposito(req.body);

	deposito.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {		
	    	var socketio = req.app.get('socketio');
			socketio.emit('message-toaster', {				
				type: 'info',
				title: 'Novo Deposito',
				message: 'Deposito Cadastrado ' + deposito.nome
			});

			res.json(deposito);				
		}
	});
};

/**
 * Show the current deposito
 */
exports.read = function(req, res) {
	res.json(req.deposito);
};

/**
 * Update a deposito
 */
exports.update = function(req, res) {
	var deposito = req.deposito;

	deposito = _.extend(deposito, req.body);

	deposito.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(deposito);
		}
	});
};

/**
 * Delete an deposito
 */
exports.delete = function(req, res) {
	var deposito = req.deposito;

	deposito.remove(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(deposito);
		}
	});
};

/**
 * List of depositos
 */
exports.list = function(req, res) {	
	var datatablesQuery = require('datatables-query'),
        params = req.body,
        query = datatablesQuery(Deposito);
 
    query.run(params).then(function (data) {
        res.json(data);
    }, function (err) {
        return res.status(400).send({
			message: errorHandler.getErrorMessage(err)
		});
    });
};

exports.listAll = function(req, res) {	
	Deposito.find({}, '-updated -created')
		.sort('dataDeposito -created').exec(function(err, depositos) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(depositos);
		}
	});
};

/**
 * List of depositos
 */
exports.count = function(req, res) {	
	Deposito.find().count().exec(function(err, qtde) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			console.log(qtde);
			res.json(qtde);
		}
	});
};

/**
 * deposito middleware
 */
exports.depositoByID = function(req, res, next, id) {
	Deposito.findById(id).exec(function(err, deposito) {
		if (err) return next(err);
		if (!deposito) //return next(new Error('Failed to load deposito ' + id));
			return res.status(400).send(errorHandler.registroNaoEncontrado(id));
		req.deposito = deposito;
		next();
	});
};

exports.hasAuthorization = function(req, res, next) {
	// if (req.article.user.id !== req.user.id) {
	// 	return res.status(403).send({
	// 		message: 'User is not authorized'
	// 	});
	// }
	next();
};