const test = require('tape'); // eslint-disable-line
const request = require('supertest'); // eslint-disable-line
const nock = require('nock'); // eslint-disable-line
const app = require('../app');
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

test('Home route access', (t) => {
  // use league nock
  leagueNock();

  request(app)
    .get('/')
    .expect(200)
    .end((err, res) => {
      t.error(err, 'No errors');
      t.equal(res.statusCode, 200, 'Should return 200');
      t.end();
    });
});
