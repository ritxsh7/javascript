const remark = document.getElementById("remark");
const password = document.getElementById("password");
const show = document.getElementById("show");
const button = document.getElementById("button");

const checkPasswordStrength = () => {
  const smallLength = /^[a-zA-Z0-9]{0,7}$/;
  const onlyAlphabets = /^[a-zA-Z]*$/;
  const alphabetsFollowedByNumbers = /^([a-zA-Z]*)([0-9]*)$/;
  const combination = /[a-zA-Z0-9]*/;

  if (smallLength.test(password.value) || onlyAlphabets.test(password.value)) {
    remark.style.color = "red";
    remark.innerText = "Weak : Only alphabets or less than 8 characters";
  } else if (alphabetsFollowedByNumbers.test(password.value)) {
    remark.style.color = "goldenrod";
    remark.innerText = "Medium : Alphabets followed by numbers";
  } else if (combination.test(password.value)) {
    remark.style.color = "green";
    remark.innerText = "Strong : Alphanumeric characters";
  }
};

const showPassword = (e) => {
  e.preventDefault();
  show.innerText = password.value;
};

document.addEventListener("click", showPassword);
document.addEventListener("input", checkPasswordStrength);
