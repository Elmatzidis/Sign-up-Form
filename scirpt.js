const passWord = document.querySelector("#password");
const passWordConfirm = document.querySelector("#password-confirm");
const btn = document.querySelector("#submit");
const phoneNumber = document.querySelector("#Phone-number");
const firstName = document.querySelector("#First-name");
const lastName = document.querySelector("#Last-name");

btn.addEventListener("click", () => {
  passWordMatch();
  validatePassWord();
});

phoneNumber.addEventListener("input", (event) => {
  event.target.value = event.target.value.replace(/\D/g, "");
});

firstName.addEventListener("input", (event) => {
  event.target.value = event.target.value.replace(/\d/g, "");
});
lastName.addEventListener("input", (event) => {
  event.target.value = event.target.value.replace(/\d/g, "");
});
function passWordMatch() {
  if (passWord.value == passWordConfirm.value) {
    alert("Your password matches");
  }
  if (passWord.value !== passWordConfirm.value) {
    alert("One of your passwords doesn't match");
  } else {
    alert("You need to fill both passwords");
  }
}

function validatePassWord() {
  const upperCase = /[A-Z]/;

  if (upperCase.test(passWord.value)) {
    alert("Your password contains at least one uppercase letter");
  } else {
    alert("You need to add at least one uppercase letter");
  }
}
