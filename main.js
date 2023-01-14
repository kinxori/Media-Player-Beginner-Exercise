// CONSTANTES
const musicLink = "./JuniorH-AtrapadoEnUnSueno.mp3";

// NODOS 

const buttonNode = document.querySelector('.btnMusic');
const audioNode = document.createElement('audio');
audioNode.src = musicLink;


// TIME DURATION 
const buttonPlacing = document.querySelector('.time-lenght')

audioNode.addEventListener('loadedmetadata', function(){

buttonPlacing.innerText = audioNode.duration
const rest = audioNode.duration - audioNode.currentTime;
const min = Math.floor(rest / 60)
const sec = Math.floor(rest % 60)
buttonPlacing.innerText = "- " +  min + ":" + (sec < 10 ? "0" + sec : sec);

});

// FUNCIONES 
let changeIcon = function(icon) {
    icon.classList.toggle('fa-heart-o')
}

console.log(changeIcon)

const toggleMusic = () => {
    if(audioNode.paused){
        audioNode.play();
        buttonNode.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
        
    }else{
        audioNode.pause();
        buttonNode.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
    }
};


const onTimeUpdated = () => {
        
    const rest = audioNode.duration - audioNode.currentTime;
    const min = Math.floor(rest / 60)
    const sec = Math.floor(rest % 60)
    buttonPlacing.innerText = "- " +  min + ":" + (sec < 10 ? "0" + sec : sec);    
};



// LISTENERS 

buttonNode.onclick = toggleMusic; 

audioNode.ontimeupdate = onTimeUpdated;


