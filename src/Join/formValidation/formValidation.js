export default function formValidation(joinInfo, essential, periodRadio) {
  if (joinInfo.id == "") {
    alert("id 형식이 잘못되었습니다");
    return false;
  }
  if (joinInfo.password == "") {
    alert("비밀번호 형식이 잘못되었습니다.");
    return false;
  }
  if (joinInfo.fullname == "") {
    alert("이름 형식이 잘못되었습니다");
    return false;
  }
  if (
    joinInfo.email == "" ||
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/.test(
      joinInfo.email
    ) == false
  ) {
    alert("이메일 형식이 잘못되었습니다");
    return false;
  }
  if (
    joinInfo.phone == "" ||
    /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/.test(joinInfo.phone) ==
      false
  ) {
    alert("전화번호 형식이 잘못되었습니다");
    return false;
  }

  if (essential.filter((x) => x == true).length !== 3) {
    alert("약관동의 필수조항을 체크하십시오.");
    return false;
  }
  if (!periodRadio) {
    alert("개인정보 유효기간을 선택하십시오.");
    return false;
  }
  return true;
}
