
const path = require('path');
const express = require('express');
const rootdir = require('../utils/path');
const router = express.Router();
router.get('/contact', (req, res, next) => {
  res.sendFile(path.join(rootdir, 'views', 'contact.html'));
});
module.exports = router;
