const axios = require('axios');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.googleAuth = async (req, res) => {
  const { token } = req.body;
  console.log(token);
  try {
    // Verify the access token by calling the Google token info endpoint
    const response = await axios.get(`https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${token}`);
    const { user_id: googleId, email, name, picture } = response.data;

    let user = await User.findOne({ googleId });
    if (!user) {
      user = new User({ googleId, name, email, picture });
      await user.save();
    }

    const payload = { userId: user._id };
    const jwtToken = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ user, token: jwtToken });
  } catch (error) {
    console.error('Error during Google authentication', error);
    res.status(500).json({ message: 'Server error' });
  }
};
