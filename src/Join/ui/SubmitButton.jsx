import React from "react";
import style from "../../../style/join_style/SubmitButton.module.css";
export default function SubmitButton() {
  return (
    <div className={style.submitButtonWrapper}>
      <button title="제출버튼" type="submit" className={style.submitButton}>
        <span>가입하기</span>
      </button>
    </div>
  );
}
