import React from "react";
import styles from "../../../../style/join_style/Agreement.module.css";
export default function Agreement({
  type,
  ment,
  setCheck,
  num,
  checked,
  setAll,
}) {
  const handleCheck = (e) => {
    setCheck(e.target.id);
  };
  return (
    <div className={styles.agreement}>
      <input
        type="checkbox"
        id={num}
        onChange={handleCheck}
        checked={checked}
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
