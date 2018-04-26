const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const app = express();

// require controllers
const controllers = require('./controllers/index');

// Set up view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine(
  'hbs',
  exphbs({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    defaultLayout: 'main',
    // helpers,
  }),
);

// Server setup
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(controllers);
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
