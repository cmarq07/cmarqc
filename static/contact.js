//Initializing variables
var nameField = document.getElementById("nameField");
var emailField = document.getElementById("emailField");
var messageField = document.getElementById("messageField");

//Check for content
function validateForm() {
	var name = document.forms["contactForm"]["name"].value;
	var email = document.forms["contactForm"]["email"].value;
	var message = document.forms["contactForm"]["message"].value;
	var validForm = true;
	if (name == "") {
		nameField.classList.add("invalid");
		nameField.placeholder = "A name is required";
		validForm = false;
	}
	if (email == "") {
		emailField.classList.add("invalid");
		emailField.placeholder = "An email is required";
		validForm = false;
	}
	if (message == "") {
		messageField.classList.add("invalid");
		messageField.placeholder = "A message is required";
		validForm = false;
	}
	return validForm;
}