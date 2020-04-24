//Initializing variables
var downloadButton = document.getElementById("resumeDownload");

downloadButton.onclick = downloadPdf;

window.onscroll = function() {
  var d = document.documentElement;
  var offset = (d.scrollTop + window.innerHeight) + 20;
  var height = d.offsetHeight;
  if (offset >= height) {
    document.getElementById("socialsScroll").id = "socials";
  } else {
	document.getElementById("socials").id = "socialsScroll";
  }
};

function downloadPdf() {
	window.open("files/resume.pdf", "_blank");
}
