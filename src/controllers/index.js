const express = require('express');

const router = express.Router();
// const path = require('path');

// Controllers
const home = require('./home');
const team = require('./team');

// Routes
router.get('/', home.get);
router.get('/:id', team.get);

module.exports = router;
