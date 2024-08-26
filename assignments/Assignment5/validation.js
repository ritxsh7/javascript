const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const error = document.getElementById("error");
const success = document.getElementById("success");

function validateName() {
  if (nameInput.value.trim() === "") {
    const msg = document.createElement("p");
    return "Name cannot be empty";
  }
  return false;
}

function validateEmail() {
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/i;
  if (!emailInput.value.match(emailPattern)) {
    return "Invalid email";
  }
  return false;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const isNameValid = validateName();
  const isEmailValid = validateEmail();

  if (isNameValid || isEmailValid) {
    error.innerHTML = `<ul>${isNameValid ? `<li>${isNameValid}</li>` : ""}${
      isEmailValid ? `<li>${isEmailValid}</li>` : ""
    }</ul>`;
  }

  if (isEmailValid) {
  } else {
    error.innerHTML = "";
    success.style.display = "block";
  }
});
