var css = document.querySelector("h3");
var color1 = document.getElementsByClassName("color1")[0];
var color2 = document.getElementsByClassName("color2")[0];
var body = document.getElementById("gradient")

function changeGradient (){
    body.style.background = 
    "linear-gradient(to right, "
    + color1.value 
    + ", " 
    + color2.value 
    + ")"
}

color1.addEventListener("input", changeGradient);


color2.addEventListener("input", changeGradient);

