

function start() {
    let seconds = 59;
    let minutes = 24;
    document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("minutes").innerHTML = minutes + " :";

    let workMinute = minutes - 1;

    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer)
    })

    
}

function restart() {
    let minutes = 25;
    let seconds = '00'

    document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("minutes").innerHTML = minutes + " :";
}




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
