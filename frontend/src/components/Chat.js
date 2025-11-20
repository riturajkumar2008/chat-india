import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io("http://localhost:5000");

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    socket.on("message", (msg) => setMessages((prev) => [...prev, msg]));
  }, []);

  const sendMessage = () => {
    socket.emit("message", input);
    setInput("");
  };

  return (
    <div className="border p-4 bg-white rounded">
      <h2 className="font-bold">Chat</h2>
      <div className="h-64 overflow-y-scroll">
        {messages.map((m, i) => <p key={i}>{m}</p>)}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border p-2 w-full"
      />
      <button onClick={sendMessage} className="bg-blue-500 text-white px-4 py-2 mt-2">Send</button>
    </div>
  );
}

export default Chat;
