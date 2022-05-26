import React from "react";
import styles from "../../style/review_style/Filter.module.css";
export default function Filter({ setFilter }) {
  const handleFilterButton = (e) => {
    e.preventDefault();
    setFilter(e.target.name);
  };
  return (
    <div className={styles.filter}>
      <button name="전체" onClick={handleFilterButton}>
        전체
      </button>
      <button name="합격" onClick={handleFilterButton}>
        합격
      </button>
      <button name="불합격" onClick={handleFilterButton}>
        불합격
      </button>
    </div>
  );
}
