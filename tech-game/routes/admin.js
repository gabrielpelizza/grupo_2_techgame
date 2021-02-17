var express = require('express');
var router = express.Router();

const adminController = require('../controllers/adminController');
router.get('/', adminController.crud);


module.exports = router;
