setInterval(()=>{
     date = new Date();
     hours = date.getHours();
     minutes = date.getMinutes();
     seconds = date.getSeconds();
     hrotation = 30*hours + minutes/2;
     mrotation = 6*minutes;
     srotation = 6*seconds;
     document.querySelector(".seconds").style.transform =`rotate(${srotation}deg)`;   
     document.querySelector(".minutes").style.transform =`rotate(${mrotation}deg)`;
        document.querySelector(".hours").style.transform =`rotate(${hrotation}deg)`;
         
  },1000)


let hello = new Audio("./assets/clock-sound.mp3"); 
   
   document.querySelector(".play").onclick =   () => {            
     hello.play();
     }
     
   document.querySelector(".pause").onclick = () => {            
     hello.pause();
     }


 
