const modalAdd = document.getElementById("monCompte-modalModif");
const btnOpenModalAdd = document.getElementsByClassName("nosMenus-btnModifier")[0];
const closeModalAdd = document.getElementsByClassName("modalModif-close")[0];

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