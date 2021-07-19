const express = require('express');
const router = express.Router();
const DriverController = require('../Controller/Driver')


router.post('/register', DriverController.register);

module.exports = router;