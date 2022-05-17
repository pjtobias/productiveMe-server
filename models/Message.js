const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
	messageBody: {
		type: String,
		required: 'Project name is required'
	},
	dateCreatedMessage: {
		type: String
	},
	convoItBelongstoId: {
		type: String
	},
	senderOfThisMessageId: {
		type: String
	},
	messageType: {
		type: String
	},
	isActive: {
        type: Boolean
	}
});


module.exports = mongoose.model('message', messageSchema)




