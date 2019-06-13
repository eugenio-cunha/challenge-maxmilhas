'use strict';

module.exports = Object.freeze({
  selectCpfBlock: 'SELECT COUNT(cpf) FROM black_list WHERE block = true;',
  selectRequest: 'SELECT COUNT(id), path FROM request GROUP BY path;',
  selectCpf: 'SELECT cpf, block FROM black_list WHERE cpf = $1::VARCHAR;',
  createCpf: 'INSERT INTO black_list (cpf, block) values ($1::VARCHAR, $2::BOOLEAN) RETURNING cpf;',
  updateCpf: 'UPDATE black_list SET block = $2::BOOLEAN WHERE cpf = $1::VARCHAR RETURNING cpf, block;'
});
