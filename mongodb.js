//connect to mongodb
var mongoose = require('mongoose')

var connect = function() {
	var options = { server: { socketOptions: {keepAlive: 1 } } };
	mongoose.connect('mongodb://localhost/mydb', options);
};

mongoose.connection.on('error', console.log);
mongoose.connection.on('disconnected', connect);

module.exports = {
	connect: function(callback) {
		mongoose.connection.on('connected', function(ref) {
			callback(ref);
		});
		connect();
	},
	
	disconnect: function(callback) {
		mongoose.disconnect(callback);
	}
};