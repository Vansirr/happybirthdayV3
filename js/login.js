const users={

mimiw:{
password:"mimiwrajaiblis"
},

jahe:{
password:"jahevillain"
}

};

function login(){

const username=document.getElementById("username").value.trim().toLowerCase();

const password=document.getElementById("password").value;

const error=document.getElementById("error");

if(users[username] && users[username].password===password){

localStorage.setItem("oceanUser",username);

window.location.href="loading.html";

}else{

error.innerHTML="Username atau Password salah.";

}

}

const bubbles=document.querySelector(".bubbles");

for(let i=0;i<60;i++){

const bubble=document.createElement("div");

bubble.className="bubble";

const size=Math.random()*30+10;

bubble.style.width=size+"px";
bubble.style.height=size+"px";

bubble.style.left=Math.random()*100+"%";

bubble.style.animationDuration=(Math.random()*8+5)+"s";

bubble.style.animationDelay=Math.random()*5+"s";

bubbles.appendChild(bubble);

}