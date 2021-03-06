'use strict';

/**
 * Get unique error field name
 */
var getUniqueErrorMessage = function(err) {
	var output;

	try {
		console.log(err.err);
		var fieldName = err.err.substring(err.err.lastIndexOf('.$') + 2, err.err.lastIndexOf('_1'));
		output = fieldName.charAt(0).toUpperCase() + fieldName.slice(1) + ' já existe';

	} catch (ex) {
		output = 'Unique field already exists';
	}

	return output;
};

/**
 * Get the error message from error object
 */
exports.getErrorMessage = function(err) {
	var message = '';
	if (err.code) {
		switch (err.code) {
			case 11000:
			case 11001:
				message = getUniqueErrorMessage(err);
				break;
			default:
				message = 'Something went wrong';
		}
	} else if (err.errors) {
		for (var errName in err.errors) {
			if (err.errors[errName].message) message = err.errors[errName].message;
		}
	} else {
		message = err.message;
	}

	return message;
};

/**
 * Get the error message from error object
 */
exports.registroNaoEncontrado = function(err) {
	var erro = { "message": "registro nao encontrado " + err + "", "success": false };

	return erro;
};