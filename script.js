document.getElementById("arrow").onclick = ()=>{

    document.querySelector(".profile").style.transform =
    "scale(.85)";

    document.getElementById("profile-section")
    .style.top = "18%";

    document.querySelector(".title")
    .style.opacity = "0";

    document.querySelector(".desc")
    .style.opacity = "0";

    document.getElementById("socials")
    .classList.add("show");
};
