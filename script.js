console.log("Welcom To Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');


let songs = [
    {songName: "Agar Tum Saath Ho", filePath: "songs/1.mp3", coverPath: "cover/1.jpg"},
    {songName: "Labon Ko", filePath: "songs/2.mp3", coverPath: "cover/2.jpg"},
    {songName: "Maula Mere", filePath: "songs/3.mp3", coverPath: "cover/3.jpg"},
    {songName: "Chahu Mai Ya Na", filePath: "songs/4.mp3", coverPath: "cover/4.jpg"},
    {songName: "Nahi Milta", filePath: "songs/5.mp3", coverPath: "cover/5.jpg"},
    {songName: "Theher Ja", filePath: "songs/6.mp3", coverPath: "cover/6.jpg"},
    {songName: "Tose Naina", filePath: "songs/7.mp3", coverPath: "cover/7.jpg"},
];

// audioElement.play();

// Handle Play/Pause Click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src =('1.mp3,2.mp3,3.mp3,4.mp3,5.mp3,6.mp3,7.mp3')[songIndex - 1];
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})