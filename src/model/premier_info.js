const request = require('request');
const env = require('env2')('../../.env');

const options = {
  url: 'https://api.github.com/repos/request/request',
  headers: {
    'X-Auth-Token': process.env.API_KEY,
  },
};
