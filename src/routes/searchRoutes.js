const searchControllers = require('./../controllers/searchControllers.js')
const express = require('express')
const router = express.Router()
router.get('/categoria?', searchControllers.searchAny)
router.get('/categoria?', searchControllers.searchZone)
router.get('/categoria?', searchControllers.searchPrice)
module.exports = router
