const axios = require('axios');
const { getMaxListeners } = require('../models/invoice');

const getBillingInfo = async (req, res) => {
  console.log("Fetching billing info");
  // Implement the logic to fetch billing information from your database
  res.status(200).json({
    cycle: 'June 2024',
    usage: '1500 API Calls'
  });
};

const generateInvoice = async (req, res) => {
  try {
    console.log(req.body);
    const emailId = "kb6789123@gmail.com";
    const amount = req.body.amount; // Example amount, replace with actual calculation
    const invoiceId = 'INV-12345';
    const date = new Date().toISOString();

    
    // Prepare payload for Zapier webhook
    const payload = {
      emailId,
      invoiceId,
      amount: `$${amount.toFixed(2)}`,
      date
    };

    // Call the Zapier webhook
    const zapierResponse = await axios.post(ZAPIER_WEBHOOK_URL,payload);

    // Log the response from Zapier
    console.log('Zapier response:', zapierResponse.data);

    res.status(200).json({
      invoiceId: 'INV-12345',
      amount: '$150.00',
      date: new Date()
    });
  } catch (error) {
    console.error('Error generating invoice', error.response ? error.response.data : error.message);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getBillingInfo, generateInvoice };
