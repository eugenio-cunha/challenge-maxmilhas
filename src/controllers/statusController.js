'use strict';

const { requests } = require('../middleware');
const sql = require('../sql');
const { db } = require('../lib');

const uptime = () => {
  const value = process.uptime();
  const hours = Math.floor(value / (60 * 60));
  const minutes = Math.floor((value % (60 * 60)) / 60);
  const seconds = Math.floor(value % 60);

  return `${(hours < 10 ? '0' : '') + hours}:${(minutes < 10 ? '0' : '') + minutes}:${(seconds < 10 ? '0' : '') +
    seconds}`;
};

exports.query = (req, res) => {
  db.run({ script: sql.selectCpfBlock }, (err, result) => {
    if (err) return res.status(500).send('Internal Server Error');

    const [reply] = result.rows;

    res.json({
      requests,
      uptime: uptime(),
      count: parseInt(reply.count)
    });
  });
};
