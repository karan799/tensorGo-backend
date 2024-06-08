const express = require('express');
const router = express.Router();
const { getUsageDetails } = require('../controllers/usageController');

router.get('/:userId', getUsageDetails);

module.exports = router;
