const arrow = document.getElementById("arrow");
const socials = document.getElementById("socials");
const profile = document.getElementById("profile-section");

arrow.addEventListener("click", () => {

    profile.classList.add("move-up");

    socials.classList.add("show");

});
