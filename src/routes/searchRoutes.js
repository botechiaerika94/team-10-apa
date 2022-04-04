const searchController = require('./../controllers/searchControllers.js')
const express = require('express')
const router = express.Router()
router.get('/', searchController.search)
router.get('/xUbicacion', searchController.searchP)


module.exports = controller