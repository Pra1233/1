
const path = require('path');
const express = require('express');
const rootdir = require('../utils/path');
const router = express.Router();
const productcontroller=require('../controllers/productcontroller');


router.get('/contact',productcontroller.getContact );
module.exports = router;
