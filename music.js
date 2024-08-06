const audio = document.getElementById("currmusic");
const h3 = document.getElementById("trackname");
const play = document.getElementById("stop");
const front = document.getElementById("front");
const back = document.getElementById("back");
const trackimg = document.getElementById("trimg");
console.log(audio.innerHTML);

//array of objects
const audiofiles = [
    //obj1
    { name: 'Fire Sounds', src: 'aachen_burning-fireplace-crackling-fire-soundswav-14561.mp3', image: 'fireimg.png' },
    //obj2
    { name: 'Nature Sounds', src: 'birds-singing-calm-river-nature-ambient-sound-127411.mp3', image: 'birds.png' },
    //obj3
    { name: 'Rain Sounds', src: 'rain-and-thunder-176105.mp3', image: 'rain.png' },
    //obj4
    { name: 'Once in Paris', src: 'once-in-paris-168895.mp3', image: 'paris.png' },
    { name: 'Perfect Beauty', src: 'perfect-beauty-191271.mp3', image: 'beauty.png' },
    { name: 'Theta Waves', src: 'theta-waves-158742.mp3', image: 'Theta Waves.png' },
    { name: 'Good Night', src: 'good-night-160166.mp3', image: 'goodnight.png' },



];
let currtrack = 0;
let isPlaying = false;

//audiofiles[currtrack] is the element at currtrack index in audiofiles
function updateTrackName() {
    //access index and attribute of object
    h3.textContent = audiofiles[currtrack].name;
    trackimg.src = audiofiles[currtrack].image
}
//play pause
function playpausetoggle() {
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
        play.textContent = '\u275A\u275A';
    }
    else {
        audio.play();
        isPlaying = true;
        play.textContent = '\u24bA';
    }
}
play.addEventListener("click", () => {
    playpausetoggle();
});

front.addEventListener("click", () => {
    currtrack = (currtrack + 1) % audiofiles.length;
    audio.src = audiofiles[currtrack].src;
    updateTrackName();
    if (isPlaying) {
        audio.play();
    }
});
back.addEventListener("click", () => {
    currtrack = (currtrack - 1 + audiofiles.length) % audiofiles.length;
    audio.src = audiofiles[currtrack].src;
    updateTrackName();
    if (isPlaying) {
        audio.play();
        //if already playing continue playing from new track
    }
});
updateTrackName();
audio.src = audiofiles[currtrack].src;
audio.play();

