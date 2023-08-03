

const express = require('express');
const router = express.Router();
const shopController = require('../controllers/productcontroller');


// Middleware
router.get('/',shopController.getShop );

module.exports = router;




// const path = require('path');

// const express = require('express');

// const rootdir = require('../utils/path');

// const router = express.Router();

// router.get('/', (req, res, next) => {
//   res.sendFile(path.join(rootdir, 'views', 'shop.html'));
// });

// module.exports = router;

