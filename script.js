// Below you will find the 3 files for the Background Generator. A few things you can try:

// Write code so that the colour inputs match the background generated on the first page load. 
// Display the initial CSS linear gradient property on page load.
// BONUS: Add a random button which generates two random numbers for the colour inputs.
// You may also see different behaviours with the Color widget based on what browser you use. Remember, all browsers are implemented differently. Good luck!/


var css = document.querySelector("h3");
var color1 = document.getElementsByClassName("color1")[0];
var color2 = document.getElementsByClassName("color2")[0];
var body = document.getElementById("gradient")

var bodyStyle = getComputedStyle(body);
var backgroundColor = bodyStyle.backgroundImage;


function changeGradient (){
    body.style.background = 
    "linear-gradient(to right, "
    + color1.value 
    + ", " 
    + color2.value 
    + ")"

    css.textContent = body.style.background + ";";
}

function textLoad() {
    console.log(body.style.backgroundColor)
    css.textContent = backgroundColor + ";";
}

textLoad(); 

color1.addEventListener("input", changeGradient);


color2.addEventListener("input", changeGradient);

