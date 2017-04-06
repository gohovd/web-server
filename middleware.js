var middleWare = {
	requireAuthentication: function (req, res, next) {
		console.log('OBS! Private');
		next();
	},
	logger: function (req, res, next) {

		console.log('Request: ' + new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
		next();
	}
};

module.exports = middleWare; //Expose this for use in other files!