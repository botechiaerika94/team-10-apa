const searchControllers = require('./../controllers/searchControllers.js')
const express = require('express')
const router = express.Router()
router.get('/', searchControllers.search)
    // router.get('/xUbicacion', searchController.searchP)


module.exports = router