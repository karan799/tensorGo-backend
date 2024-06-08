const Invoice = require('../models/invoice');
const User = require('../models/User');
import { get } from '../routes/billing';

exports.getBillingInfo = async (req, res) => {
  try {
    // const user = await User.findById(req.params.userId);
    // if (!user) {
    //   return res.status(404).json({ message: 'User not found' });
    // }

    // const invoices = await Invoice.find({ userId: req.params.userId });
    const invoices=this.getBillingInfo();
    res.status(200).json({ invoices });
  } catch (error) {
    console.error('Error fetching billing information', error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.generateInvoice = async (req, res) => {
  try {
    const { userId, usageDetails } = req.body;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const invoice = new Invoice({
      userId,
      usageDetails,
      createdAt: new Date(),
    });
    await invoice.save();

    res.status(200).json({ invoice });
  } catch (error) {
    console.error('Error generating invoice', error);
    res.status(500).json({ message: 'Server error' });
  }
};
