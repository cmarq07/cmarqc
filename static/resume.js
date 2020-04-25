//Initializing variables
var downloadButton = document.getElementById("resumeDownload");

downloadButton.onclick = downloadPdf;

function downloadPdf() {
	window.open("files/resume.pdf", "_blank");
}
