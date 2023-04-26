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
