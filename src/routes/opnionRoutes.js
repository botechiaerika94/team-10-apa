const mainController = require('../controllers/mainController.js')
const express = require('express');
const router = express.Router()
    /* ROUTER PARA COLLECCION MAIN  */
router.get('/', mainController.generalOpnion)
module.exports = router