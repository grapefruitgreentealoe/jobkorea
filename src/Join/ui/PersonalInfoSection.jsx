import React from "react";
import styles from "../../../style/join_style/PersonalInfo.module.css";
import { useState } from "react";
import { useEffect } from "react";
export default function PersonalInfoSection() {
  const period = ["1년", "3년", "회원탈퇴시"];
  const [periodRadio, setPeriodRadio] = useState(null);
  const handleRadio = (e) => {
    setPeriodRadio(e.target.name);
  };

  useEffect(() => {
    console.log(periodRadio);
  }, [periodRadio]);
  return (
    <div className={styles.personalSection}>
      <h3>개인정보 유효기간</h3>
      {period.map((x) => (
        <div className={styles.personalInfo}>
          <input
            type="radio"
            name={x}
            onChange={handleRadio}
            checked={periodRadio == x}
          />
          {x}
        </div>
      ))}
    </div>
  );
}
