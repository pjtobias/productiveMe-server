const express = require('express')
const router = express.Router()
const ProjectController = require('../controllers/project')


router.post('/getProject', (req, res) => {
	ProjectController.getProject(req.body).then(project => res.send(project))
})

router.post('/getSpecificProject', (req, res) => {
	ProjectController.getSpecificProject(req.body).then(project => res.send(project))
})

router.post('/getAllActiveProjects', (req,res) => {
	ProjectController.getAllActiveProjects(req.body).then(project => res.send(project))
})

router.post('/getAllDoneProjects', (req,res) => {
	ProjectController.getAllDoneProjects(req.body).then(project => res.send(project))
})

router.post('/addProject', (req, res) => {
	ProjectController.addProject(req.body).then(project => res.send(project))
})

router.put('/updateProject', (req, res) => {
	ProjectController.updateProject(req.body).then(project => res.send(project))
})

router.put('/updateIsActiveToFalse', (req, res) => {
	ProjectController.updateIsActiveToFalse(req.body).then(project => res.send(project))
})

router.put('/updateIsActiveToTrue', (req, res) => {
	ProjectController.updateIsActiveToTrue(req.body).then(project => res.send(project))
})


module.exports = router;