'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Poll = new Schema({
	id: Number,
	createdBy: String,
	question: String,
	answers: {
		text: String,
      	value: Number
	}
});

module.exports = mongoose.model('Poll', Poll);
