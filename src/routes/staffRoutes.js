const staffController = require('./../controllers/staffControllers.js')
const express = require('express');
const router = express.Router();

router.get('/', staffController.index)

module.exports = router