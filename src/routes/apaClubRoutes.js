const apaClubController = require('../controllers/apaClubControllers.js')
const express = require('express');
const router = express.Router();

/* ROUTER PARA COLLECCION MAIN  */
router.get('/', apaClubController.iniciarU)
router.get('/buscarApa', apaClubController.buscar)
router.get('/validandoLogin', apaClubController.validarU)
router.get('/soySocio', apaClubController.miCuenta)


module.exports = router