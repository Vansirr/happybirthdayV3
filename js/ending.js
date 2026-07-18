const user=localStorage.getItem("oceanUser");

document.getElementById("name").textContent=user.toUpperCase();

function restart(){

window.location.href="book2.html";

}