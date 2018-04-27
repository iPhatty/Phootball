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
    if (err) {
      callback(err);
    } else {
      const results = JSON.parse(body);
      console.log(results);
      callback(null, results);
    }
  });
}

module.exports = getPremier;
