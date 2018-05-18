// Select elements and cache into variables for later use
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.querySelectorAll("li");

// Function to delete li on DELETE button click
var deleteListItem = function() {
	// Selects button's parent node, the li
	var liItem = event.target.parentNode;
	// Selects the li's parent node, the ul
	var liParent = liItem.parentNode;
	// Removed the ul's child node, the li
	liParent.removeChild(liItem);
}

// Toggle .done css class (strike-through) on the clicked target
function doneToggle() {
	// Finds the list of classes on the clicked target and toggles the .done class
	event.target.classList.toggle("done");
}

// For loop to loop through "list" and append a deleteButton to each li
for (i = 0; i < list.length; i++) {
	var deleteButton = document.createElement("button");
	// Add a className to the deleteButton element
	deleteButton.className = "delBtn";
	// Create variable that contains the text in the deleteButton
	var buttonText = document.createTextNode("DELETE");
	// Add "DELETE" text node content within the delete button
	deleteButton.appendChild(buttonText);
	// Append delete button to li in list and loop until all li's have the button
	list[i].appendChild(deleteButton);
}

// Loops through all li's
for(i = 0; i < list.length; i++) {
	// Listens for click event on delete button, then runs deleteListItem function
	document.querySelectorAll(".delBtn")[i].addEventListener("click", deleteListItem);
}

// Return length of input from user
function inputLength() {
	return input.value.length;
}

// Creates and appends new li to ul with content entered by user, adds delete button
function createListElement() {
	// Create new li
	var li = document.createElement("li");
	// Add input text from user into new li
	li.appendChild(document.createTextNode(input.value));
	// Take new li and text and add to the end of the ul
	ul.appendChild(li);
	// Clear input field of text
	input.value = "";
	// Append delete button next to every new li
	var deleteButton = document.createElement("button");
	// Add a className to the deleteButton element
	deleteButton.className = "delBtn";
	// Create variable that contains the text in the deleteButton
	var buttonText = document.createTextNode("DELETE");
	// Add "DELETE" text node content within the delete button
	deleteButton.appendChild(buttonText);
	// Append completed delete button to new li
	li.appendChild(deleteButton);
	// Listens for click on delete button
	deleteButton.addEventListener("click", deleteListItem);
}

// Runs createListElement() only if length of input is > 0
function addListAfterClick() {
	// Check if inputLength() is > 0
	if (inputLength() > 0) {
		// If input length is > 0 run createListElement()
		createListElement();
	}
}

// Waits for Enter key press event then runs createListElement()
function addListAfterKeypress(event) {
	// Checks if inputLength() is > 0 and the Enter key is pressed
	if (inputLength() > 0 && event.keyCode === 13) {
		// runs function if above requirement is met
		createListElement();
	}
}

// Listens for click event on Enter button then runs addListAfterClick function
button.addEventListener("click", addListAfterClick);

// Listens for keypress event then runs addListAfterKeypress function if Enter key is pressed
input.addEventListener("keypress", addListAfterKeypress);

// Listens for click event on any element within the ul then runs doneToggle function
ul.addEventListener("click", doneToggle);