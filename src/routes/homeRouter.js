'use strict';

const router = require('express').Router();
const { homeController } = require('../controllers');

router.get('/', homeController.home);

module.exports = router;
