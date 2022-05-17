const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
	convoThisContactBelongToId: {
		type: String,
	},
	contactPersonId: {
		type: String
	},
	contactPersonName: {
		type: String
	},
	isActive: {
        type: Boolean
	}
});


module.exports = mongoose.model('contact', contactSchema)




