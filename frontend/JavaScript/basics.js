//Basics -----------------------------------
let age = 32;
let usarName = "manuela"; //variables
let hobbies = ["knitting", "reading", "Cooking"]; //array
let job = {
	//objects
	title: "Developer",
	place: "New York",
	salary: 5000000,
};
//Access to objects
console.log(job.place); //dot notation

//Funtions -----
let adultYears;
function calculateAdultYears(userAge) {
	//parameters
	return userAge - 18;
} // name : what does
//  ideal function work without external value names
// return > gets a new value, you can store it in a variable
adultYears = calculateAdultYears(age);

//methods------
let person = {
	name: "Max",
	greet() {
		alert("Hello");
	},
};
person.greet();

// math operator
result++; //result = result +1;
result += 5; // result = result +5
