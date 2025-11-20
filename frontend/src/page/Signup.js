import React, { useState } from "react";
import { API_URL } from "../api";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const res = await fetch(`${API_URL}auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();
      alert("Signup successful!");
      console.log(data);
    } catch (err) {
      console.error(err);
      alert("Signup failed");
    }
  };

  return (
    <div className="border p-4 bg-white rounded">
      <h2 className="font-bold mb-2">Signup</h2>
      <input
        type="text"
        placeholder="Name"
        className="border p-2 w-full mb-2"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        className="border p-2 w-full mb-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="border p-2 w-full mb-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleSignup}
        className="bg-green-500 text-white px-4 py-2"
      >
        Signup
      </button>
    </div>
  );
}

export default Signup;
          
