const apiOwnerControllers = require('../controllers/apiOwnerControllers.js')
const express = require('express')
const router = express.Router()
router.get('/', apiOwnerControllers.dashAPA)
router.get('/usuarios', apiOwnerControllers.list)
router.get('/detalles-:register_user', apiOwnerControllers.showUByID)
router.get('/locales', apiOwnerControllers.listLocals)

module.exports = router