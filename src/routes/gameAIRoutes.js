const gameAIControllers = require('./../controllers/gameAIControllers.js')
const express = require('express')
const router = express.Router()
router.get('/', gameAIControllers.gameRead)
module.exports = router