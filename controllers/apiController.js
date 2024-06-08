// controllers/apiController.js

const User = require('../models/User');
const ApiCall = require('../models/ApiCall');

// Function to save API calls data
exports.saveApiCalls = async (req, res) => {
    try {
        // const { userId } = req.user; // Get user ID from authenticated user
        const { apiCalls,email } = req.body; // Get API calls data from request body

        // Create a new API call document
        const newApiCall = new ApiCall({
            email,
            count: apiCalls,
            createdAt: new Date()
        });

        // Save the API call document to the database
        await newApiCall.save();

        res.status(200).json({ message: 'API calls data saved successfully' });
    } catch (error) {
        console.error('Error saving API calls data:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
