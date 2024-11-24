let video = document.getElementById('video');
let playPauseBtn = document.getElementById('play-pause');
let progressBar = document.getElementById('progressBar')
let isPlaying = false;
let videoCurrentTime = document.getElementById('currentTime')
let videoDuration = document.getElementById('duration')
let progress = document.querySelector('.progress');
let forwardBtn = document.getElementById('forward');
let backwardBtn = document.getElementById('backward');
let controls = document.querySelector('.controls')
let videoContainer = document.querySelector('.video-container');

playPauseBtn.addEventListener('click', ()=>{
   if(isPlaying == false){
    video.play();
    isPlaying = true;
    playPauseBtn.innerHTML = '<i class="bi play bi-pause"></i>'
   }
   else{
    video.pause();
    isPlaying = false;
    playPauseBtn.innerHTML = '<i class="bi play bi-play"></i>'

   }
})

videoContainer.addEventListener('mouseover', ()=>{
    controls.classList.remove('hide-controls')
    controls.classList.add('show-controls')
})
videoContainer.addEventListener('mouseout', ()=>{
    console.log('aaaaaa')

    controls.classList.remove('show-controls')
    controls.classList.add('hide-controls')
    
})
forwardBtn.addEventListener('click', ()=>{
    // video.currentTime =+5;
    forwardBtn.classList.add('f-rotate');
    setTimeout(()=>{
        forwardBtn.classList.remove('f-rotate');
    }, 200)
    video.currentTime = video.currentTime +5;

})
backwardBtn.addEventListener('click', ()=>{
    backwardBtn.classList.add('b-rotate');
    setTimeout(()=>{
        backwardBtn.classList.remove('b-rotate');
    }, 200)
    video.currentTime = video.currentTime -5;
})
function timeFormatter(time){
    let minutes = Math.floor(time/ 60);
    minutes = minutes < 10 ? '0'+ minutes : minutes;
    let second = Math.floor(time % 60);
    second = second< 10 ? '0'+second : second;
    return `${minutes}:${second}`;
}
video.addEventListener('timeupdate', ()=>{
    let currentTime = video.currentTime;
    let duration = video.duration;
    let fCurrentTime = timeFormatter(currentTime)
    let fDuration = timeFormatter(duration)

    videoCurrentTime.innerText = fCurrentTime;
    videoDuration.innerText = fDuration;
    let per = (currentTime / duration) * 100;
    progressBar.style.width = per + '%';
})
progress.addEventListener('click', (e)=>{
    let progressWidth = progress.clientWidth;
    video.currentTime = (e.offsetX / progressWidth) * video.duration;
})
video.addEventListener('ended', ()=>{
    isPlaying = false;
    playPauseBtn.innerHTML = '<i class="bi bi-play"></i>'
})