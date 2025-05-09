const modalAdd = document.getElementById("monCompte-modalModif");
const btnOpenModalAdd = document.getElementsByClassName("modifier")[0];
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

const modalDelete = document.getElementById("monCompte-modalDelete");
const btnOpenModalDelete = document.getElementsByClassName("delete");
const closeModalDelete = document.getElementsByClassName("modalDelete-close")[0];

for (let i = 0; i < btnOpenModalDelete.length; i++) {
    btnOpenModalDelete[i].addEventListener("click", () => {
      modalDelete.style.display = "block";
    })
  }
  closeModalDelete.addEventListener("click", () => {
    modalDelete.style.display = "none";
  })
  
  window.addEventListener("click", (event) => {
    if (event.target == modalDelete) {
      modalDelete.style.display = "none";
    }
  })