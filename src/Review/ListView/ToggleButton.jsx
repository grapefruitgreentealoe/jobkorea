import React from "react";
import styles from "../../../style/review_style/ListView.module.css";
export default function ToggleButton({ setToggle, num }) {
  const handleToggleButton = (e) => {
    e.preventDefault();
    setToggle((o) => o.map((x, i) => (i == num ? !x : x)));
  };
  return (
    <div className={styles.toggleButton}>
      <button title="내용보기" onClick={handleToggleButton}>
        <span>⬇</span>
      </button>
    </div>
  );
}
