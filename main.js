const form = document.getElementById("form");

const fname = document.getElementById("fname");
const fname_error = document.getElementById("fname_error");

const lname = document.getElementById("lname");
const lname_error = document.getElementById("lname_error");

const email = document.getElementById("email");
const email_error = document.getElementById("email_error");

const password = document.getElementById("password");
const password_error = document.getElementById("password_error");

fname.addEventListener("input", (event) => {
  if (fname.validity.valid) {
    fname_error.textContent = "";
    fname_error.className = "error";
  } else {
    showFNameError();
    event.preventDefault();
  }
});

form.addEventListener("submit", (event) => {
  if (!fname.validity.valid) {
    showFNameError();
    event.preventDefault();
  }
});

function showFNameError() {
  if (fname.validity.valueMissing)
    fname_error.textContent = "First Name cannot be empty";

  fname_error.className = "error.active";
}
