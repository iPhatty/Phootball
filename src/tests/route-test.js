const test = require('tape');
const request = require('supertest');
const app = require('../app');

test('Test tape is running', t => {
    t.equal(1,1, 'Tape is working');
    t.end();
})