/*code van W3schools*/
var slider = document.querySelector("#range-slider__range");
var output = document.querySelector("#range-slider__value");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
};
