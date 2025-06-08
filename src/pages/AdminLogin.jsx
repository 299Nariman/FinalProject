import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (password === "admin123") {
      localStorage.setItem("isAdmin", "true");
      navigate("/admin");
    } else {
      alert("Yanlış şifrə!");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Admin Giriş</h2>
      <input
        type="password"
        placeholder="Şifrə"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Daxil ol</button>
    </div>
  );
};

export default AdminLogin;
