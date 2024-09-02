document.getElementById("dialogue").innerHTML = "NOW LOADING";

var dialogueCase = 0;

function updateDialogue() {
	if(dialogueCase == 0) {
		document.getElementById("dialogue").innerHTML = "NOW LOADING";
	} else if(dialogueCase == 1) {
		document.getElementById("dialogue").innerHTML = "481-6BD-97 LOADED";
	}
}

setTimeout(updateDialogue, 1000);
setTimeout(dialogueCase = 1, 1000);