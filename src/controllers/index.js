const express = require('express');

const router = express.Router();
// const path = require('path');

// Controllers
const home = require('./home');

// Routes
router.get('/', home.get);
router.get('/:team', (req, res, next) => {
  res.send('hello');
});

module.exports = router;
