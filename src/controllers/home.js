const premierInfo = require('../model/premier_info.js');

exports.get = (req, res, next) => {
  premierInfo('http://api.football-data.org/v1/competitions/445/leagueTable', (err, league) => {
    if (err) {
      next(err);
    }
    return res.render('home', { league });
  });
};
