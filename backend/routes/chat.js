const express = require('express');
const router = express.Router();

let messages = [
  { id: 1, from: "Alice", to: "Bob", text: "Hi Bob!" },
  { id: 2, from: "Bob", to: "Alice", text: "Hello Alice!" }
];

// GET all messages
router.get('/', (req, res) => {
  res.json(messages);
});

// Send new message
router.post('/', (req, res) => {
  const { from, to, text } = req.body;
  const newMessage = { id: messages.length + 1, from, to, text };
  messages.push(newMessage);
  res.json(newMessage);
});

module.exports = router;
