const startMinutes = 25;
let time = startMinutes * 60;
const countdownEl = document.getElementById('countdown');



function start() {
    setInterval(updateCountdown, 1000);
    function updateCountdown() {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;
    
        seconds = seconds < 10 ? '0' + seconds : seconds;
        
        countdownEl.innerHTML = `${minutes} : ${seconds}`;
        time--;

    }
    
}

function restart() {
    countdownEl.innerHTML = 25;
    setTimeout(updateCountdown);
}

// function restart() {
//     setInterval(Countdown, 1000);
//     function Countdown() {
//         const minutes = 25;
//         let seconds = 0;
    
//         seconds = seconds < 10 ? '0' + seconds : seconds;
        
//         countdownEl.innerHTML = `${minutes} : ${seconds}`;
//         clearTimeout(countdown);
//     }
// }







// function start() {
    
//     seconds = 59;

//     let minutes = minutes - 1; 
//      // countdown
//      let timerFunction = () => {
//         //change the display
//         document.getElementById('minutes').innerHTML = wor minutes;
//         document.getElementById('seconds').innerHTML = seconds;

//         // start
//         seconds = seconds - 1;

//         if(seconds === 0) {
//             minutes = minutes - 1;
//             if(minutes === -1 ){
               
//                     // continue work
//                     minutes = minutes;
//                     breakCount++

//                     // change the painel
//                     breakTittle.classList.remove('active');
//                     workTittle.classList.add('active');
                
//             }
//             seconds = 59;
//         }
//     }

//     // start countdown
//     setInterval(timerFunction, 1000); // 1000 = 1s
// }
