const mongoose = require('mongoose')  
// import { userSchema } from '../models/User'
const User = require('../models/User')
const bcrypt = require('bcrypt')
const auth = require('../auth')

// const User = mongoose.model('User', userSchema);


const errorMe = err => console.log(err)


module.exports.getUser = (params) => {
	// console.log(params)
	return User.findById(params.userId)
		.then(user => {
			return user
		})
		.catch(errorMe)
}

module.exports.getAllUsers = () => {
    return User.find().then(user => user)
}

module.exports.isThisEmailExists = (params) => {
	// console.log(params)
	return User.find({ email: params.email })
		.then(result => {
			return result.length > 0 ? true : false
		})
		.catch(errorMe)
}


module.exports.addUser = (params) => {
	// console.log(params)
	let user = new User({
        firstName: params.firstName,
        lastName: params.lastName,
        contactNo: params.contactNo,
		email: params.email,
		pw: bcrypt.hashSync(params.pw, 10),
        accessType: 'member',
        numberOfSignIns: 0
	})
    return user.save()
	    .then((user, err) => {
			return (err) ? false : true
	    })
	    .catch(errorMe)
}


module.exports.updateUser = (params) => {
	// console.log(params)
	const updates = {
        firstName: params.firstName,
        lastName: params.lastName,
        contactNo: params.contactNo,
		email: params.email
	}
	return User.findByIdAndUpdate(params.userId, updates)
		.then((updated, err) => {
			return (err) ? false : true 
		})
		.catch(errorMe)
}

module.exports.updatePw = (params) => {
	// console.log(params)


	const updates = {
        pw: bcrypt.hashSync(params.newPw, 10)
	}

	return User.findById({ _id: params.userId})
		.then( user => {
			if ((params.newPw === "" && params.newPwB === "") || ((params.newPw === "") || (params.newPwB ===""))) {
				return { error: 'no-entered-new-pw'}
			}

			if (params.newPw !== params.newPwB) {
				return { error: 'confirm-failed'}
			}
			const isPasswordMatched = bcrypt.compareSync(params.pw, user.pw)
			console.log(updates)
			if (isPasswordMatched) {
				return User.findByIdAndUpdate(params.userId, updates)
					.then((updated, err) => {
						return true 
					})
					.catch(errorMe)
			} else {
				return false
			}
		})
}


module.exports.signIn = (params) => {
	// console.log(params)

	return User.findOne({ email: params.email})
		.then( user => {
			if ( user === null ) {
				return { error: 'email-not-existing' }
			}

			const isPasswordMatched = bcrypt.compareSync(params.pw, user.pw)

	        if (isPasswordMatched) {
	            return { 
	            	accessToken: auth.createAccessToken(user.toObject())
	            }
	        } else {
	            return { error: 'incorrect-password'};
	        }
		})
}

module.exports.details = (params) => {
    return User.findById(params.userId)
    .then(user => {
        //clear the password property of the user object for security
        // console.log(user)
        return user
    })
    .catch(errorMe)
}

