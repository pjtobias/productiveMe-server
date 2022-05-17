const express = require('express')
const router = express.Router()
const ConversationController = require('../controllers/conversation')


router.post('/getConversationsThruAdminId', (req, res) => {
	ConversationController.getConversationsThruAdminId(req.body).then(conversation => res.send(conversation))
})

router.post('/getConversationsThruConvoId', (req, res) => {
	ConversationController.getConversationsThruConvoId(req.body).then(conversation => res.send(conversation))
})

router.get('/getAllConversation', (req, res) => {
	ConversationController.getAllConversation(req.body).then(conversation => res.send(conversation))
})

router.post('/addConversation', (req, res) => {
	ConversationController.addConversation(req.body).then(conversation => res.send(conversation))
})

router.put('/updateConversation', (req, res) => {
	ConversationController.updateConversation(req.body).then(conversation => res.send(conversation))
})



module.exports = router;