import React from "react";
import styles from "../../../style/join_style/Navbar.module.css";
export default function Navbar() {
  return (
    <div>
      <nav className={styles.navbar}>
        <button className={styles.hamburger}>&#9776;</button>
        <div className={styles.logo}>Logo</div>
        <button className={styles.search}>d</button>
      </nav>
    </div>
  );
}
