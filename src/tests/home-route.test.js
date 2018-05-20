const test = require('tape'); // eslint-disable-line
const request = require('supertest'); // eslint-disable-line
const nock = require('nock'); // eslint-disable-line
const app = require('../app');

test('Test tape is running', (t) => {
  t.equal(1, 1, 'Tape is working');
  t.end();
});

test.only('Testing API with a mocked backend', (t) => {
  // setup mocked backend for a specific end point
  nock('http://api.football-data.org/v1/competitions/445/leagueTable')
    .get('/')
    .reply(200, {
      status: 200,
      message: 'Home reached',
    });

  // supertest
  request(app)
    .get('/')
    .expect(200)
    .end((err, res) => {
      t.equal(res.body.message, 'Home reached', 'Should return message');
      t.end();
    });
});

test('Home route access', (t) => {
  request(app)
    .get('/')
    .expect(200)
    .end((err, res) => {
      t.error(err, 'No errors');
      t.equal(res.statusCode, 200, 'Should return 200');
      t.end();
    });
});
