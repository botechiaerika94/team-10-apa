const apiOwnerControllers = require('../controllers/apiOwnerControllers.js')
const express = require('express')
const router = express.Router()
router.get('/', apiOwnerControllers.dashAPA)
router.get('/sociosApa', apiOwnerControllers.list)
router.get('/sociosApa/:register_user', apiOwnerControllers.showUByID)
router.get('/locales', apiOwnerControllers.listLocals)
router.get('/newEnterprise', apiOwnerControllers.createLocal)
module.exports = router