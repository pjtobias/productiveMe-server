const mongoose = require('mongoose');
const Project = require('../models/Project')
const User = require('../models/User')

const errorMe = err => console.log(err)



module.exports.getProject = (params) => {
	// console.log(params)
	return Project.find({ adminId: params.adminId })
		.then(project => {
			// console.log(project)
			return project
		})
		.catch(errorMe)
}

module.exports.getSpecificProject = (params) => {
	// console.log(params)
	return Project.findById(params.projectId)
		.then(project => {
			return project
		})
		.catch(errorMe)
}

module.exports.getAllActiveProjects = (params) => {
	// console.log(params)
    return Project.find({ isActive: true, adminId: params.adminId}).then(project => project)
}

module.exports.getAllDoneProjects = (params) => {
    return Project.find({ isActive: false, adminId: params.adminId}).then(project => project)
}


module.exports.addProject = (params) => {
	// console.log(params)
	let project = new Project({
		projectName: params.projectName,
		dateCreated: params.dateCreated,
		dateEnd: params.dateEnd,
		adminId: params.adminId
	})

	return project.save()
		.then((project, err) => {
			return (err) ? false : true
		})
		.catch(errorMe)
}


module.exports.updateProject = (params) => {
	// console.log(params)

	const updates = {
		projectName: params.projectName,
		dateEnd: params.dateEnd
	}

	return Project.findByIdAndUpdate(params.projectId, updates)
		.then((updated, err) => {
			return (err) ? false : true
		})
		.catch(errorMe)
}



module.exports.updateIsActiveToFalse = (params) => {
	// console.log(params)
	const updates = {
		isActive: params.isActive,
	}

	return Project.findByIdAndUpdate(params.projectId, updates)
		.then((updated, err) => {
			return (err) ? false : true
		})
		.catch(errorMe)
}

module.exports.updateIsActiveToTrue = (params) => {
	// console.log(params)
	const updates = {
		isActive: params.isActive,
	}

	return Project.findByIdAndUpdate(params.projectId, updates)
		.then((updated, err) => {
			return (err) ? false : true
		})
		.catch(errorMe)
}




module.exports.deleteProject = (params) => {
	// console.log(params)

	return Project.findByIdAndDelete(params.projectId)
		.then((deleted, err) => {
			return (err) ? false : true
		})
		.catch(errorMe)
}

