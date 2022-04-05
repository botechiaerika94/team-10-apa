const staffControllers = require('./../controllers/staffControllers.js')
const express = require('express')
const router = express.Router()
router.get('/', staffControllers.dash)


module.exports = router