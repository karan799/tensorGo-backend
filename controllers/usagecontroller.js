// const Usage = require('../models/Usage');
// const User = require('../models/User');

exports.getUsageDetails = async (req, res) => {
  try {
    // const user = await User.findById(req.params.userId);
    // if (!user) {
    //   return res.status(404).json({ message: 'User not found' });
    // }

    // const usageDetails = await Usage.find({ userId: req.params.userId });
    const usageDetails = [
      { id: 1, metric: 'API Calls', value: 1500 },
      { id: 2, metric: 'Storage Used', value: '1.2GB' }
    ];
    res.status(200).json(usageDetails);
  } catch (error) {
    console.error('Error fetching usage details', error);
    res.status(500).json({ message: 'Server error' });
  }
};
