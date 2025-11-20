import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Chat from './components/Chat';
import Feed from './components/Feed';
import { io } from 'socket.io-client';

// ✅ Backend URL
const BACKEND_URL = "https://chat-india-com.onrender.com/";

function App() {
  const [messages, setMessages] = useState([]);
  const socket = io(BACKEND_URL);

  useEffect(() => {
    // जब user connect होगा
    socket.on("connect", () => {
      console.log("Connected to backend:", BACKEND_URL);
    });

    // जब नया message आएगा
    socket.on("message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    // cleanup
    return () => {
      socket.disconnect();
    };
  }, [socket]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <h1 className="text-center text-2xl font-bold mt-4">Welcome to Chat India</h1>
      <div className="grid grid-cols-2 gap-4 p-4">
        <Feed />
        {/* ✅ Chat component को messages pass कर रहे हैं */}
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;

