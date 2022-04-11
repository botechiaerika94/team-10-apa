const staffController = require('./../controllers/staffControllers.js')
const express = require('express')
const router = express.Router()

router.get('/', staffController.index1)
router.get('/2', staffController.index2)
router.get('/3', staffController.index3)
router.get('/1', staffController.index1)

module.exports = router