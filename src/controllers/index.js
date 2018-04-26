const express = require('express');

const router = express.Router();
// const path = require('path');

// Controllers
const home = require('./home');

router.get('/', home.get);

module.exports = router;
