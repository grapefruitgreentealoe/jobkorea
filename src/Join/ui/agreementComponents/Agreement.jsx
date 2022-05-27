import React from "react";
import styles from "../../../../style/join_style/Agreement.module.css";
export default function Agreement({ type, ment, setCheck, num, checked }) {
  const handleCheck = (e) => {
    e.preventDefault();
    setCheck(e.target.name);
  };
  return (
    <div className={styles.agreement}>
      <input
        className={styles.checkbox}
        type="checkbox"
        name={num}
        onChange={handleCheck}
        checked={checked}
        alt={ment}
      />
      {type && (
        <span
          className={type == "essential" ? styles.essential : styles.selectable}
        >
          {type == "essential" ? "(필수)" : "(선택)"}
        </span>
      )}
      <span>{ment}</span>
    </div>
  );
}
