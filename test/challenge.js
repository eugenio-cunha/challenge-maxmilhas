'use strict';

require('dotenv').config();

const app = require('../src/app');
const request = require('request');
const { expect, should } = require('chai');

const url = `http://127.0.0.1:${process.env.HTTP_PORT}`;

describe('APP: Challenge', () => {
  before(done => {
    app.init(err => {
      should(err).not.exist();

      done();
    });
  });

  it(`Route: ${url}/create?cpf=33272195831&block=false`, done => {
    request.get({ uri: `${url}/create?cpf=33272195831&block=false`, json: true }, (err, res) => {
      should().not.exist(err);

      expect(res.body).to.be.deep.equal({ cpf: '33272195831' });
      done();
    });
  });

  it(`Route: ${url}/consulta?cpf=33272195831`, done => {
    request.get({ uri: `${url}/consulta?cpf=33272195831`, json: true }, (err, res) => {
      should().not.exist(err);

      const [first] = res.body;
      expect(first).to.be.deep.equal({ cpf: '33272195831', block: false });
      done();
    });
  });

  it(`Route: ${url}/block?cpf=33272195831`, done => {
    request.get({ uri: `${url}/block?cpf=33272195831`, json: true }, (err, res) => {
      should().not.exist(err);

      const [first] = res.body;
      expect(first).to.be.deep.equal({ cpf: '33272195831', block: true });
      done();
    });
  });

  it(`Route: ${url}/free?cpf=33272195831`, done => {
    request.get({ uri: `${url}/free?cpf=33272195831`, json: true }, (err, res) => {
      should().not.exist(err);

      const [first] = res.body;
      expect(first).to.be.deep.equal({ cpf: '33272195831', block: false });
      done();
    });
  });

  it(`Route: ${url}/status`, done => {
    request.get({ uri: `${url}/status`, json: true }, (err, res) => {
      should().not.exist(err);

      const { uptime, count } = res.body;
      const { create, consulta, block, free, status } = res.body.requests;

      expect(free).to.be.equal(1);
      expect(count).to.be.equal(1);
      expect(block).to.be.equal(1);
      expect(create).to.be.equal(1);
      expect(status).to.be.equal(1);
      expect(consulta).to.be.equal(1);
      expect(uptime).to.be.equal('00:00:00');

      done();
    });
  });
});
