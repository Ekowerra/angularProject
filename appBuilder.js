var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')

module.exports = function(configuration) {
var application = express();


// Configure security
/*if (configuration && configuration.secured) {
  application.use(authentication());
}*/



// Configure content parsers
application.use(bodyParser.json());

// Configure domain middleware for errors
if (configuration && configuration.useDomain) {
  application.use(expressDomain);
}

application.use(cors());


// Configure Web API routes
application.use('/', require('./routes'));


// Configure generic error handler
application.use(require('./ErrorHandler'));




return application;
};