const closeForm = document.getElementById("close_concact_form");
const formContainer = document.querySelector(".form-shaddow");

closeForm.addEventListener("click", function () {
  formContainer.classList.remove("active-form");
});

function openForm() {
  formContainer.classList.add("active-form");
}

// appearEffect

window.addEventListener("scroll", appearElement);

function appearElement() {
  //screen sroll value
  const screenPosition = (window.innerHeight / 2) * 1.3;

  //progress apear
  const cards = document.querySelectorAll(".card");

  for (let card of cards) {
    const cardPosition = card.getBoundingClientRect().top;
    if (cardPosition < screenPosition) {
      card.classList.add("appear-element");
    }
  }

  //path appar
  const pathIthems = document.querySelectorAll(".path-item");
  for (let pathIthem of pathIthems) {
    const pathItemPosition = pathIthem.getBoundingClientRect().top;
    if (pathItemPosition < screenPosition) {
      pathIthem.classList.add("appear-element");
    }
  }

  const focus = document.querySelector(".focus");
  const focusPosition = focus.getBoundingClientRect().top;
  if (focusPosition < screenPosition) {
    focus.classList.add("appear-element");
  }
}

//form validation

const form = document.getElementById("form");
const email = document.getElementById("email");
const telNum = document.getElementById("tel");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const emailValue = email.value.trim();
  const telNumValue = tel.value.trim();
  const errorMessage = document.querySelector(".error-message");

  if (!isEmail(emailValue)) {
    console.log("invalid email");
    errorMessage.classList.add("error-validation");
    errorMessage.innerText = "Nesprávna Email adresa";
    return;
  } else {
    errorMessage.classList.remove("error-validation");
    errorMessage.innerText = "";
  }

  if (!isTelNumber(telNumValue)) {
    console.log("invalid number");
    errorMessage.classList.add("error-validation");
    errorMessage.innerText = "Nesprávne tel. číslo";
    return;
  } else {
    errorMessage.classList.remove("error-validation");
    errorMessage.innerText = "";
  }
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function isTelNumber(telNum) {
  return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(
    telNum
  );
}
