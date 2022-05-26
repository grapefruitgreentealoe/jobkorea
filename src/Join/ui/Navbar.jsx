import React from "react";
import styles from "../../../style/join_style/Navbar.module.css";
export default function Navbar() {
  return (
    <div className={styles.navbarWrapper}>
      <nav className={styles.navbar}>
        <div className={styles.hamburger}>&#9776;</div>
        <div className={styles.logo}>개인회원 가입</div>
        <div className={styles.search}>🔍</div>
      </nav>
    </div>
  );
}
