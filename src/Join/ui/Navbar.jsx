import React from "react";
import style from "../../../style/join_style/Navbar.module.css";
export default function Navbar() {
  return (
    <div>
      <nav className={style.navbar}>
        <div className={style.hamburger}>&#9776;</div>
        <div className={style.logo}>Logo</div>
        <div className={style.switch}>d</div>
      </nav>
    </div>
  );
}
