const modalAdd = document.getElementById("galerie-modalAdd");
const btnOpenModalAdd = document.getElementsByClassName("galerie-btnAjouter")[0];
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

const modalModif = document.getElementById("galerie-modalModif");
const btnOpenModalModif = document.getElementsByClassName("galerie-overlayIconMod");
const closeModalModif = document.getElementsByClassName("modalModif-close")[0];

for (let i = 0; i < btnOpenModalModif.length; i++) {
    btnOpenModalModif[i].addEventListener("click", () => {
      modalModif.style.display = "block";
    })
  }
  closeModalModif.addEventListener("click", () => {
    modalModif.style.display = "none";
  })
  
  window.addEventListener("click", (event) => {
    if (event.target == modalModif) {
      modalModif.style.display = "none";
    }
  })

  const modalDelete = document.getElementById("galerie-modalDelete");
  const btnOpenModalDelete = document.getElementsByClassName("galerie-overlayIconTrash");
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