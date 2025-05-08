// Get the modal
var modalDelete = document.getElementById("myModalDelete");
// Get the button that opens the modal
var btnDelete = document.getElementsByClassName("galerie-overlayIconTrash");
// Get the <span> element that closes the modal
var spanDelete = document.getElementsByClassName("close")[0];

for (var i = 0; i < btnDelete.length; i++) {
    btnDelete[i].onclick = function() {
            modalDelete.style.display = "block";
    }
  }

  span.onclick = function() {
    modal.style.display = "none";
  }
// When the user clicks on <span> (x), close the modal
spanDelete.onclick = function() {
  modalDelete.style.display = "none";
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalDelete || event.target == modal) {
    modalDelete.style.display = "none";
    modal.style.display = "none";
  }
}