var zoekBar = document.querySelector('#directsearch');
var zoekBarDropdown = document.querySelector('#searchdropdown');

zoekBar.onkeyup = function () {
    if (this.value.length === 4) {
        zoekBarDropdown.classList.add('searchdropdownAAN');
    }
    if (this.value.length < 4) {
        zoekBarDropdown.classList.remove('searchdropdownAAN');
    }
}
