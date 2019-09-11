// Select body to change background
var gradient = document.getElementById("gradient");

// Select color inputs to grab value
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");

// Select h3 to place CSS code
var cssCode = document.getElementById("cssCode");


function gradientHandler() {
    gradient.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    cssCode.textContent = gradient.style.background + ";"
}


color1.addEventListener("input", gradientHandler)

color2.addEventListener("input", gradientHandler)


