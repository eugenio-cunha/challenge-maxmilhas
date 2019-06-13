'use strict';

const requests = {};

const log = (req, res, next) => {
  const path = req.path.replace('/', '');
  requests[path] = requests[path] >= 0 ? requests[path] + 1 : 1;
  next();
};

module.exports = {
  log,
  requests
};
