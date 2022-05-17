const express = require('express')
const router = express.Router()
const UserController = require('../controllers/user')
const auth = require('../auth')


router.post('/getUser', (req, res) => {
    UserController.getUser(req.body).then(user => res.send(user))
})

router.get('/getAllUsers', (req,res) => {
    UserController.getAllUsers().then(users => res.send(users))
})

router.post('/addUser', (req,res) => {
    UserController.addUser(req.body).then(user => res.send(user))
})

router.post('/isThisEmailExists', (req,res) => {
    UserController.isThisEmailExists(req.body).then(user => res.send(user))
})

router.put('/updateUser', (req,res) => {
    UserController.updateUser(req.body).then(user => res.send(user))
})

router.put('/updatePw', (req,res) => {
    UserController.updatePw(req.body).then(user => res.send(user))
})

router.post('/signIn', (req,res) => {
    UserController.signIn(req.body).then(user => res.send(user))
})

router.get('/details', auth.verify, (req, res) => {
    const user = auth.decode(req.headers.authorization)
    // console.log(user)
    UserController.details({ userId: user.id }).then(user => res.send(user))
})


module.exports = router