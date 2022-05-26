import React from "react";
import Result from "./Result";
import ToggleableContent from "./TogglableContent";
import data from "../mockData.json";
import styles from "../../../style/review_style/ListView.module.css";
import { v4 as uuidv4 } from "uuid";
export default function ListElement() {
  return (
    <div className={styles.listElements}>
      {data.map(({ date, result, company, writer, content, count }) => (
        <div key={uuidv4()} className={styles.listElement}>
          <span>{date}</span>
          <Result result={result} />
          <span>{company}</span>
          <span>{writer}</span>
          <span>{count}</span>
          <ToggleableContent />
        </div>
      ))}
    </div>
  );
}
