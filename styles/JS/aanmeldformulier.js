var kn = document.querySelector(".knop");
kn.addEventListener("click", toggleHide);

function toggleHide(){
  document.querySelector('form:first-of-type').classList.add('hidden');
  document.querySelector('form:last-of-type').classList.remove('hidden');

}
