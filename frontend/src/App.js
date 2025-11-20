import React from 'react';
import Navbar from './components/Navbar';
import Chat from './components/Chat';
import Feed from './components/Feed';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <h1 className="text-center text-2xl font-bold mt-4">Welcome to Chat India</h1>
      <div className="grid grid-cols-2 gap-4 p-4">
        <Feed />
        <Chat />
      </div>
    </div>
  );
}

export default App;
