const user=localStorage.getItem("oceanUser");

const data=birthdayData[user];

let page=0;

const music=document.getElementById("music");

music.src=data.song;

music.play();

function loadPage(){

document.getElementById("title").innerHTML=data.pages[page].title;

document.getElementById("text").innerHTML=data.pages[page].text;

document.getElementById("photo").src=data.pages[page].photo;

}

loadPage();

function nextPage(){

if(page<data.pages.length-1){

const sheet=document.getElementById("page");

sheet.classList.add("flip");

setTimeout(()=>{

page++;

loadPage();

sheet.classList.remove("flip");

},450);

}

}

function prevPage(){

if(page>0){

const sheet=document.getElementById("page");

sheet.classList.add("flip");

setTimeout(()=>{

page--;

loadPage();

sheet.classList.remove("flip");

},450);

}

}