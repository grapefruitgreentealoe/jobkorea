import React from "react";
import style from "../../../../style/join_style/JoinForm.module.css";

export default function FormButton({ buttonName }) {
  const handleOnClick = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <button
        value={buttonName}
        className={style.joinButton}
        onClick={handleOnClick}
      >
        {buttonName}{" "}
      </button>
    </>
  );
}
