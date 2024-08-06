const imgfiles = [
    { name: "Your feelings are valid ", image: "feelvalid.png" },
    { name: "Be kind to yourself", image: "bekind.png" },
    { name: "Healing takes time, and asking for help is a courageous step.", image: "healing.png" },
    { name: "You are worthy of a healing, recovery", image: "worthy.png" },
    { name: "Remember, you are so loved.", image: "soloved.png" },
    { name: "Hope lives here. Depression is just a visitor.", image: "hope.png" },
    { name: "Practice mindfulness and self compassion.", image: "selfcomp.png" },
    { name: "Mental sign is'nt a sign of weakness", image: "sign.png" },
];
let currimg = 0;
let front = document.getElementById("front");
let back = document.getElementById("back");
let img = document.getElementById("goodimg");
let h3 = document.getElementById("image title");
front.addEventListener("click", () => {
    currimg = (currimg + 1) % imgfiles.length;
    img.src = imgfiles[currimg].image;
    h3.textContent = imgfiles[currimg].name;

});
back.addEventListener("click", () => {
    currimg = (currimg - 1 + imgfiles.length) % imgfiles.length;
    img.src = imgfiles[currimg].image;
    h3.textContent = imgfiles[currimg].name;

});

function updateimg() {
    img.src = imgfiles[currimg].image;
    h3.textContent = imgfiles[currimg].name;
}
updateimg();