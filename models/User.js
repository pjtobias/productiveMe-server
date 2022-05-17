const mongoose = require('mongoose')

// const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: 'First name is required'
	},
	lastName: {
		type: String,
		required: 'Last name is required'
	},
	contactNo: {
		type: Number
	},
	email: {
		type: String
	},
	pw: {
		type: String
	},
	accessType: {
		type: String
	},
	numberOfSignIns: {
		type: Number
	}
});


module.exports = mongoose.model('user', userSchema)




