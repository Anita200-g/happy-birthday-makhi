const music = document.getElementById("birthdaySong");
const playBtn = document.getElementById("playMusic");

playBtn.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        playBtn.innerHTML = "⏸ Pause Birthday Song";
    } else {
        music.pause();
        playBtn.innerHTML = "🎵 Play Birthday Song";
    }
});

// Floating Hearts
function createHeart() {
    const heart = document.createElement("div");

    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";
    heart.style.opacity = Math.random();
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "9999";

    document.body.appendChild(heart);

    let pos = 100;
    const move = setInterval(() => {
        pos -= 1;

        heart.style.top = pos + "vh";
        heart.style.transform =
            `translateX(${Math.sin(pos / 5) * 20}px)`;

        if (pos < -10) {
            clearInterval(move);
            heart.remove();
        }

    }, 40);
}

setInterval(createHeart, 600);

// Confetti
function confetti() {

    for (let i = 0; i < 120; i++) {

        let piece = document.createElement("div");

        piece.style.position = "fixed";
        piece.style.width = "8px";
        piece.style.height = "8px";

        piece.style.background =
            `hsl(${Math.random() * 360},100%,60%)`;

        piece.style.left = Math.random() * 100 + "vw";
        piece.style.top = "-20px";

        piece.style.pointerEvents = "none";

        piece.style.zIndex = "9998";

        document.body.appendChild(piece);

        let y = -20;

        const fall = setInterval(() => {

            y += 5;

            piece.style.top = y + "px";

            piece.style.transform =
                `rotate(${y * 4}deg)`;

            if (y > window.innerHeight) {

                clearInterval(fall);

                piece.remove();

            }

        }, 20);

    }

}

window.onload = confetti;

// Sparkles

function sparkle(){

const star=document.createElement("div");

star.innerHTML="✨";

star.style.position="fixed";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.fontSize="20px";

star.style.pointerEvents="none";

star.style.zIndex="9999";

document.body.appendChild(star);

setTimeout(()=>{

star.remove();

},1000);

}

setInterval(sparkle,300);
