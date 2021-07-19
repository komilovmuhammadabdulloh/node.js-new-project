const express = require('express');
const router = express.Router();
const AdminController = require('../Controller/Admin.js')


router.post('/register', AdminController.register);

module.exports = router;