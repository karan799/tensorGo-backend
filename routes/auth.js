const express = require('express');
const router = express.Router();
const { googleAuth } = require('../controllers/authcontroller');

router.post('/google', googleAuth);

module.exports = router;
