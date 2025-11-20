import React, { useEffect, useState } from "react";
import { API_URL } from "../api";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch(`${API_URL}auth/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => console.error(err));
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="border p-4 bg-white rounded">
      <h2 className="font-bold">Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default Profile;
