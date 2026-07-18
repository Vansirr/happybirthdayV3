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

if(page < data.pages.length-1){

const book=document.querySelector(".book");

book.classList.add("page-change");

setTimeout(()=>{

page++;

loadPage();

},300);

setTimeout(()=>{

book.classList.remove("page-change");

},600);

    }else{

        window.location.href = "ending.html";

    }

}

function prevPage(){

if(page > 0){

const book=document.querySelector(".book");

book.classList.add("page-change");

setTimeout(()=>{

page--;

loadPage();

},300);

setTimeout(()=>{

book.classList.remove("page-change");

},600);

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
