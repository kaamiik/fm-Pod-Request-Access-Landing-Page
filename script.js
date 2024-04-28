const formEl = document.querySelector(".main-form");
const inputEl = document.querySelector(".form-email");
const errorMessageEl = document.querySelector(".error-message");

function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function handleError() {
  errorMessageEl.classList.remove("hidden");
  inputEl.setAttribute("aria-invalid", true);
}

function handleSubmit(event) {
  event.preventDefault();

  if (inputEl.value === "") {
    errorMessageEl.textContent = "Oops! Please add your email";
    handleError();
  } else if (!validateEmail(inputEl.value)) {
    errorMessageEl.textContent = "Oops! Please check your email";
    handleError();
  } else {
    errorMessageEl.classList.add("hidden");
    inputEl.setAttribute("aria-invalid", false);
    event.target.submit();
  }
}

formEl.addEventListener("submit", handleSubmit);
