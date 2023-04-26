//QUERYS ----------------------------------------------------

let linkElement = document.getElementById("extrernal-link"); //return the element
linkElement.href = "https://google.com"; //change the href

document.querySelector("#external-id"); //any css selector . # a

//Add HTML element
let newLink = document.createElement("a");
let firstParagraph = document.querySelector("p");
firstParagraph.append(newLink);

//Remove HTML ELEMENT
let firstElement = document.querySelector("h1");
firstElement.remove();
firstElement.parentElement.removeChild(firstElement); //OLD BROWSERS ONLY

//Move HTML element
firstElement.parentElement.append(firstParagraph);

//inner HTML
firstParagraph.innerHTML = "Hi this is <strong>important !</strong>"; //access to the html content in the element

//EVENTS ------------------------------------------------------------

let paragraphElement = document.querySelector("p");
function changeParagraphText() {
	paragraphElement.textContent = "Clicked!";
}
paragraphElement.addEventListener("click", changeParagraphText); // parameters:  type , fucntion to execute
//also known as callbackfuntion -> fun that is passed as parameter to another function

let inputElement = document.querySelector("input");
function retriveUserInput(event) {
	// event automatic generated parameter
	// let enteredText = inputElement.value; //holds the value in that input
	//Alternative
	let enteredText = event.target.value; //get rid of the external variable inputE
	console.log(enteredText);
}
inputElement.addEventListener("input");
