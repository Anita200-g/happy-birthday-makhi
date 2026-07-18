const openGift = document.getElementById("openGift");
const loadingScreen = document.getElementById("loading-screen");
const website = document.getElementById("website");
const song = document.getElementById("birthdaySong");


// OPEN SURPRISE BUTTON
if(openGift){

openGift.addEventListener("click", function(){

    if(loadingScreen){
        loadingScreen.style.opacity = "0";

        setTimeout(()=>{
            loadingScreen.style.display = "none";
        },1000);
    }

    if(website){
        website.classList.remove("hidden");
    }


    // PLAY MUSIC
    if(song){
        song.play().catch(error=>{
            console.log("Music blocked:", error);
        });
    }

});

}


// FLOATING HEARTS
function createHeart(){

let heart=document.createElement("div");

heart.innerHTML="❤";

heart.style.position="fixed";
heart.style.left=Math.random()*100+"vw";
heart.style.top="100vh";
heart.style.fontSize=(20+Math.random()*25)+"px";
heart.style.color="#ff4d88";
heart.style.opacity="0.7";
heart.style.zIndex="9999";

document.body.appendChild(heart);


let pos=100;

let move=setInterval(()=>{

pos--;

heart.style.top=pos+"vh";

if(pos < -10){

heart.remove();

clearInterval(move);

}

},35);

}

setInterval(createHeart,700);



// IMAGE POPUP
document.querySelectorAll(".gallery img").forEach(img=>{

img.onclick=function(){

let overlay=document.createElement("div");

overlay.style.position="fixed";
overlay.style.inset="0";
overlay.style.background="rgba(0,0,0,.9)";
overlay.style.display="flex";
overlay.style.alignItems="center";
overlay.style.justifyContent="center";
overlay.style.zIndex="99999";


let big=document.createElement("img");

big.src=this.src;

big.style.maxWidth="90%";
big.style.maxHeight="90%";
big.style.borderRadius="20px";


overlay.appendChild(big);

overlay.onclick=()=>overlay.remove();


document.body.appendChild(overlay);

}

});



// SECTION ANIMATION

let sections=document.querySelectorAll("section");


let observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

});


sections.forEach(section=>{

section.style.opacity="0";
section.style.transform="translateY(50px)";
section.style.transition="1s";

observer.observe(section);

});
