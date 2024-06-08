// routes/apiRoutes.js

const express = require('express');
const router = express.Router();
const { saveApiCalls } = require('../controllers/apiController');
const { authenticate } = require('../middleware/authenticate');

// Route to save API calls data
router.post('/save-api-calls', saveApiCalls);

module.exports = router;
