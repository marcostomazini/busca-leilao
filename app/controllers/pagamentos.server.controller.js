'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors.server.controller'),
	Pagamento = mongoose.model('Pagamento'),
	ObjectId = mongoose.Types.ObjectId,
	_ = require('lodash');

/**
 * Create a pagamento
 */
exports.create = function(req, res) {
	var self = this;
	var pagamento = new Pagamento(req.body);

	pagamento.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {		
	    	var socketio = req.app.get('socketio');
			socketio.emit('message-toaster', {				
				type: 'info',
				title: 'Novo Cadastro',
				message: 'Pagamento Cadastrado ' + pagamento.nome
			});

			res.json(pagamento);				
		}
	});
};

/**
 * Show the current pagamento
 */
exports.read = function(req, res) {
	res.json(req.pagamento);
};

/**
 * Update a pagamento
 */
exports.update = function(req, res) {
	var pagamento = req.pagamento;

	pagamento = _.extend(pagamento, req.body);

	pagamento.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(pagamento);
		}
	});
};

/**
 * Delete an pagamento
 */
exports.delete = function(req, res) {
	var pagamento = req.pagamento;

	pagamento.remove(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(pagamento);
		}
	});
};

/**
 * List of pagamentos
 */
exports.list = function(req, res) {	
	var datatablesQuery = require('datatables-query'),
        params = req.body,
        query = datatablesQuery(pagamento);
 
    query.run(params).then(function (data) {
        res.json(data);
    }, function (err) {
        return res.status(400).send({
			message: errorHandler.getErrorMessage(err)
		});
    });
};

exports.listAll = function(req, res) {	
	Pagamento.find({}, '-updated -created')
		.sort('dataPagamento -created').exec(function(err, pagamentos) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(pagamentos);
		}
	});
};

/**
 * List of pagamentos
 */
exports.count = function(req, res) {	
	Pagamento.find().count().exec(function(err, qtde) {
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
 * pagamento middleware
 */
exports.pagamentoByID = function(req, res, next, id) {
	Pagamento.findById(id).exec(function(err, pagamento) {
		if (err) return next(err);
		if (!pagamento) //return next(new Error('Failed to load pagamento ' + id));
			return res.status(400).send(errorHandler.registroNaoEncontrado(id));
		req.pagamento = pagamento;
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