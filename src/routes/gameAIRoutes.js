const enterpriseControllers = require('../controllers/enterpriseControllers.js')
const express = require('express')
const router = express.Router()
router.get('/', enterpriseControllers.gameCover)
module.exports = routes