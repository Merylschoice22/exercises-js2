// const createPauseBtn = () => {
//   const pauseAlarmBtn = document.createElement("button");
//   pauseAlarmBtn.innerText = "Pause Alarm";
//   pauseAlarmBtn.setAttribute(type, button);
//   pauseAlarmBtn.setAttribute(id, "pause");
//   document.body.querySelector(".centre").appendChild(pauseAlarmBtn);
// };
// createPauseBtn();

document.querySelector("#set").addEventListener("click", setAlarm);

let alarmSetInput = document.querySelector("#alarmSet");

let timeRemaining = document.querySelector("#timeRemaining");

let tickTock = null;

/*** SET ALARM BUTTON FUNCTION ***/

function setAlarm() {
  document.body.style.backgroundColor = "";
  timeRemaining.style.color = "";
  let alarmInputValue = alarmSetInput.value;
  tickTock = setInterval(() => {
    let minutes = Math.floor(alarmInputValue / 60);
    if (minutes < 10) {
      minutes = minutes.toString().padStart(2, "0");
    }
    let seconds = alarmInputValue % 60;
    if (seconds < 10) {
      seconds = seconds.toString().padStart(2, "0");
    }
    let time = minutes + ":" + seconds;
    alarmSetInput.value = "";
    timeRemaining.innerText = `Time Remaining: ${time}`;

    console.log(alarmInputValue, time);
    alarmInputValue -= 1;

    if (alarmInputValue < 0) {
      alarm();
    }
  }, 1000);
}

/**** ALARM FINISHES FUNCTION ****/

const alarm = () => {
  playAlarm();
  clearInterval(tickTock);
  document.body.style.backgroundColor = "red";
  alarmFinishedBlinking();
};

/** ALARM TEXT BLINKING **/
let textDisplay = true;
let blinkingText = null;

const alarmFinishedBlinking = () => {
  blinkingText = setInterval(() => {
    if (textDisplay) {
      console.log("Hide text");
      timeRemaining.style.color = "red";

      textDisplay = false;
    } else {
      console.log("Show text");
      timeRemaining.style.color = "";

      textDisplay = true;
    }
    console.log("BLINK");
  }, 500);
};

/** PAUSE ALARM BUTTON FUNCTION **/
const pauseAlarm = () => {
  audio.pause();
  if (alarmInputValue > 0) {
    blinkingTime = setInterval(() => {
      if (textDisplay) {
        console.log("Hide text");
        timeRemaining.style.color = "red";

        textDisplay = false;
      } else {
        console.log("Show text");
        timeRemaining.style.color = "";

        textDisplay = true;
      }
      console.log("BLINK");
    }, 500);
  }

  clearInterval(tickTock);
};

/** STOP ALARM BUTTON FUNCTION **/

const stopAlarm = () => {
  clearInterval(tickTock);
  audio.pause();
  clearInterval(blinkingText);
};

const stopAlarmBtn = document.querySelector("#stop");
stopAlarmBtn.addEventListener("click", stopAlarm);

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

// function setup() {
//   document.getElementById("set").addEventListener("click", () => {
//     setAlarm();
//   });

//   document.getElementById("stop").addEventListener("click", () => {
//     pauseAlarm();
//   });
// }

function playAlarm() {
  audio.play();
}

// function pauseAlarm() {
//   audio.pause();
// }

// window.onload = setup;
