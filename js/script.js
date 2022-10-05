const closeForm = document.getElementById("close_concact_form");
const formContainer = document.querySelector(".form-shaddow");

closeForm.addEventListener("click", function () {
  formContainer.classList.remove("active");
});

function openForm() {
  formContainer.classList.add("active");
}
