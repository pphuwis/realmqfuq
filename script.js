console.log("script loaded");
const arrow = document.getElementById("arrow");

arrow.onclick = ()=>{

    document
    .getElementById("profile-section")
    .style.top = "14%";

    document
    .querySelector(".profile")
    .style.transform =
    "scale(.8)";

    document
    .querySelector(".title")
    .style.opacity = "0";

    document
    .querySelector(".desc")
    .style.opacity = "0";

    setTimeout(()=>{

        document
        .getElementById("socials")
        .classList.add("show");

    },300);

}
