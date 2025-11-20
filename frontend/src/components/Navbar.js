import React from 'react';

function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-blue-600 p-4 text-white">
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="Chat India Logo" className="h-8 w-8 rounded-full" />
        <span className="font-bold text-lg">Chat India</span>
      </div>
      <div className="space-x-4">
        <a href="/" className="hover:underline">Feed</a>
        <a href="/chat" className="hover:underline">Chat</a>
        <a href="/profile" className="hover:underline">Profile</a>
      </div>
    </nav>
  );
}

export default Navbar;
