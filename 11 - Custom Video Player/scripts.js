// get elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');


// build functions

// play and pause
function togglePlay() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function updateButton() {
    let icon;
    if (this.paused) {
        icon = '❚ ❚';
    } else {
        icon = '▶︎';
    }
    toggle.textContent = icon;
} 

function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
    video.play();
}

function handleRangeUpdate() {
    video[this.name] = this.value;
}

// update flex-basis %
function handleProgress() {

    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

// play and pause when clicked video
video.addEventListener('click', togglePlay);
// update button ▶︎ and ❚❚ when play and pause
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
// update progress bar
video.addEventListener('timeupdate', handleProgress);
progressBar.addEventListener('click', handleProgress);

// play and pause when clicked "▶︎" 
toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));

