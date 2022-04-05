const usersController = require('./../controllers/usersControllers.js')
const express = require('express');
const router = express.Router();

router.get('/', usersController.login)
router.get('/nuevos-socios', usersController.crearCuenta)
router.get('/mi-cuenta', usersController.readPerfil)
module.exports = router