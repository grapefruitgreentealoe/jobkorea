import React from "react";
import style from "../../../../style/join_style/JoinForm.module.css";
import JoinInput from "./JoinInput";
import VisibleButton from "./VisibleButton";
import FormButton from "./FormButton";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export default function JoinFormSection() {
  const [joinInfo, setJoinInfo] = useState({
    id: "",
    password: "",
    fullname: "",
    email: "",
    phone: "",
    validate: "",
  });
  const [visible, setVisible] = useState("password");
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
  useEffect(() => {
    console.log(joinInfo);
  }, [joinInfo]);
  return (
    <div className={style.joinform}>
      {formArray.map((x) => (
        <div key={x[0]}>
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
