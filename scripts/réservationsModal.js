const modalAdd = document.getElementById("réservation-modalAdd");
const btnOpenModalAdd = document.getElementsByClassName("section-ajouterRéservation")[0];
const closeModalAdd = document.getElementsByClassName("modalAdd-close")[0];

btnOpenModalAdd.addEventListener("click", () => {
  modalAdd.style.display = "block";
})

closeModalAdd.addEventListener("click", () => {
  modalAdd.style.display = "none";
})

window.addEventListener("click", (event) => {
  if (event.target == modalAdd) {
    modalAdd.style.display = "none";
  }
})