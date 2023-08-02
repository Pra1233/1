const path = require('path');
const express = require('express');
const rootdir = require('../utils/path');
const router = express.Router();

router.post('/success', (req, res, next) => {
  res.send('<h1>Form successfuly filled </h1>');
});

module.exports = router;
