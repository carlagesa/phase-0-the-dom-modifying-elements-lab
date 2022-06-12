// Write your code here!
//No longer has DOM node #main
const main = document.getElementById("main");
document.body.removeChild(main);

const newHeader = document.createElement("h1");
newHeader.id = "victory";

newHeader.innerHTML = "CARL is the champion";
document.body.appendChild(newHeader);
