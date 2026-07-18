const user = localStorage.getItem("oceanUser");

if(!user){

window.location.href="index.html";

}

const bar=document.getElementById("bar");

const percent=document.getElementById("percent");

const status=document.getElementById("status");

const texts=[

"Preparing Your Ocean Journey...",

"Collecting Precious Memories...",

"Lighting The Ocean Path...",

"Almost Ready..."

];

let value=0;

const loading=setInterval(()=>{

value++;

bar.style.width=value+"%";

percent.innerHTML=value+"%";

if(value==25){

status.innerHTML=texts[1];

}

if(value==55){

status.innerHTML=texts[2];

}

if(value==85){

status.innerHTML=texts[3];

}

if(value>=100){

clearInterval(loading);

document.body.style.transition="1s";

document.body.style.opacity="0";

setTimeout(()=>{

window.location.href="treasure.html";

},1000);

}

},40);

const bubbles=document.querySelector(".bubbles");

for(let i=0;i<80;i++){

const bubble=document.createElement("div");

bubble.className="bubble";

const size=Math.random()*25+8;

bubble.style.width=size+"px";

bubble.style.height=size+"px";

bubble.style.left=Math.random()*100+"%";

bubble.style.animationDuration=(Math.random()*8+5)+"s";

bubble.style.animationDelay=Math.random()*5+"s";

bubbles.appendChild(bubble);

}