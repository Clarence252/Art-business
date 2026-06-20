// Current year

const year=document.getElementById("year");

if(year){

year.innerHTML=new Date().getFullYear();

}


// Navbar background on scroll

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>80){

header.style.background="rgba(255,255,255,.98)";

}else{

header.style.background="rgba(255,255,255,.9)";

}

});


// Smooth gallery animation

const cards=document.querySelectorAll(".card");

cards.forEach((card,index)=>{

card.style.opacity="0";

card.style.transform="translateY(50px)";

setTimeout(()=>{

card.style.transition=".6s";

card.style.opacity="1";

card.style.transform="translateY(0)";

},index*100);

});


// Image modal later

console.log("Legacy Sketch Works loaded");
