const request = require('request');
const env = require('env2')('.env'); // eslint-disable-line


function getPremier(url, callback) {
  const options = {
    url,
    headers: {
      'X-Auth-Token': process.env.API_KEY,
    },
  };

  request(options, (err, res, body) => {
    console.log('err: ', err);
    console.log('res: ', res);
    console.log('body ', body);
  });
}

module.exports = getPremier;
