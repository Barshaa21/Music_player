
let songIndex = 0;
let audioElement = new Audio('music/0.mp3');
const songname = document.getElementById('songname');
let rangebar = document.getElementById('rangebar');
let gif = document.getElementById('gif');
let playbutton = document.getElementById('playbutton');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let image = document.getElementById('image');

const songs = [
    { songname: 'MEHER-2',songIndex:0, picture: 'MEHER-2.jpg', filepath: 'C:\Users\Dell\Desktop\codes\project-1.1\music\0.mp3' },
    { songname: 'melody music',songIndex:1, picture: 'melody music.jpg', filepath: 'C:\Users\Dell\Desktop\codes\project-1.1\music\1.mp3' },
    { songname: 'baadsh',songIndex:2, picture: 'baadsh.jpg', filepath: 'C:\Users\Dell\Desktop\codes\project-1.1\music\2.mp3' },
    { songname: 'MEHER',songIndex:3, picture: 'MEHER.jpg', filepath: 'C:\Users\Dell\Desktop\codes\project-1.1\music\3.mp3' },
    { songname: 'Linkin',songIndex:4, picture: 'Linkin.jpg', filepath: 'C:\Users\Dell\Desktop\codes\project-1.1\music\4.mp3' },
    { songname: 'Samaye',songIndex:5, picture: 'Samaye.jpg', filepath: 'C:\Users\Dell\Desktop\codes\project-1.1\music\5.mp3' },
]

playbutton.addEventListener(('click'), () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        playbutton.classList.remove('fa-play');
        playbutton.classList.add('fa-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        playbutton.classList.remove('fa-pause');
        playbutton.classList.add('fa-play');
        gif.style.opacity = 0;


    }
})

next.addEventListener(('click'), () => {
    if (songIndex >= 0 && songIndex<=5) {
        audioElement.src = `music/${songIndex + 1}.mp3`;
        songIndex = songIndex + 1;
        audioElement.play();
        loadSong(songs[songIndex]);
    }
 
})

prev.addEventListener(('click'), () => {
    if (songIndex > 0) {
        audioElement.src = `music/${songIndex - 1}.mp3`;
        songIndex = songIndex - 1;
        audioElement.play();
        loadSong(songs[songIndex]);
    }
})
const loadSong = (songs) => {
    songname.textContent = songs.songname;
    image.src = 'images/' + songs.songname + '.jpg';
}
// i = songIndex;
// loadSong(songs[i]);


audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    rangebar.value = progress;
    if (audioElement.currentTime == audioElement.duration) {
        audioElement.src = `music/${songIndex + 1}.mp3`;
        songIndex=songIndex+1;
        audioElement.play();
        loadSong(songs[songIndex]);
    }
})

rangebar.addEventListener('change', () => {
    audioElement.currentTime = (rangebar.value * audioElement.duration) / 100;
})

