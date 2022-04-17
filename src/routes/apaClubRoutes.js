const apaClubController = require('../controllers/apaClubControllers.js')
const express = require('express');
const router = express.Router();

/* ROUTER PARA COLLECCION MAIN  */
router.get('/', apaClubController.apaClub)
router.get('/buscarApa', apaClubController.buscar)
    //router.get('/primerIngreso/:register_user', apaClubController.miCuenta)
    //router.get('/perfil/:register_user', apaClubController.read)
    //router.get('/editarPerfil/:register_user', apaClubController.edit)
    //router.post('/editarPerfil/:register_user ', apaClubController.edit)
    //router.post('/editarPerfil/:register_user ', apaClubController.storage)
    //router.delete('/editarPerfil/:register_user ', apaClubController.delete)
router.get('/miAPAcarrito', apaClubController.showCart)
module.exports = router