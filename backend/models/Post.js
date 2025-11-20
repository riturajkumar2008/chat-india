const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  user: String,
  caption: String,
  image: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Post', postSchema);
