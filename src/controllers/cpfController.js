'use strict';

const sql = require('../sql');
const { db } = require('../lib');
const { validator } = require('../lib');

exports.create = (req, res) => {
  const { cpf, block } = req.query;

  if (!block) return res.status(400).send('Invalid block status');
  if (!validator.isValidCPF(cpf)) return res.status(400).send('Invalid CPF');

  db.run({ script: sql.createCpf, params: [cpf, block] }, (err, result) => {
    if (err) return res.status(500).send('Internal Server Error');
    if (result.rows.length === 0) return res.status(404).send('Resource not found');

    const [reply] = result.rows;

    res.json(reply);
  });
};

exports.query = (req, res) => {
  const { cpf } = req.query;

  if (!validator.isValidCPF(cpf)) return res.status(400).send('Invalid CPF');

  db.run({ script: sql.selectCpf, params: [cpf] }, (err, result) => {
    if (err) return res.status(500).send('Internal Server Error');
    if (result.rows.length === 0) return res.status(404).send('Resource not found');

    res.json(result.rows);
  });
};

exports.block = (req, res) => {
  const { cpf } = req.query;

  if (!validator.isValidCPF(cpf)) return res.status(400).send('Invalid CPF');

  db.run({ script: sql.updateCpf, params: [cpf, true] }, (err, result) => {
    if (err) return res.status(500).send('Internal Server Error');
    if (result.rows.length === 0) return res.status(404).send('Resource not found');

    res.json(result.rows);
  });
};

exports.free = (req, res) => {
  const { cpf } = req.query;

  if (!validator.isValidCPF(cpf)) return res.status(400).send('Invalid CPF');

  db.run({ script: sql.updateCpf, params: [cpf, false] }, (err, result) => {
    if (err) return res.status(500).send('Internal Server Error');
    if (result.rows.length === 0) return res.status(404).send('Resource not found');

    res.json(result.rows);
  });
};
