const apaClubController = require('../controllers/apaClubControllers.js')
const express = require('express');
const router = express.Router();

/* ROUTER PARA COLLECCION MAIN  */
router.get('/', apaClubController.apaClub)
router.get('/buscarApa', apaClubController.buscar)
router.get('/socio', apaClubController.miCuenta)


module.exports = router