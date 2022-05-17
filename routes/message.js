const express = require('express')
const router = express.Router()
const MessageController = require('../controllers/message')


router.post('/getMessagesThruConvoId', (req, res) => {
	MessageController.getMessagesThruConvoId(req.body).then(message => res.send(message))
})

router.post('/isTheUserInThisConvo', (req, res) => {
	MessageController.isTheUserInThisConvo(req.body).then(message => res.send(message))
})

router.post('/getConvoIdThruMessageDetails', (req, res) => {
	MessageController.getConvoIdThruMessageDetails(req.body).then(message => res.send(message))
})

router.post('/getAllConvoIdOfThisUser', (req, res) => {
	MessageController.getAllConvoIdOfThisUser(req.body).then(message => res.send(message))
})

router.post('/addMessage', (req, res) => {
	MessageController.addMessage(req.body).then(message => res.send(message))
})

router.post('/addMessageAsReport', (req, res) => {
	MessageController.addMessageAsReport(req.body).then(message => res.send(message))
})



module.exports = router;