const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;

function updateTime(){
    elapsedTime = Date.now() - startTime;
    
    secs = Math.floor((elapsedTime / 1000) % 60);
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
    hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

    secs = pad(secs);
    mins = pad(mins);
    hrs = pad(hrs);

    timeDisplay.textContent = `${hrs}:${mins}:${secs}`;

    function pad(unit){
        return (("0") + unit).length > 2 ? unit : "0" + unit;
    }
}

startBtn.addEventListener("click", () => {
    if(paused){
        paused = false;
        console.log(elapsedTime);
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime, 1000);
       
    }
});

pauseBtn.addEventListener("click", () => {
    if(!paused){
        paused = true;
        console.log(startTime);
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalId);
       
    }
});
resetBtn.addEventListener("click", () => {
    paused = true;
    clearInterval(intervalId);
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    hrs = 0;
    mins = 0;
    secs = 0;
    timeDisplay.textContent = "00:00:00";
});



    let minutes = 0;
      let seconds = 0;
      let tens = 0;
      let appendMinutes = document.querySelector('#minutes');
      let appendTens = document.querySelector('#tens');
      let appendSeconds = document.querySelector('#seconds');
      let StartBtn = document.querySelector('#start');
      let stopBtn = document.querySelector('#stop');
      let ResetBtn = document.querySelector('#reset');
      
      let Interval;

      const startTimer = () => {
        tens++;
        if (tens <= 9) {
          appendTens.innerHTML = '0' + tens;
        }
        if (tens > 9) {
          appendTens.innerHTML = tens;
        }

        if (tens > 99) {
          seconds++;
          appendSeconds.innerHTML = '0' + seconds;
          tens = 0;
          appendTens.innerHTML = '0' + 0;
        }

        if (seconds > 9) {
          appendSeconds.innerHTML = seconds;
        }

        if (seconds > 59) {
          minutes++;
          appendMinutes.innerHTML = '0' + minutes;
          seconds = 0;
          appendSeconds.innerHTML = '0' + 0;
        }
      };
      StartBtn.onclick = () => {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
      };

      stopBtn.onclick = () => {
        clearInterval(Interval);
      };

      ResetBtn.onclick = () => {
        clearInterval(Interval);
        tens = '00';
        seconds = '00';
        minutes = '00';
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
        appendMinutes.innerHMTL = minutes;
      };

      function mainbuttonclick(){
        startBtn.click();
        StartBtn.click();
      }
      function mainbuttonclickStop(){
        pauseBtn.click();
        stopBtn.click();
      }
      function mainbuttonclickReset(){
        resetBtn.click();
        ResetBtn.click();
      }
      mainbutton.addEventListener('click', mainbuttonclick);
      mainbuttonStop.addEventListener('click', mainbuttonclickStop);
      mainbuttonReset.addEventListener('click', mainbuttonclickReset);