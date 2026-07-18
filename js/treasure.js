const glow=document.getElementById("glow");

const chest=document.getElementById("chest");

function openChest(){

chest.classList.add("open");

glow.style.opacity=1;

setTimeout(()=>{

window.location.href="book.html";

},2500);

}

const container=document.querySelector(".bubble-container");

for(let i=0;i<70;i++){

const bubble=document.createElement("div");

bubble.className="bubble";

const size=Math.random()*20+10;

bubble.style.width=size+"px";
bubble.style.height=size+"px";

bubble.style.left=Math.random()*100+"%";

bubble.style.animationDuration=(Math.random()*8+5)+"s";

bubble.style.animationDelay=Math.random()*4+"s";

container.appendChild(bubble);

}