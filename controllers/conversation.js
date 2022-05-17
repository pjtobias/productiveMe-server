const mongoose = require('mongoose');
const Project = require('../models/Project')
const User = require('../models/User')
const Message = require('../models/Message')
const Conversation = require('../models/Conversation')

const errorMe = err => console.log(err)



module.exports.getConversationsThruAdminId = (params) => {
	// console.log(params)
	return Conversation.find({ ownerOfThisConvoId: params.ownerOfThisConvoId })
		.then(conversation => {
			// console.log(conversation)
			return conversation
		})
		.catch(errorMe)
} 

module.exports.getConversationsThruConvoId = (params) => {
	// console.log(params)
	return Conversation.find({ _id: params.convoItBelongstoId })
		.then(conversation => {
			// console.log(conversation)
			return conversation
		})
		.catch(errorMe)
}

module.exports.getAllConversation = () => {
	return Conversation.find().then(conversation => conversation)
}


module.exports.addConversation = (params) => {
	// console.log(params)
	let conversation = new Conversation({
		conversationName: params.conversationName,
		dateCreated: params.dateCreated,
		ownerOfThisConvoId: params.ownerOfThisConvoId,
		isActive: true
	})
	
	return conversation.save()
		.then((conversation, err) => {
			return (err) ? false : conversation
		})
		.catch(errorMe)
}


module.exports.updateConversation = (params) => {
	// console.log(params)
	const updates = {
        conversationName: params.toBeUpdatedConvoName,
	}
	return Conversation.findByIdAndUpdate(params.toBeUpdatedConvoId, updates)
		.then((updated, err) => {
			return (err) ? false : true 
		})
		.catch(errorMe)
}





// reference lang

// module.exports.enroll = (params) => {
// 	return User.findById(params.userId).then(user => {
// 		user.enrollments.push({ courseId: params.courseId })

// 		return user.save().then((user, err) => {
// 			return Course.findById(params.courseId).then(course => {
// 				course.enrollees.push({ userId: params.userId })

// 				return course.save().then((course, err) => {
// 					if (err) {
//                         return false
//                     } else {
//                         console.log(user.mobileNo)
//                         sms.send(user.mobileNo, `Good day! At ${ new Date().toLocaleString() }, you have enrolled on a course entitled ${ course.name }. Enjoy the course and learn continuously!`)
//                         return true
//                     }
// 				})
// 			})
// 		})
// 	})
// }