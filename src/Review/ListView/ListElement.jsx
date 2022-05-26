import React, { useState, useEffect } from "react";
import Result from "./Result";
import ToggleableContent from "./TogglableContent";
import ToggleButton from "./ToggleButton";
import data from "../mockData.json";
import styles from "../../../style/review_style/ListView.module.css";
import { v4 as uuidv4 } from "uuid";
export default function ListElement({ filter }) {
  const [toggle, setToggle] = useState(Array(data.length).fill(false));
  return (
    <div className={styles.listElements}>
      {data
        .filter((x) => (filter == "전체" ? x : x.result == filter))
        .map(({ date, result, company, writer, content, count }, i) => (
          <div key={uuidv4()} className={styles.listElement}>
            <span>{date}</span>
            <Result result={result} />
            <div className={styles.reviewDetail}>
              <span>{company}</span>
              <ToggleButton num={i} setToggle={setToggle} />
            </div>
            <span>{writer}</span>
            <span>{count}</span>

            {toggle[i] && <ToggleableContent content={content} />}
          </div>
        ))}
    </div>
  );
}
