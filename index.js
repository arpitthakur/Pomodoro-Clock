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
  