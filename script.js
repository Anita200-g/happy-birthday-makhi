const openGift = document.getElementById("openGift");
const loadingScreen = document.getElementById("loading-screen");
const website = document.getElementById("website");
const song = document.getElementById("birthdaySong");

// Open Surprise
openGift.addEventListener("click", () => {

    loadingScreen.style.opacity = "0";

    setTimeout(() => {

        loadingScreen.style.display = "none";

        website.classList.remove("hidden");

        song.play();

    },1000);

});

// Floating Hearts

function createHeart(){

const heart=document.createElement("div");

heart.innerHTML="❤";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="100vh";

heart.style.fontSize=(20+Math.random()*25)+"px";

heart.style.color="#ff4d88";

heart.style.opacity=.7;

heart.style.pointerEvents="none";

heart.style.zIndex="999";

document.body.appendChild(heart);

let pos=100;

const move=setInterval(()=>{

pos--;

heart.style.top=pos+"vh";

heart.style.transform=`translateX(${Math.sin(pos/8)*20}px)`;

if(pos<-10){

heart.remove();

clearInterval(move);

}

},35);

}

setInterval(createHeart,700);

// Sparkles

function sparkle(){

const star=document.createElement("div");

star.innerHTML="✦";

star.style.position="fixed";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.color="gold";

star.style.fontSize="18px";

star.style.pointerEvents="none";

star.style.opacity=".8";

document.body.appendChild(star);

setTimeout(()=>{

star.remove();

},1200);

}

setInterval(sparkle,500);

// Click Image To Enlarge

document.querySelectorAll(".gallery img").forEach(img=>{

img.addEventListener("click",()=>{

const overlay=document.createElement("div");

overlay.style.position="fixed";

overlay.style.top="0";

overlay.style.left="0";

overlay.style.width="100%";

overlay.style.height="100%";

overlay.style.background="rgba(0,0,0,.95)";

overlay.style.display="flex";

overlay.style.justifyContent="center";

overlay.style.alignItems="center";

overlay.style.zIndex="99999";

const image=document.createElement("img");

image.src=img.src;

image.style.maxWidth="90%";

image.style.maxHeight="90%";

image.style.borderRadius="20px";

overlay.appendChild(image);

overlay.onclick=()=>overlay.remove();

document.body.appendChild(overlay);

});

});

// Fade In Sections

const sections=document.querySelectorAll("section");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

});

sections.forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(80px)";

section.style.transition="1s";

observer.observe(section);

});
