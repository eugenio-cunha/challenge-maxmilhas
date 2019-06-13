'use strict';

const router = require('express').Router();
const { statusController } = require('../controllers');

router.get('/status', statusController.query);

module.exports = router;
