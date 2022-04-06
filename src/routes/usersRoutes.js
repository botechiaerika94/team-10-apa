const usersControllers = require('./../controllers/usersControllers.js')
const express = require('express');
const router = express.Router()

router.get('/', usersControllers.login)
router.get('/nuevos-socios', usersControllers.crearCuenta)

module.exports = router