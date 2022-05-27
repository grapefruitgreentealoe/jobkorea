import React, { useState } from "react";
import Filter from "./Review/Filter";
import ListView from "./Review/ListView/ListView";
import styles from "../style/review_style/ReviewPage.module.css";
import UnderNavbar from "./UnderNavbar";

export default function Review() {
  const [filter, setFilter] = useState("전체");
  return (
    <>
      <div className={styles.reviewPage}>
        <Filter setFilter={setFilter} filter={filter} />
        <ListView filter={filter} />
      </div>
      <UnderNavbar path="join"/>
    </>
  );
}
