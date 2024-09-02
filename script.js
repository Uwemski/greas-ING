/*to save ourself the stress of typing long and keeping it short*/
var pop, link;

pop = document.getElementById("popUp");
link = document.getElementById("popupContent");
//create a function for your pop up dialogue box

link.onclick = function (event) {
    event.preventDefault();
    pop.style.display = "flex";
}