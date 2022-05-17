const mongoose = require('mongoose')

const conversationSchema = new mongoose.Schema({
	conversationName: {
		type: String,
		required: 'Project name is required'
	},
	dateCreated: {
		type: String
	},
	ownerOfThisConvoId: {
		type: String
	},
	isActive: {
        type: Boolean
	}
});


module.exports = mongoose.model('conversation', conversationSchema)




