const premierInfo = require('../model/premier_info.js');

exports.get = (req, res, next) => {
  const { id } = req.params;

  premierInfo(`http://api.football-data.org/v1/teams/${id}/`, (err, team) => {
    // API call for past 7 days fixtures
    premierInfo(`http://api.football-data.org/v1/teams/${id}/fixtures?timeFrame=p7`, (err1, pastFixtures) => {
      if (err1) {
        next(err1);
      }
      return res.render('team', { team, pastFixtures });
      // // Second API call for next 7 days fixtures
      // premierInfo(`http://api.football-data.org/v1/teams/${id}/fixtures?timeFrame=n7`, (err2, nextFixtures) => {
      //   if (err2) {
      //     next(err2);
      //   }

      //   const notFinished = nextFixtures.fixtures.filter(object => object.status === 'TIMED');
      // });
    });
  });
};
