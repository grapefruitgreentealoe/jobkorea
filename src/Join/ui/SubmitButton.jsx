import React from "react";
import style from "../../../style/join_style/SubmitButton.module.css";
export default function SubmitButton() {
  const handleSubmitButton = (e) => {
    e.preventDefault();
    
  };
  return (
    <>
      <button className={style.submitButton} onClick={handleSubmitButton}>
        <span>제출</span>
      </button>
    </>
  );
}
