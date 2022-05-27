import React, { useState, useEffect, useMemo } from "react";
import Result from "./Result";
import ToggleableContent from "./TogglableContent";
import ToggleButton from "./ToggleButton";
import styles from "../../../style/review_style/ListView.module.css";
import { v4 as uuidv4 } from "uuid";
import useDataFetch from "../../useHook/useDataFetch";
export default function ListElement({ filter }) {
  const url = "mockData.json";
  const data = useDataFetch(url);
  const [toggle, setToggle] = useState(Array(data.length).fill(false));
  useEffect(() => {
    setToggle(Array(data.length).fill(false));
  }, [data]);
  return (
    <div className={styles.listElements}>
      {data
        ?.filter((x) => (filter == "전체" ? x : x.result == filter))
        .map(({ date, result, company, writer, content, count }, i) => (
          <div key={uuidv4()}>
            <div className={styles.listElement}>
              <span>{date}</span>
              <Result result={result} />
              <div className={styles.reviewDetail}>
                <span>{company}</span>
                <ToggleButton num={i} setToggle={setToggle} />
              </div>
              <span>{writer}</span>
              <span>{count}</span>
            </div>
            <div>{toggle[i] && <ToggleableContent content={content} />}</div>
          </div>
        ))}
    </div>
  );
}
