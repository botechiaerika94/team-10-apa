const mainController = require('./../controllers/mainControlle.js')
const express = require('express')
const router = express.Router()
router.get('/', mainController.indexPage)
router.get('/home', mainController.landingUser)
module.exports = router