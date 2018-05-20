const premierInfo = require('../model/premier_info.js');

exports.get = (req, res, next) => {
  const { id } = req.params;
  // API call for past 7 days fixtures
  premierInfo(`http://api.football-data.org/v1/teams/${id}/fixtures?timeFrame=p7`, (err1, pastFixtures) => {
    if (err1) {
      next(err1);
    }
    // Second API call for next 7 days fixtures
    premierInfo(`http://api.football-data.org/v1/teams/${id}/fixtures?timeFrame=n7`, (err2, nextFixtures) => {
      if (err2) {
        next(err2);
      }

      //   console.log(nextFixtures.fixtures[0].status);

      const notFinished = nextFixtures.fixtures.filter(object => object.status === 'TIMED');


      return res.render('home', { pastFixtures }, { notFinished });
    });
  });
};
