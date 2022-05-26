import React from "react";
import Filter from "./Review/Filter";
import ListView from "./Review/ListView/ListView";
import styles from "../style/review_style/ReviewPage.module.css";
export default function Review() {
  return (
    <div className={styles.reviewPage}>
      <Filter />
      <ListView />
    </div>
  );
}
