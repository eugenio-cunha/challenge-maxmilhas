'use strict';

const router = require('express').Router();
const { cpfController } = require('../controllers');

router.get('/consulta', cpfController.query);

router.get('/create', cpfController.create);

router.get('/block', cpfController.block);

router.get('/free', cpfController.free);

module.exports = router;
