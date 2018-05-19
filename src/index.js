const app = require('./app');

const port = app.get('port');

// Listen
app.listen(port, () => {
  console.log('Server running on', app.get('port'));
});
