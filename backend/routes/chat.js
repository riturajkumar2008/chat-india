const express = require('express');
const Message = require('../models/Message');
const router = express.Router();

// Get all messages
router.get('/', async (req, res) => {
  const messages = await Message.find();
  res.json(messages);
});

// Send new message
router.post('/', async (req, res) => {
  const { from, to, text } = req.body;
  const newMessage = new Message({ from, to, text });
  await newMessage.save();
  res.json(newMessage);
});

module.exports = router;
