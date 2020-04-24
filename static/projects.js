//Initializing variables
var dropButtons = document.getElementsByClassName("dropdownButton");
var i;

for(i = 0; i < dropButtons.length; i++) {
	dropButtons[i].onclick = function() {
		var dropped = document.querySelector(".dropdownButton.active");
		if (dropped && dropped != this) {
			dropped.classList.remove("dropped");
			dropped.nextElementSibling.classList.remove("show");
		}
		this.classList.toggle("dropped");
		this.nextElementSibling.classList.toggle("show");
	}
}