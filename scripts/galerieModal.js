// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btnAjouter = document.getElementsByClassName("galerie-btnAjouter")[0];

var btnModifier = document.getElementsByClassName("galerie-overlayIconMod");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// Get the modal
var modalDelete = document.getElementById("myModalDelete");
// Get the button that opens the modal
var btnDelete = document.getElementsByClassName("galerie-overlayIconTrash");
// Get the <span> element that closes the modal
var spanDelete = document.getElementsByClassName("closeDelete")[0];

// When the user clicks the button, open the modal 
btnAjouter.onclick = function() {
  modal.style.display = "block";
}

for (var i = 0; i < btnModifier.length; i++) {
    btnModifier[i].onclick = function() {
            modal.style.display = "block";
      console.log("Bouton Modifier cliqué !");
    }
  }

for (var i = 0; i < btnDelete.length; i++) {
    btnDelete[i].onclick = function() {
            modalDelete.style.display = "block";
    }
  }

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
spanDelete.onclick = function() {
  modalDelete.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalDelete || event.target == modal) {
    modalDelete.style.display = "none";
    modal.style.display = "none";
  }
}