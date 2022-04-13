const staffController = require('./../controllers/staffControllers.js')
const express = require('express');
const router = express.Router();

router.get('/', staffController.index)
router.get('/registroDiario', staffController.staff01)
router.get('/dadosStaff/:idStaff', staffController.staff02)
module.exports = router