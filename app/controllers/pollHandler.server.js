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

				newPoll.createdBy = "Satyawan";
				newPoll.question = pollInfo.question;
				

	            for (var i = 0; i < pollInfo.choice.length; i++) {
	            		var newP = {text: pollInfo.choice[i], value: i, votes :0};
					 	newPoll.answers.push(newP);

	            }

				console.log(newPoll);

				newPoll.save(function (err) {
					if (err) {
						throw err;
					}
					else{
						console.log("Success");
						res.json("Poll Added Succesfully");
					}

						
				});

	};

	this.updatePoll = function (req, res) {

		console.log("Upate Poll");
		var pollInfo = req.body;
		console.log(pollInfo);
		console.log("pollInfo._id"+pollInfo.pollId +""+ pollInfo.choice+""+pollInfo.newChoice);




		if(pollInfo.newChoice){
						console.log("Hahahahahah");
						
						Poll.find({'_id': pollInfo.pollId}).update({
						    '$push': { 'answers': { 'text': pollInfo.newChoice, value: pollInfo.choiceValue, votes:0 } }
						})

						.exec(function (err, result) {
								if (err) { throw err; }

								res.json(result);
							}
						);


		}
		else{
					Poll
						.update({ '_id': pollInfo.pollId, 'answers.value': pollInfo.choice}, {$inc: { 'answers.$.votes' : 1 }})
						.exec(function (err, result) {
								if (err) { throw err; }

								res.json(result);
							}
						);
		}	
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
