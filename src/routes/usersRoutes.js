const mainController = require('./../controllers/mainControllers.js')
const express = require('express');
const router = express.Router();
router.get('/', usuariosRouters.usuariosCover)
router.get('/login', usuariosRouters.iniciarSeccion)
router.get('/login/miCuenta' , usuariosRouters.miCuenta)
router.get('/login/error' , usuariosRouters.loginError)
router.get('/crearCuenta', usuariosRouters.crearCuenta)
router.get('/crearCuenta/miCuenta' , usuariosRouters.nuevaCuenta)
module.exports = router