import React from "react";
import style from "../../../../style/join_style/JoinForm.module.css";

export default function VisibleButton({ setVisible, visible }) {
  const handleVisibleButton = (e) => {
    e.preventDefault();
    setVisible((x) => (x == "password" ? "text" : "password"));
  };
  return (
    <>
      <button
        className={style.visibleButton}
        onClick={handleVisibleButton}
        title={visible == "password" ? "비밀번호 안보임" : "비밀번호 보임"}
      >
        {visible == "text" ? <span>◉</span> : <span>⌣</span>}
      </button>
    </>
  );
}
