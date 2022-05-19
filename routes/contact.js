const express = require('express')
const router = express.Router()
const ContactController = require('../controllers/contact')


router.post('/getListOfConvoIdsThruContactPersonId', (req, res) => {
	ContactController.getListOfConvoIdsThruContactPersonId(req.body).then(contact => res.send(contact))
})


router.post('/addContact', (req, res) => {
	ContactController.addContact(req.body).then(contact => res.send(contact))
})

router.post('/doesThisContactExistInThisConvo', (req, res) => {
	ContactController.doesThisContactExistInThisConvo(req.body).then(contact => res.send(contact))
})

router.post('/getListContactInAConvo', (req, res) => {
	ContactController.getListContactInAConvo(req.body).then(contact => res.send(contact))
})



module.exports = router;