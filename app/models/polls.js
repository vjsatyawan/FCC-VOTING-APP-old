'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Poll = new Schema({
	createdBy: String,
	question: String,
	answers: [{
		text: String,
      	value: Number,
      	votes: Number
	}]
});

module.exports = mongoose.model('Poll', Poll);
