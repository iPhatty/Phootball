const premierInfo = require('../model/premier_info.js');

exports.get = (req, res) => {
  premierInfo('http://api.football-data.org/v1/competitions/445/leagueTable');
  res.render('home');
};
