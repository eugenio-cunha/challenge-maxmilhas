'use strict';

const express = require('express');
const { log } = require('../middleware');

const router = express.Router();

router.all('*', log);

router.use('/', require('./homeRouter'));

router.use('/', require('./cpfRouter'));

router.use('/', require('./statusRouter'));

module.exports = router;
