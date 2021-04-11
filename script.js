const audio = document.getElementById('audio');
const playPause = document.getElementById('play');

playPause.addEventListener('click', () => {
    if (audio.pause || audio.ended) {
        playPause.querySelector('.pause-btn').classList.toggle('hide'); 
        playPause.querySelector('.play-btn').classList.toggle('hide');
        audio.play();
    } else {
        audio.pause();
        playPause.querySelector('.pause-btn').classList.toggle('hide');
        playPause.querySelector('.play-btn').classList.toggle('hide');
    }
}); 


/******DARK MODE */

const body = document.querySelector(".container");
const player =  document.querySelector('.player');
const mode = document.querySelector("#night");

mode.addEventListener("change", () => {
  body.classList.toggle("nightMode");
  player.classList.toggle('nightMode');
});
