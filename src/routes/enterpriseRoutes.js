const enterpriseControllers = require('../controllers/enterpriseControllers.js')
const express = require('express')
const router = express.Router()


router.get('/', enterpriseControllers.login)
router.get('/cadastro', enterpriseControllers.register)

module.exports = router