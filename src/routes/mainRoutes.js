const mainController = require('../controllers/mainController.js')
const express = require('express');
const router = express.Router()
    /* ROUTER PARA COLLECCION MAIN  */
router.get('/', mainController.indexPage)
router.get('/home', mainController.landingUser)
module.exports = router