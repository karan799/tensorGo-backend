// controllers/invoiceController.js
const axios = require('axios');

exports.generateInvoice = async (req, res) => {
  try {
    const userId = req.params.userId;
    const invoiceDetails = {
      userId,
      amount: 100, // example amount, replace with actual calculation
      date: new Date().toISOString()
    };

    // Call the Zapier webhook
    await axios.post(process.env.ZAPIER_WEBHOOK_URL, invoiceDetails);

    res.status(200).json({ message: 'Invoice generated and notification sent', invoiceDetails });
  } catch (error) {
    console.error('Error generating invoice', error);
    res.status(500).json({ message: 'Server error' });
  }
};
