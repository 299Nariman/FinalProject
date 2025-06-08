// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">MiniBolt</Link>
      </div>
      <nav className={styles.nav}>
        <Link to="/">Ana Səhifə</Link>
        <Link to="/foods">Yeməklər</Link>
        <Link to="/dashboard">İstifadəçi Paneli</Link>
        <Link to="/admin">Admin Panel</Link>
        <Link to="/auth">Giriş/Qeydiyyat</Link>
        <Link to="/cart">Səbət</Link>
      </nav>
    </header>
  );
};

export default Header;
