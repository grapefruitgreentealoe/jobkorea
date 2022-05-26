import React from "react";
import style from "../../../style/join_style/SubmitButton.module.css";
export default function SubmitButton() {
  return (
    <>
      <button
        type="submit"
        className={style.submitButton}
      >
        <span>제출</span>
      </button>
    </>
  );
}
