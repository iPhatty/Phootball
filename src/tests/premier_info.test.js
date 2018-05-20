const test = require('tape'); // eslint-disable-line
const request = require('supertest'); // eslint-disable-line
const app = require('../app');
const premierInfo = require('../model/premier_info.js');

test('Test tape is running', (t) => {
  t.equal(1, 1, 'Tape is working');
  t.end();
});

test('Get Premier League info', (t) => {
  premierInfo('http://api.football-data.org/v1/competitions/445/leagueTable', (err, league) => {
    if (err) {
      t.error(err);
    }
    t.equal(league.leagueCaption.includes('Premier'), true, 'Request contains premier league');
    t.end();
  });
});
