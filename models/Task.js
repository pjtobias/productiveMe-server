const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
	taskName: {
		type: String,
		required: 'Please name your task'
	},
	description: {
        type: String
	},
	status: {
        type: String
	},
	projectThisTaskBelongToId: {
		type: String
	},
	userAssignedInThisTaskId: {
		type: String
	},
	adminOfThisProjectId: {
		type: String
	}
});


module.exports = mongoose.model('task', taskSchema)




