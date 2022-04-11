const apiOwnerControllers = require('../controllers/apiOwnerControllers.js')
const express = require('express')
const router = express.Router();
router.get('/', apiOwnerControllers.dashAPA);
router.get('/sociosApa', apiOwnerControllers.listSocios);
router.get('/sociosApa/:rgU', apiOwnerControllers.showRGU);
router.get('/locales', apiOwnerControllers.listLocals);
router.get('/locales/:rgL', apiOwnerControllers.showRGL);

module.exports = router