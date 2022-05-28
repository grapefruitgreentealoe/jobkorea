export default function (event) {
  if (event.code === "Enter") {
    event.preventDefault();
    const form = event.target.form;
    const index = [...form].indexOf(event.target);
    const eventTargetType = event.target.type;
    const formElements = form.elements;
    if (
      (eventTargetType == "text" || eventTargetType == "password") &&
      formElements[index + 1].tagName == "BUTTON" &&
      (formElements[index + 2].type == "text" ||
        formElements[index + 2].type == "password")
    ) {
      formElements[index + 2].focus();
    } else if (
      (eventTargetType == "text" || eventTargetType == "password") &&
      (formElements[index + 1].type == "text" ||
        formElements[index + 1].type == "password")
    ) {
      formElements[index + 1].focus();
    }
  }
}
