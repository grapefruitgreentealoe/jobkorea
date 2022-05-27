import React from "react";
import { useState, useEffect } from "react";

import styles from "../../../../style/join_style/Agreement.module.css";
import Agreement from "./Agreement";
export default function AgreementSection({
  all,
  setAll,
  essential,
  setEssential,
  selectable,
  setSelectable,
}) {
  const handleAllCheck = () => {
    setAll((old) => !old);
    if (all) {
      setEssential(Array(3).fill(false));
      setSelectable(Array(2).fill(false));
    } else {
      setEssential(Array(3).fill(true));
      setSelectable(Array(2).fill(true));
    }
  };
  const handleEssentialCheck = (num) => {
    setAll(false);
    setEssential(essential.map((x, i) => (i == num ? !x : x)));
  };
  const handleSelectableCheck = (num) => {
    setAll(false);
    setSelectable(selectable.map((x, i) => (i == num ? !x : x)));
  };

  const allMent = [
    "필수동의항목 및 개인정보수집 및 이용동의(선택), 광고성 정보 수신 동의(선택)에 전체 동의합니다.",
  ];
  const essentialMentArray = [
    "만 15세 이상입니다.",
    "서비스 이용약관 동의",
    "개인정보수집 및 이용 동의",
  ];
  const selectableMentArray = [
    "개인정보수집 및 이용 동의",
    "광고성 정보 이메일/SMS 수신 동의",
  ];

  return (
    <div className={styles.agreements}>
      <h3 title="약관동의">약관동의</h3>
      <Agreement
        type={null}
        ment={allMent}
        setCheck={handleAllCheck}
        num={0}
        key={allMent[0]}
        checked={all}
        setAll={setAll}
      />
      <hr />
      {essentialMentArray.map((v, i) => (
        <Agreement
          key={v}
          type={"essential"}
          ment={v}
          setCheck={handleEssentialCheck}
          num={i}
          checked={essential[i]}
          setAll={setAll}
        />
      ))}
      <hr />
      {selectableMentArray.map((v, i) => (
        <Agreement
          key={v}
          type={"selectable"}
          ment={v}
          setCheck={handleSelectableCheck}
          num={i}
          checked={selectable[i]}
          setAll={setAll}
        />
      ))}
    </div>
  );
}
