const apiOwnerController = require('../controllers/apiOwnerControllers.js')
const express = require('express')
const router = express.Router()
router.get('/', apiOwnerController.listUsers)

module.exports = router