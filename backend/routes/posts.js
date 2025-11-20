const express = require('express');
const router = express.Router();

let posts = [
  { id: 1, user: "Alice", caption: "Hello world!", image: "/logo.png" },
  { id: 2, user: "Bob", caption: "My first post", image: "/logo.png" }
];

// GET all posts
router.get('/', (req, res) => {
  res.json(posts);
});

// Create new post
router.post('/', (req, res) => {
  const { user, caption, image } = req.body;
  const newPost = { id: posts.length + 1, user, caption, image };
  posts.push(newPost);
  res.json(newPost);
});

module.exports = router;
