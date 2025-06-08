// src/pages/UserDashboard.jsx
import React from "react";
import styles from "../styles/UserDashboard.module.css";

const UserDashboard = () => {
  return (
    <div className={styles.container}>
      <h1>İstifadəçi Paneli</h1>
      <p>Burada istifadəçinin sifarişləri və profil məlumatları görünəcək.</p>
      {/* Burada gələcəkdə sifarişlər siyahısı və profil formaları yerləşdirilə bilər */}
    </div>
  );
};

export default UserDashboard;
