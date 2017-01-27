'use strict'
var http = require('http');

var connectionMngt = require('./mongodb');

var contact = require('./schema');

connectionMngt.connect(function() {
	var appBuilder = require('./appBuilder');

	var app = appBuilder();

	var server = http.Server(app);

	server.listen(8080,'127.0.0.1');
})

var Gerard = contact.userService(
    {username:'Gerard Lenorman', 
     password:'président'}); 
//contact.addContact(Gerard);

var dan = contact.userService(
	{username:'Henri',
	password:'1234'});
//contact.addContact(dan);



