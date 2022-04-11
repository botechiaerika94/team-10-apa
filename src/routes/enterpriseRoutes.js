const enterpriseControllers = require('../controllers/enterpriseControllers.js')
const express = require('express')
const router = express.Router()


router.get('/', enterpriseControllers.login)
router.get('/club', enterpriseControllers.clubE)
router.get('/cadastro', enterpriseControllers.register)
router.post('/cadastro', enterpriseControllers.create)
router.post('/cadastro/:rgL', enterpriseControllers.create)
module.exports = router