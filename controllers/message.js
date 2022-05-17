const mongoose = require('mongoose');
const Project = require('../models/Project')
const User = require('../models/User')
const Conversation = require('../models/Conversation')
const Message = require('../models/Message')

const errorMe = err => console.log(err)



module.exports.getMessagesThruConvoId = (params) => {
	// console.log(params)
	return Message.find({ convoItBelongstoId: params.convoItBelongstoId })
		.then(message => {
			// console.log(message)
			return message
		})
		.catch(errorMe)
}

module.exports.isTheUserInThisConvo = (params) => {
	// console.log(params)
	return Message.find({ senderOfThisMessageId: params.senderOfThisMessageId })
		.then(message => {
			return message.length > 0 ? true : false
		})
		.catch(errorMe)
}



module.exports.getConvoIdThruMessageDetails = (params) => {
	// console.log(params)
	return Message.findAllWithoutDuplicate({ senderOfThisMessageId: params.senderOfThisMessageId })
		.then(message => {
			// console.log(message)
			return message
		})
		.catch(errorMe)
}


module.exports.getAllConvoIdOfThisUser = (params) => {
	// console.log(params)
	return Message.aggregate([
		    {$match: {senderOfThisMessageId: userId}},
		    {$group: {_id: '$name'}}
		])
		.then(message => {
			// console.log(message)
			return message
		})
		.catch(errorMe)
}




module.exports.addMessage = (params) => {
	// console.log(params)
	let message = new Message({
		messageBody: params.messageBody,
		dateCreatedMessage: params.dateCreatedMessage,
		convoItBelongstoId: params.convoItBelongstoId,
		senderOfThisMessageId: params.senderOfThisMessageId,
		messageType: 'default',
		isActive: true
	})

	return message.save()
		.then((message, err) => {
			return (err) ? false : true
		})
		.catch(errorMe)
}

module.exports.addMessageAsReport = (params) => {
	// console.log(params)
	let message = new Message({
		messageBody: params.messageBody,
		dateCreatedMessage: params.dateCreatedMessage,
		convoItBelongstoId: params.convoItBelongstoId,
		senderOfThisMessageId: params.senderOfThisMessageId,
		messageType: 'report',
		isActive: true
	})

	return message.save()
		.then((message, err) => {
			return (err) ? false : true
		})
		.catch(errorMe)
}

