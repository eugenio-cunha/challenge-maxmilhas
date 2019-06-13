'use strict';

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const path = require('path');
const cors = require('cors');
const express = require('express');
const engine = require('ejs').__express;
const bodyParser = require('body-parser');

exports.init = callback => {
  const server = express();

  server.engine('.html', engine);
  server.set('view engine', 'html');
  server.set('views', path.join(__dirname, 'views'));
  server.use(express.static(path.join(__dirname, 'public')));

  server.disable('x-powered-by');
  server.disable('etag');

  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(bodyParser.json());
  server.use(cors());

  server.use('/', require('./routes'));

  server.listen(process.env.HTTP_PORT, callback);
};
