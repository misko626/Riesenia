const closeForm = document.getElementById("close_concact_form");
const formContainer = document.querySelector(".form-shaddow");

closeForm.addEventListener("click", function () {
  formContainer.classList.remove("active");
});

function openForm() {
  formContainer.classList.add("active");
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
