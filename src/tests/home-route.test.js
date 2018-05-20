const test = require('tape'); // eslint-disable-line
const request = require('supertest'); // eslint-disable-line
const app = require('../app');

test('Test tape is running', (t) => {
  t.equal(1, 1, 'Tape is working');
  t.end();
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
