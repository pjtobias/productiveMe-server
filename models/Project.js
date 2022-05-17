const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
	projectName: {
		type: String,
		required: 'Project name is required'
	},
	dateCreated: {
		type: String
	},
	dateEnd: {
		type: String
	},
	adminId: {
		type: String
	},
	adminName: {
		type: String
	},
	isActive: {
        type: Boolean,
        default: true
	}
});


module.exports = mongoose.model('project', projectSchema)




