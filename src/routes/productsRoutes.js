const productsController = require('./../controllers/productsController.js')
const express = require('express')
const router = express.Router()
router.get('/', productsController.landingProducts)
router.get('/comuna-:comunaID', productsController.comunasP)
router.get('/local-:idLocal', productsController.detallesL)
router.get('/local-:idLocal/:idP', productsController.detallesP)
router.get('/ofertas', productsController.sale)
module.exports = router