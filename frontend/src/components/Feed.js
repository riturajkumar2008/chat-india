import React, { useEffect, useState } from 'react';
import { API_URL } from '../api';

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}posts`)
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="border p-4 bg-white rounded">
      <h2 className="font-bold">Feed</h2>
      <ul>
        {posts.map((post, i) => (
          <li key={i} className="mb-2">{post.content}</li>
        ))}
      </ul>
    </div>
  );
}

export default Feed;
