// Create router


var express = require('express');

var schema = require('./schema');

var router = express.Router();

var listContact = ['Alice','Bob','Carlos','Dinar'];

// Register routes on router
router.get('/contacts', function(req, res) {
    console.log('get')
    schema.getAllContacts(function(err,contacts) {
		res.json(contacts);
	})

});

router.get('/contacts/:username', function(req,res) {
	console.log('get1')
	schema.getContact(req.params.username, function(err,contact) {
		res.json(contact);
	})
});


router.post('/contacts', function(req, res, next) {
    listContact.push(req.body);
    res.end()
});


router.delete('/contacts/:id', function(req, res, next) {
    req.on('data', function(chunk) {
        listContact.remove(chunk.toString());
    });
    req.on('end', function() {
        res.writeHead(200, 'OK', {'Content-Type' : 'text/plain'});
        res.json(listContact);
    })
});


// Make router available
module.exports = router;