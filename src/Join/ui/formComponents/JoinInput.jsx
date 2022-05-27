import React from "react";
import style from "../../../../style/join_style/JoinForm.module.css";

export default function JoinInput({
  placeholder,
  children,
  setJoinInfo,
  type,
  joinInfo,
  visible,
}) {
  const handleonChange = (e) => {
    e.preventDefault();
    setJoinInfo((old) => ({ ...old, [type]: e.target.value }));
  };
  return (
    <div className={style.joinInputNButton}>
      <input
        className={style.joinInput}
        alt={placeholder}
        placeholder={placeholder}
        onChange={handleonChange}
        value={joinInfo[type]}
        type={type == "password" ? visible : "text"}
      ></input>
      {children}
    </div>
  );
}
