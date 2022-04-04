const searchController = require('./../controllers/searchRoutes.js')
const express = require('express')
const router = express.Router()
router.get('/', searchController.search)
router.get('/xUbicacion', searchController.searchP)
router.get = router