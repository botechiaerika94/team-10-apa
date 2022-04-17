
const productsController = require('./../controllers/productsController.js')
const express = require('express')
const router = express.Router()
router.get('/', productsController.index)
router.get('/comuna-:comunaID', productsController.comunasP)
router.get('/local-:idLocal', productsController.detallesL)
router.get('/local-:idLocal/:idRooms', productsController.detallesR)
router.get('/CABA', productsController.listCABA)
module.exports = router
