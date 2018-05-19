const premierInfo = require('../model/premier_info.js');

exports.get = (req, res, next) => {
  premierInfo('http://api.football-data.org/v1/competitions/445/leagueTable', (err, league) => {
    if (err) {
      next(err);
    }

    // Append team API id
    league.standing.forEach((element) => {
      element.id = element._links.team.href.split('/')[5];
    });
    console.log(league);
    return res.render('home', { league });
  });
};
