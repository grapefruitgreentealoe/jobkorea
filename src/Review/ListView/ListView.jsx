import React from "react";
import ListElement from "./ListElement";
import styles from "../../../style/review_style/ListView.module.css";
export default function ListView({ filter }) {
  return (
    <div className={styles.listview}>
      <div className={styles.listTitle}>
        <span>날짜</span>
        <span>합격여부</span>
        <span>면접기업</span>
        <span>작성자</span>
        <span>조회수</span>
      </div>
      <ListElement filter={filter} />
    </div>
  );
}
