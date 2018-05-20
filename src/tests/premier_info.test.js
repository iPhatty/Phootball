const test = require('tape'); // eslint-disable-line
const request = require('supertest'); // eslint-disable-line
// const app = require('../app');
const nock = require('nock');
const premierInfo = require('../model/premier_info.js');
const leagueTable = require('./mocks/league-table.json');

const leagueNock = () => {
  // setup mocked backend for a specific end point
  nock('https://api.football-data.org/v1/competitions/445/leagueTable') // check to see if http or https!!
    .get('/')
    .reply(200, leagueTable);
};

test('Test tape is running', (t) => {
  t.equal(1, 1, 'Tape is working');
  t.end();
});

test('Get Premier League info', (t) => {
  // make nock call for league table
  leagueNock();

  premierInfo('http://api.football-data.org/v1/competitions/445/leagueTable', (err, league) => {
    if (err) {
      t.error(err);
    }
    t.equal(league.leagueCaption.includes('Premier'), true, 'Request contains premier league');
    t.end();
  });
});
