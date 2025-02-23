const mongoose = require('mongoose');

const CapsuleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  contributors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  content: { 
    text: String,
    media: [String]  // URLs to S3/AWS files
  },
  unlockDate: { type: Date, required: true },
  isLocked: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Capsule', CapsuleSchema);