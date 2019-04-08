var _ = require('lodash');

// Select elements and cache into variables for later use
var h3 = document.querySelector("h3");
var colorLeft = document.getElementById("colorLeft");
var colorRight = document.getElementById("colorRight");
var body = document.getElementById("gradient");
var btn = document.getElementById("randomBtn");

// Set colors in inputs to match default values on initial page load
body.onload = function() {
    // Add text content to h3 element to display the default HEX value
    h3.textContent =  "linear-gradient(to right, " + colorLeft.value + ", " + colorRight.value + ")";
};

// Generate a random color
function randomColor() {
    // Limit random character generation to only contain possible HEX values
    var letters = "0123456789ABCDEF";
    // HEX numbers start with #
    var color = "#";
    // For loop to run 6 times (to return 6 characters for HEX color)
    for(var i = 0; i < 6; i++) {
        // Begin with # symbol and append 6 characters to it. Math.floor rounds random number down to the
        // nearest whole number. Math.random returns a decimal between 0 and 1, multiplied by 16 for the 16 
        // possible characters in a HEX number.
        color += letters[Math.floor(Math.random() * 16)];
    }
    // Return new HEX value
    return color;
};

// Set input color values to two random colors
function randomValue() {
    // Sets the left input color to a random color
    colorLeft.value = randomColor();
    // Sets the right input color to a random color
    colorRight.value = randomColor();
    // Runs function to change background gradient to random color values above
    setColor();
}

// Change the background color gradient
var setColor = function() {
    // Displays new background color gradient with two random colors through randomValue function
    body.style.background = "linear-gradient(to right, " + colorLeft.value + ", " + colorRight.value + ")";
    // Change text in h3 to display current colors in gradient
    h3.textContent = body.style.background + ";";
};

// Listen for manual color selection in left color input then invokes setColor function
colorLeft.addEventListener("input", setColor);
// Listen for manual color selection in right color input then invokes setColor function
colorRight.addEventListener("input", setColor);
// Listen for click on randomBtn button then invokes randomValue function
btn.addEventListener("click", randomValue);