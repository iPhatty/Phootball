const express = require('express');

const app = express();

// Home Route
app.get('/', (req, res) => {
  res.send('Hello');
});
// Set Port
app.set('port', process.env.PORT || 3000);
// Listen
app.listen(app.get('port'), () => {
  console.log('Server running on', app.get('port'));
});
module.exports = app;
