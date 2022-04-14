const staffController = require('./../controllers/staffControllers.js')
const express = require('express');
const router = express.Router();

router.get('/', staffController.index)
router.get('/registroDiario', staffController.staff01)
router.get('/perfil/:idStaff', staffController.staff02)
router.get('/cadastro/:idStaff', staffController.createID)
module.exports = router