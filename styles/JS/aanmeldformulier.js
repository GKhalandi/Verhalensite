// aanmeldformulier toevoegen/verwijderen

var button = document.querySelector("#ACTIVEform");
var element = document.querySelector("#aanmeldform");

button.addEventListener("click", function() {
  console.log("clicked jay");
  element.classList.toggle("aanmelden");
});
