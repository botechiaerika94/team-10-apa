const staffController = require('./../controllers/staffControllers.js')
const express = require('express')
const router = express.Router()
router.get('/', staffController.listE)
router.get('/entries', staffController.createE)
module.exports = router