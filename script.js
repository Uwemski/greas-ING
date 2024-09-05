/*to save ourself the stress of typing long and keeping it short*/
var pop, link, dismiss;

pop = document.getElementById("popUp");
link = document.getElementById("popupContent");
dismiss = document.getElementById("close-btn");

//create a function for your pop up dialogue box

link.onclick = function (event) {
    event.preventDefault();
    pop.style.display = "flex"; 
}

dismiss.onclick = function () {
    pop.style.display = "none"; // Hides the pop-up
}

