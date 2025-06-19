// src/pages/Auth.jsx
import React, { useState } from "react";
import styles from "../styles/Auth.module.css";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ email: "", password: "", name: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // burada login/register API çağırışı olacaq
    alert(isLogin ? "Login yoxlanır..." : "Qeydiyyat yoxlanır...");
  };

  return (
    <div className={styles.container}>
      <h2>{isLogin ? "Giriş" : "Qeydiyyat"}</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        {!isLogin && (
          <input
            type="text"
            name="name"
            placeholder="Adınız"
            value={form.name}
            onChange={handleChange}
            required
          />
        )}
        <input
          type="email"
          name="email"
          placeholder="E-poçt"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Şifrə"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit">{isLogin ? "Daxil ol" : "Qeydiyyatdan keç"}</button>
      </form>
      <p className={styles.toggle} onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Hesabınız yoxdur? Qeydiyyatdan keçin" : "Hesabınız var? Giriş edin"}
      </p>
    </div>
  );
};

export default Auth ;
