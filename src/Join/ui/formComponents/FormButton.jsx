import React from "react";
import style from "../../../../style/join_style/JoinForm.module.css";

export default function FormButton({ buttonName }) {
  return (
    <>
      <button value={buttonName} className={style.joinButton}>
        {buttonName}{" "}
      </button>
    </>
  );
}
