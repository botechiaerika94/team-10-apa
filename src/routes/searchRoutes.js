const searchControllers = require('./../controllers/searchControllers.js')
const express = require('express')
const router = express.Router()
router.get('/apa-club/buscarApa', .searchControllers.searchComunas)
    // router.get('/xUbicacion', searchController.searchP)

module.exports = router