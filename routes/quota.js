const express = require('express');
const router = express.Router();
const QuotaController = require('../Controller/Quota')


router.post('/register', QuotaController.register);

module.exports = router;