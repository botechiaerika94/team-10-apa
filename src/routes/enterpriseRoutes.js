const enterpriseController = require('../controllers/enterpriseController.js')
const express = require('express')
const router = express.Router()


router.get('/', enterpriseController.login)

module.exports = router