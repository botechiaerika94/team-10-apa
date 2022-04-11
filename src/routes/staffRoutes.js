const staffController = require('./../controllers/staffControllers.js')
const express = require('express')
const router = express.Router()

router.get('/', staffController.index);
router.get('/equipo', staffController.readStaff);
router.get('/3', staffController.index3);


module.exports = router