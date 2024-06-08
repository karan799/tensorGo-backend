const express = require('express');
const router = express.Router();
const { getBillingInfo, generateInvoice } = require('../services/billingService');

router.get('/:userId', getBillingInfo);
router.post('/generate', generateInvoice);

module.exports = router;
