document.querySelector('#set').addEventListener('click', setAlarm)
let alarmSetInput = document.querySelector('#alarmSet').valueAsNumber;
let timeRemaining = document.querySelector('#timeRemaining');
let currentTime = alarmSetInput;

function setAlarm() {
  timeRemaining.innerText = `Time Remaining: ${alarmSetInput}`;

  setInterval(function (num) {
    timeRemaining.innerText = `Time Remaining: ${alarmSetInput}`;
    currentTime -= 1
  }, 1000)
}

if (currentTime === 0) {
  playAlarm();
}

const stopAlarmBtn = document.querySelector('#stop');
stopAlarmBtn.addEventListener('click', pauseAlarm)


// DO NOT EDIT BELOW HERE

// var audio = new Audio("alarmsound.mp3");

// function setup() {
//   document.getElementById("set").addEventListener("click", () => {
//     setAlarm();
//   });

//   document.getElementById("stop").addEventListener("click", () => {
//     pauseAlarm();
//   });
// }

// function playAlarm() {
//   audio.play();
// }

// function pauseAlarm() {
//   audio.pause();
// }

// window.onload = setup;
