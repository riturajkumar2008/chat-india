import React, { useEffect, useState } from 'react';

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("
