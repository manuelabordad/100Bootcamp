//EVENTS --------

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
