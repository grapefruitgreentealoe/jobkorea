import React from "react";
import styles from "../../../style/review_style/ListView.module.css";
export default function TogglableContent({ content }) {
  return <div className={styles.toggleableContent}>{content}</div>;
}
