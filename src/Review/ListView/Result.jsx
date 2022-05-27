import React from "react";
import styles from "../../../style/review_style/ListView.module.css";
export default function Result({ result }) {
  const resultColor = result == "합격" ? styles.passed : styles.failed;
  return <div className={resultColor}>{result}</div>;
}
