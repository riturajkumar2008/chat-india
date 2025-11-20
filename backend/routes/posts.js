const express = require('express');
const Post = require('../models/Post');
const router = express.Router();

// Get all posts
router.get('/', async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

// Create new post
router.post('/', async (req, res) => {
  const { user, caption, image } = req.body;
  const newPost = new Post({ user, caption, image });
  await newPost.save();
  res.json(newPost);
});

module.exports = router;
