/*code van W3schools*/
var slider = document.getElementsByID("range-slider__range");
var output = document.getElementsByID("range-slider__value");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
};
