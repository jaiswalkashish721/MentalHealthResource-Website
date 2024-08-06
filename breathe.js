var timeOut1 = setInterval(change, 5000);
function change() {
    let breathstatus = document.querySelector("#circle");
    if (breathstatus.innerText == "Inhale") {
        breathstatus.innerText = "Exhale";
    }
    else if (breathstatus.innerText == "Exhale") {
        breathstatus.innerText = "Inhale";
    }
    // breathstatus.innerText = breathstatus.innerText == "Inhale" ? "Exhale" : "Inhale";
}

document.addEventListener("DOMContentLoaded", () => {
    var aud = document.getElementById('bgmusic');
    aud.play();
});