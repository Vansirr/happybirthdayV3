const user = localStorage.getItem("oceanUser");

if(!user){
    window.location.href="index.html";
}

const data = birthdayData[user];

let page = 0;

const photo = document.getElementById("photo");
const title = document.getElementById("title");
const text = document.getElementById("text");
const music = document.getElementById("music");

music.src = data.song;

function loadPage(){

    photo.src = data.pages[page].photo;
    title.textContent = data.pages[page].title;
    text.textContent = data.pages[page].text;

}

loadPage();

function nextPage(){

    if(page < data.pages.length - 1){

        const left = document.querySelector(".left");
        const right = document.querySelector(".right");

        left.classList.add("animate");
        right.classList.add("animate");

        setTimeout(()=>{

            page++;

            loadPage();

            left.classList.remove("animate");
            right.classList.remove("animate");

        },300);

    }else{

        window.location.href = "ending.html";

    }

}

function prevPage(){

if(page > 0){

const left=document.querySelector(".left");

const right=document.querySelector(".right");

left.classList.add("animate");

right.classList.add("animate");

setTimeout(()=>{

page--;

loadPage();

left.classList.remove("animate");

right.classList.remove("animate");

},300);

}

}

function openPhoto(){

const img=document.getElementById("photo");

document.getElementById("preview").src=img.src;

document.getElementById("lightbox").style.display="flex";

}

function closePhoto(){

document.getElementById("lightbox").style.display="none";

}

let playing=true;

function toggleMusic(){

if(playing){

music.pause();

document.getElementById("musicBtn").textContent="🔈 Play";

}else{

music.play();

document.getElementById("musicBtn").textContent="🔊 Music";

}

playing=!playing;

}