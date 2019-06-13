'use strict';

const { Pool } = require('pg');

const pool = new Pool({
  connectionString: `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}`
});

const run = ({ script, params }, callback) => pool.query(script, params, callback);

module.exports = { run };
