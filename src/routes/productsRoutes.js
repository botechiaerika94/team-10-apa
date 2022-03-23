const productsController = require('../controllers/productsController.js')
const express = require('express');
const router = express.Router();

/* ROUTER PARA COLLECCION MAIN  */
router.get('/', productsController.landingProducts)
router.get('/comuna-:comunaID', productsController.comunas)
router.get('/comuna-:comunaID/local_id', productsController.detallesL)

module.exports = router