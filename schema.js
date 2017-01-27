var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var exports = module.exports;

// Define our user schema
var userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});


exports.addContact = function (contact, callback) {
    /* var myContact = new userSchema(contact);
    myContact.save(function (err) {
        console.log(err);
        callback(err);
    }) */

    contact.save(function(err, result) {
        if (err) {
            console.log(err);
        }
        else {
            console.log('Contact added', result);
        }
    })
}

exports.getContact = function(name,callback) {
	try{
            userService.findOne({ username: name }).exec((err,results) => {
                callback(err,results);
            });
        }
        catch(err){
                console.log(err.stack)
        }
}

exports.getAllContacts = function(callback) {
		try{
            userService.find().exec((err,results) => {
                callback(err,results);
            });
        }
        catch(err){
                console.log(err.stack)
        }
}

var userService = mongoose.model('User', userSchema);


let db = mongoose.connection;

exports.userService = userService;

db.once('open', function () {
    console.log('La base de données est bien là.');

});