const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/task')


router.post('/addTask', (req, res) => {
	TaskController.addTask(req.body).then(task => res.send(task))
})

router.post('/getTasksOfUser', (req, res) => {
	TaskController.getTasksOfUser(req.body).then(task => res.send(task))
})

router.put('/updateTask', (req, res) => {
	TaskController.updateTask(req.body).then(task => res.send(task))
})

router.put('/updateStatusToPending', (req, res) => {
	TaskController.updateStatusToPending(req.body).then(task => res.send(task))
})

router.put('/updateStatusToOngoing', (req, res) => {
	TaskController.updateStatusToOngoing(req.body).then(task => res.send(task))
})

router.put('/updateStatusToDone', (req, res) => {
	TaskController.updateStatusToDone(req.body).then(task => res.send(task))
})

router.post('/getSpecificTask', (req, res) => {
	TaskController.getSpecificTask(req.body).then(task => res.send(task))
})

router.post('/getAllPendingTasks', (req, res) => {
	TaskController.getAllPendingTasks(req.body).then(task => res.send(task))
})


router.post('/getAllOngoingTasks', (req, res) => {
	TaskController.getAllOngoingTasks(req.body).then(task => res.send(task))
})


router.post('/getAllDoneTasks', (req, res) => {
	TaskController.getAllDoneTasks(req.body).then(task => res.send(task))
})

router.post('/getTasksThruProjectId', (req, res) => {
	TaskController.getTasksThruProjectId(req.body).then(task => res.send(task))
})

router.delete('/deleteTask', (req, res) => {
	TaskController.deleteTask(req.body).then(task => res.send(task))
})



module.exports = router;