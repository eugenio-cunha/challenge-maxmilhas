'use strict';

exports.home = (_req, res) => {
  res.render('home', {
    title: 'Challenge',
    header: 'APP Node challenge'
  });
};
