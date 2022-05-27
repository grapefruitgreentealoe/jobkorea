import React, { useState } from "react";
import styles from "../../style/review_style/Filter.module.css";
export default function Filter({ setFilter, filter }) {
  const [open, setOpen] = useState(false);
  const handleFilterButton = (e) => {
    e.preventDefault();
    setFilter(e.target.name);
    setOpen(false);
  };
  const handleOpenButton = (e) => {
    e.preventDefault();
    setOpen((o) => !o);
  };
  const resultArray = ["전체", "합격", "불합격"];
  return (
    <div className={styles.filter}>
      <span>합격여부 필터</span>
      <button
        title="합격여부 필터"
        onClick={handleOpenButton}
        className={styles.filterNow}
      >
        {filter}▼
      </button>

      {open &&
        resultArray.map((x) => (
          <div key={x}>
            <button
              className={styles.filterSelect}
              name={x}
              onClick={handleFilterButton}
              title={x}
            >
              {x}
            </button>
          </div>
        ))}
    </div>
  );
}
