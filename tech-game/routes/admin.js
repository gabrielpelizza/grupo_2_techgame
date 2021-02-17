var express = require('express');
var router = express.Router();

/* GET home page. */
const adminController = require('../controllers/adminController');
router.get('/crud', adminController.crud);

module.exports = router;
