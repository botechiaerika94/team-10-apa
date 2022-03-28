const productsController = require('../controllers/productsController.js')
const express = require('express');
const router = express.Router();

/* ROUTER PARA COLLECCION PRODUCTS  */
router.get('/', productsController.landingProducts)
router.get('/comuna-:comunaID', productsController.comunasP)
router.get('/pOFefe', productsController.ofefe)
router.get('/ofertas', productsController.sale)
router.get('/NS', productsController.pn)
module.exports = router;