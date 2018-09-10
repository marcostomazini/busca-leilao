'use strict';

/**
 * Module dependencies.
 */
var passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy,
	User = require('mongoose').model('User');

module.exports = function() {
	// Use local strategy
	passport.use(new LocalStrategy({
			usernameField: 'username',
			passwordField: 'password'
		},
		function(username, password, done) {
			User.findOne({
				username: username
			}, function(err, user) {
				if (err) {
					return done(err);
				}
				console.log(user);
				if (!user) {
					return done(null, false, {
						message: 'Usuário ou senha incorreta',
						type: 'error'
					});
				}
				if (!user.authenticate(password)) {
					return done(null, false, {
						message: 'Usuário ou senha incorreta',
						type: 'warning'
					});
				}

				return done(null, user);
			});
		}
	));
};