import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Chat from './components/Chat';
import Feed from './components/Feed';
import Login from './pages/Login';
import Profile from './pages/Profile';
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
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <Navbar />
        <h1 className="text-center text-2xl font-bold mt-4">Welcome to Chat India</h1>
        <div className="p-4">
          <Routes>
            {/* ✅ Routes */}
            <Route path="/" element={<Feed />} />
            <Route path="/chat" element={<Chat messages={messages} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            {/* ✅ Fallback 404 */}
            <Route path="*" element={<h2 className="text-center text-red-500">404 Page Not Found</h2>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
