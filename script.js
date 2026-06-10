const overlay = document.getElementById("overlay");
const main = document.getElementById("main");
const music = document.getElementById("bgmusic");

overlay.addEventListener("click", ()=>{

    overlay.classList.add("hide");

    setTimeout(()=>{
        main.classList.add("show");
    },300);

    music.play();

});

document.getElementById("arrow").onclick = ()=>{

    document.querySelector(".profile").style.transform =
    "scale(.85) translateY(-150px)";

    document.querySelector(".title").style.opacity = "0";
    document.querySelector(".desc").style.opacity = "0";

    document.getElementById("socials")
    .classList.add("show");

};
