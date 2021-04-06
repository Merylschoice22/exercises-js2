/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).

Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp)
================
*/


setTimeout(function (){
        document.body.style.backgroundColor = 'blue';
}, 5000);



// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// function getRandomColor() {
//   const r = getRandomInt(0, 255);
//   const g = getRandomInt(0, 255);
//   const b = getRandomInt(0, 255);
//   return `rgb(${r}, ${g}, ${b})`;
// }

// setInterval(function() {
//     document.body.style.background = getRandomColor();
// }, 2000);