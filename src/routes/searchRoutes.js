const searchControllers = require('./../controllers/searchControllers.js');
const express = require('express');
const router = express.Router();
router.get('/categoria?', searchControllers.searchAny);
router.get('/list?', searchControllers.listByZone);
router.get('/categoria?', searchControllers.searchPrice);
module.exports = router;
