'use strict';
var path = process.cwd();

var Poll = require('../models/polls.js');

function PollHandler () {

	this.getAllPolls = function (req, res) {
		Poll
			.find()
			.exec(function (err, result) {
				if (err) { throw err; }

			res.json(result);
			});
	};

	this.addPoll = function (req, res) {
				var newPoll = new Poll();
				var pollInfo = req.body;


				newPoll.id = pollInfo.id;
				newPoll.createdBy = pollInfo.createdBy;
				newPoll.question = pollInfo.question;
				newPoll.answers = pollInfo.answers;
				

				newPoll.save(function (err) {
					if (err) {
						throw err;
					}
					else
						res.json("Hello");
				});

					

	};

	// this.deletePoll = function (req, res) {
	// 	Poll
	// 		.findOneAndUpdate({ 'github.id': req.user.github.id }, { 'nbrClicks.clicks': 0 })
	// 		.exec(function (err, result) {
	// 				if (err) { throw err; }

	// 				res.json(result.nbrClicks);
	// 			}
	// 		);
	// };

}

module.exports = PollHandler;
