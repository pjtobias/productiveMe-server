const mongoose = require('mongoose');
const Project = require('../models/Project')
const User = require('../models/User')
const Conversation = require('../models/Conversation')
const Message = require('../models/Message')
const Contact = require('../models/Contact')

const errorMe = err => console.log(err)



module.exports.getListOfConvoIdsThruContactPersonId = (params) => {
	// console.log(params)
	return Contact.find({ contactPersonId: params.contactPersonId })
		.then((contact, err) => {
			// console.log(contact.contactPersonId)
			return (err) ? false : contact
		})
		.catch(errorMe)
}




module.exports.addContact = (params) => {
	// console.log(params)
	let contact = new Contact({
		convoThisContactBelongToId: params.convoThisContactBelongToId,
		contactPersonId: params.contactPersonId,
		contactPersonName: params.contactPersonName,
		isActive: true
	})

	return contact.save()
		.then((contact, err) => {
			return (err) ? false : contact
		})
		.catch(errorMe)
}



// module.exports.doesThisContactExistInThisConvo = (params) => {
	// console.log(params)
// 	return Contact.find({ contactPersonId: params.contactPersonId, convoThisContactBelongToId: params.convoThisContactBelongToId })
// 		.then(contact => {
// 			return contact.length > 0 ? true : false
// 		})
// 		.catch(errorMe)
// }

module.exports.doesThisContactExistInThisConvo = (params) => {
	// console.log(params)
	return Contact.find(
		{ $and: 
			[ 
				{ contactPersonId: params.contactPersonId }, 
				{ convoThisContactBelongToId: params.convoThisContactBelongToId } 
			] 
		})
		.then(contact => {
			return contact.length > 0 ? true : false
		})
		.catch(errorMe)
}
// { $and: [ { contactPersonId: params.contactPersonId }, { convoThisContactBelongToId: params.convoThisContactBelongToId } ] }