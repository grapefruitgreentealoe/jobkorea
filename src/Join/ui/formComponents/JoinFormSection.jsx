import React from "react";
import style from "../../../../style/join_style/JoinForm.module.css";
import JoinInput from "./JoinInput";
import VisibleButton from "./VisibleButton";
import FormButton from "./FormButton";

export default function JoinFormSection({
  joinInfo,
  setJoinInfo,
  visible,
  setVisible,
}) {
  const formArray = [
    ["id", "아이디"],
    [
      "password",
      "비밀번호",
      <VisibleButton setVisible={setVisible} visible={visible} />,
    ],
    ["fullname", "이름"],
    ["email", "이메일"],
    ["phone", "휴대폰번호", <FormButton buttonName="인증번호받기" />],
    ["validate", "인증번호", <FormButton buttonName="확인" />],
  ];

  return (
    <div className={style.joinform}>
      {formArray.map((x) => (
        <div key={x[0]}>
          <span>{x[1]}</span>
          <JoinInput
            type={x[0]}
            placeholder={x[1]}
            children={x[2]}
            setJoinInfo={setJoinInfo}
            joinInfo={joinInfo}
            visible={visible}
          />
        </div>
      ))}
    </div>
  );
}
