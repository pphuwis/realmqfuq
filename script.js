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

const DISCORD_ID = "999990259829981205";
const ROBLOX_ID = "1726185250";

document.getElementById("discord-icon").src =
"https://cdn-icons-png.flaticon.com/512/2111/2111370.png";

fetch(
`https://api.lanyard.rest/v1/users/${DISCORD_ID}`
)
.then(res => res.json())
.then(data => {

    document.getElementById("discord-status")
    .innerText =
    data.data.discord_status;

});
