
const loadingText =
document.getElementById("loading-text");
const loadingScreen =
document.getElementById("loading-screen");
const overlay =
document.getElementById("overlay");
const typing =
document.getElementById("typing");
const music =
document.getElementById("music");
let percent = 0;
const loading = setInterval(()=>{
    percent++;
    loadingText.innerText =
    `Loading ${percent}%`;
    if(percent >= 100){
        clearInterval(loading);
        loadingScreen.style.display =
        "none";
        overlay.style.display =
        "flex";
    }
},20);
overlay.onclick = ()=>{
    overlay.style.display =
    "none";
    music.play();
    startTyping();
}
function startTyping(){
    const text =
    "[ REALMAFUQ ]";
    let i = 0;
    const interval =
    setInterval(()=>{
        typing.textContent +=
        text[i];
        i++;
        if(i >= text.length){
            clearInterval(interval);
        }
    },120);
}
const particleContainer =
document.getElementById("particles");
for(let i=0;i<50;i++){
    const p =
    document.createElement("div");
    p.className =
    "particle";
    const size =
    Math.random()*4+1;
    p.style.width =
    size+"px";
    p.style.height =
    size+"px";
    p.style.left =
    Math.random()*100+"vw";
    p.style.animationDuration =
    10+Math.random()*15+"s";
    p.style.animationDelay =
    Math.random()*10+"s";
    particleContainer.appendChild(p);
}
