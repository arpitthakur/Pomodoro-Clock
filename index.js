const plusBtn = document.getElementById('plus-btn');
const minusBtn = document.getElementById('minus-btn');
let status = document.getElementById('status');
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const stopBtn = document.getElementById('stop-btn');
const alarmAudio = doccument.getElementById('myAudio');
let remainingSeconds;
let currentState="stop";
let interval;
function alertMsg () {
    alert('Invalid Input, Please Enter only digits than zero');
}
function checkTimeInput() {
    return timeInput.value.toString().split('').reduce((valid , element) => {
      return valid && (element >= '0' && element <= '9');
    },true) 
    && timeInput.value.toString().length>0 
    && timeInput.value > 0;
  }
  function convertToTimerFormat (input) {
      if (input < 10)return '0' + input;
      return input;
  }
  plusBtn.addEventListener ('click',event => {
      event.preventDefault();
      checkTimeInput() ? timeInput.value++ : alertMsg();
    } );
    minusBtn.addEventListener ('click',event => {
        event.preventDefault();
        checkTimeInput() ? timeInput.value-- :alertMsg();
    } );
    function enableElements () {
        timeInput.removeAttribute('disabled');
        plusBtn.style.display = "";
        minusBtn.style.display = "";
    }
    function disableElements () {
        timeInput.setAttribute("disabled",'');
        plusBtn.style.display = "none";
        minusBtn.style.display = "none";
    }
    function countDown(){
        remainingSeconds--;
        `${Math.floor(remainingSeconds/60)}:${convertToTimeFormat(remainingSeconds % 60)}`;
        if (remainingSeconds === 0) {
            stop();
            status.textContent = "Time's Up!";
            alarmAudio.play();
        }
    } 
    function play(){
        if (currentState === 'stop')
        {
            if(checkTimeInput())
        {
            remainingSeconds = timeInput.value * 60;
            interval = setInterval(countDown,1000);
      disableElements();
      currentState = 'play';
    }
    else
      alertMsg();
  }
  else if(currentState=='pause') {
    disableElements();
    interval = setInterval(countDown,1000);
    currentState = 'play';
  } 
}
function pause(){
    if (currentState === 'play') {
        currentState = 'pause';
        clearInterval(interval);
    }
}
 function stop (){
     clearInterval(interval);
     remainingSeconds=0;
     currentState = 'stop';
     status.textContent = `${timeInput.value}:00`;
     enableElements();
 }
 playBtn.addEventListener('click',event => {
     event.preventDefault();
     play();
 });
        
    