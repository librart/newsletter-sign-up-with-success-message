const formContainer = document.querySelector(".sign-up-form");
const form = document.querySelector("form");
const email = document.querySelector("#email");
const errorMessage = document.querySelector(".error-message");
const successContainer = document.querySelector(".success-container");
const emailValue = document.querySelector(".email-value");
const successButton = document.querySelector(".success-container button");

form.addEventListener("submit", (e) => {
  if (!email.validity.valid) {
    showError();
    e.preventDefault();
  } else {
    e.preventDefault();
    emailValue.textContent = email.value;
    formContainer.style.display = "none";
    successContainer.style.display = "flex";
  }
});

successButton.addEventListener("click", (e) => {
  formContainer.style.display = "flex";
  successContainer.style.display = "none";
  email.value = "";
});

function showError() {
  if (email.validity.valueMissing) {
    errorMessage.textContent = "Please fill out this field.";
  } else if (email.validity.typeMismatch) {
    errorMessage.textContent = "Valid email required";
  }

  email.className = "error-active";
}
