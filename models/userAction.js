// models/UserAction.js
const mongoose = require('mongoose');

const UserActionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  email: {
    type: String,
    required: true
  },
  actionType: {
    type: String,
    enum: ['ADD', 'DELETE', 'EDIT'],
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('UserAction', UserActionSchema);
