//Function for the dropdown menu on the Navbar
function DropDown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Closes the dropdown menu if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}
