const mongoose = require('mongoose');
const Project = require('../models/Project')
const User = require('../models/User')
const Task = require('../models/Task')

const errorMe = err => console.log(err)



module.exports.addTask = (params) => {
	// console.log(params)

	let task = new Task({
		taskName: params.taskName,
		description: params.description,
		status: "pending",
		projectThisTaskBelongToId: params.projectThisTaskBelongToId,
		userAssignedInThisTaskId: params.userAssignedInThisTaskId,
		adminOfThisProjectId: params.adminOfThisProjectId
	})

	return task.save()
		.then((task, err) => {
			return (err) ? false : true
		})
		.catch(errorMe)
}






module.exports.getTasksOfUser = (params) => {
	// console.log(params)
	return Task.find({ userAssignedInThisTaskId: params.userId })
		.then(task => {
			return task
		})
		.catch(errorMe)
}




module.exports.updateTask = (params) => {
	// console.log(params)

	const updates = {
		taskName: params.taskName,
		description: params.description
	}

	return Task.findByIdAndUpdate(params.taskId, updates)
		.then((updated, err) => {
			return (err) ? false : true
		})
		.catch(errorMe)
}


module.exports.updateStatusToPending = (params) => {
	// console.log(params)

	const updates = {
		status: params.status
	}

	return Task.findByIdAndUpdate(params.taskId, updates)
		.then((updated, err) => {
			return (err) ? false : true
		})
		.catch(errorMe)
}

module.exports.updateStatusToOngoing = (params) => {
	// console.log(params)

	const updates = {
		status: params.status
	}

	return Task.findByIdAndUpdate(params.taskId, updates)
		.then((updated, err) => {
			return (err) ? false : true
		})
		.catch(errorMe)
}

module.exports.updateStatusToDone = (params) => {
	// console.log(params)

	const updates = {
		status: params.status
	}

	return Task.findByIdAndUpdate(params.taskId, updates)
		.then((updated, err) => {
			return (err) ? false : true
		})
		.catch(errorMe)
}



module.exports.getSpecificTask = (params) => {
	// console.log(params)
	// console.log("dito na ko")
	return Task.findById(params.taskId)
		.then(task => {
			return task
		})
		.catch(errorMe)
}



module.exports.getAllPendingTasks = (params) => {
	// console.log(params)
    return Task.find({ status: "pending", userAssignedInThisTaskId: params.userId}).then(task => task)
}

module.exports.getAllOngoingTasks = (params) => {
    return Task.find({ status: "ongoing", userAssignedInThisTaskId: params.userId}).then(task => task)
}

module.exports.getAllDoneTasks = (params) => {
    return Task.find({ status: "done", userAssignedInThisTaskId: params.userId}).then(task => task)
}

 // && {userAssignedInThisTaskId: params.userId}