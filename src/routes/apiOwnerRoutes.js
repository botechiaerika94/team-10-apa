const apiOwnerController = require('../controllers/apiOwnerControllers.js')
const express = require('express')
const router = express.Router()
router.get('/', apiOwnerController.list)
router.get('/detalles-:register_user', apiOwnerController.read)
    //router.get('/create/:', apiOwnerController.read)
module.exports = router