/*
================

1. Create an HTML file that uses this javascript file.
2. The HTML file should contain a form with 2 inputs: (latitude and longitude), and a button with the text GET.
3. When you click in the button, you should use fetch function to get information from the URL https://fcc-weather-api.glitch.me/api/current?lat=35&lon=45 with 
user latitude and longitude.
4. When you get the response from the server, print the current temperature in an <h3> marker.
5. Validate the form when you click on the button, if the inputs are empty or ar not numeric, show a warning message

================
*/

/*** PRINT WELCOME MESSAGE ***/
const h3 = document.createElement("h3");
const h2 = document.createElement("h2");
h2.innerText = "Input coordinates to locate a city";
h3.innerText = "The city temperature will be shown here";
document.body.appendChild(h2);
document.body.appendChild(h3);
const getBtn = document.querySelector("#getBtn");
getBtn.setAttribute("disabled", true);

/*** VARIABLES ***/
// let lat = "";
// let lon = "";
// console.log("BEFORE lat " + lat, " lon " + lon);
/*** INPUT FETCH ***/
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  let lat = document.getElementById("lat").value;
  let lon = document.getElementById("lon").value;
  console.log("IN THE FORM lat " + lat, " lon " + lon);
  (isValid(lat, lon) &&
    fetch(`https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${lon}`)
      .then((response) => response.json())
      .then((temperatures) => {
        console.log("Coordinates THEN: " + lat, lon);
        h3.innerText = `The current temperature there is ${temperatures.main.temp} degrees Celsius`;
        h2.innerText = `You have input coordinates for ${temperatures.name.toUpperCase()}`;
        document.body.appendChild(h2);
        document.body.appendChild(h3);
      })
      .catch((error) => console.log(`Error: ${error}`))) ||
    alert("Invalid inputs!");
});

/*** FORM VALIDATION***/

// const validateForm = (lat, lon) => {
//   console.log("VALIDATION INPUTS lat " + lat, " lon " + lon);

//   if (lat == "" || lon == "") {
//     alert("One or more of your inputs are empty!");
//   }

// };

const isValid = (lat, lon) => {
  console.log("VALIDATION INPUTS lat " + lat, " lon " + lon);

  return parseFloat(lat) && parseFloat(lon);
};
