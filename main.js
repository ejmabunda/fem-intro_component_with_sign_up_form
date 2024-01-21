const form = document.getElementById("form");

const fname = document.getElementById("fname");
const fname_error = document.getElementById("fname_error");
const fname_error_img = document.getElementById("fname_error_img");

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
    fname_error_img.style.display = "none";
    fname.className = "";
  } else {
    showFNameError();
    event.preventDefault();
  }
});

lname.addEventListener("input", (event) => {
  if (lname.validity.valid) {
    lname_error.textContent = "";
    lname_error.className = "error";
    lname_error_img.style.display = "none";
    lname.className = "";
  } else {
    showLNameError();
    event.preventDefault();
  }
});

email.addEventListener("input", (event) => {
  if (email.validity.valid) {
    email_error.textContent = "";
    email_error.className = "error";
    email_error_img.style.display = "none";
    email.className = "";
  } else {
    showEmailError();
    event.preventDefault();
  }
});

password.addEventListener("input", (event) => {
  if (password.validity.valid) {
    password_error.textContent = "";
    password_error.className = "error";
    password_error_img.style.display = "none";
    password.className = "";
  } else {
    showPasswordError();
    event.preventDefault();
  }
});

form.addEventListener("submit", (event) => {
  if (!fname.validity.valid) {
    showFNameError();
    event.preventDefault();
  }

  if (!lname.validity.valid) {
    showLNameError();
    event.preventDefault();
  }

  if (!email.validity.valid) {
    showEmailError();
    event.preventDefault();
  }

  if (!password.validity.valid) {
    showPasswordError();
    event.preventDefault();
  }
});

function showFNameError() {
  if (fname.validity.valueMissing) {
    fname_error.textContent = "First Name cannot be empty";
  }

  fname.className = "error_active";
  fname_error.className = "error.active";
  fname_error_img.style.display = "inline-block";
}

function showLNameError() {
  if (lname.validity.valueMissing)
    lname_error.textContent = "Last Name cannot be empty";

  lname.className = "error_active";
  lname_error.className = "error.active";
  lname_error_img.style.display = "inline-block";
}

function showEmailError() {
  if (email.validity.valueMissing)
    email_error.textContent = "Email cannot be empty";
  else if (!email.validity.valid)
    email_error.textContent = "Looks like this is not an email";

  email.className = "error_active";
  email_error.className = "error.active";
  email_error_img.style.display = "inline-block";
}

function showPasswordError() {
  if (password.validity.valueMissing)
    password_error.textContent = "Password cannot be empty";

  password.className = "error_active";
  password_error.className = "error.active";
  password_error_img.style.display = "inline-block";
}
