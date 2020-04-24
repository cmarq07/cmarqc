//Initializing variables and their onClicks
var homeButton = document.getElementById("homeButton");
var aboutButton = document.getElementById("aboutButton");
var resumeButton = document.getElementById("resumeButton");
var projectsButton = document.getElementById("projectsButton");
var contactButton = document.getElementById("contactButton");
var instagramButton = document.getElementById("instagram");
var linkedInButton = document.getElementById("linkedIn");

//Onclick Events
homeButton.onclick = home;
aboutButton.onclick = about;
resumeButton.onclick = resume;
projectsButton.onclick = projects;
contactButton.onclick = contact;
instagramButton.onclick = instagramLink;
linkedInButton.onclick = linkedInLink;


//Menu Button Functions
function home() {
	if(homeButton.classList.contains("clickable")) {
		window.location.href = "cmarqc.com";
	}
}
function about() {
	if(aboutButton.classList.contains("clickable")) {
		window.location.href = "about.html";
	}
}
function resume() {
	if(resumeButton.classList.contains("clickable")) {
		window.location.href = "resume.html";
	}
}
function projects() {
	if(projectsButton.classList.contains("clickable")) {
		window.location.href = "projects.html";
	}
}
function contact() {
	if(contactButton.classList.contains("clickable")) {
		window.location.href = "contact.html";
	}
}

//Social Functions
function instagramLink() {
	window.open("https://www.instagram.com/cmarq07/", "_blank");
}
function linkedInLink() {
	window.open("https://www.linkedin.com/in/chrcalloway", "_blank");
}
