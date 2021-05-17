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
let h3 = document.createElement("h3");
let h2 = document.createElement("h2");
h2.innerText = "Input coordinates to locate a city";
h3.innerText = "The city temperature will be shown here";
document.body.appendChild(h2);
document.body.appendChild(h3);

/*** VARIABLES ***/
let lat = "";
let lon = "";
console.log("lat" + lat, "lon" + lon);
/*** INPUT FETCH ***/
document.querySelector("form").addEventListener("submit", (getTemperature) => {
  getTemperature.preventDefault();
  lat = document.getElementById("lat").value;
  lon = document.getElementById("lon").value;
  console.log("lat" + lat, "lon" + lon);

  if (lat == "" || lon == "") {
    alert("Enter valid coordinates!");
  }
  fetch(`https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${lon}`)
    .then((response) => response.json())
    .then((temperatures) => {
      console.log("Coordinates: " + lat, lon);
      h3.innerText = `The current temperature there is ${temperatures.main.temp} degrees Celsius`;
      h2.innerText = `You have input coordinates for ${temperatures.name.toUpperCase()}`;
      document.body.appendChild(h2);
      document.body.appendChild(h3);
    })
    .catch((error) => console.log(`Error: ${error}`));
});

/*** FORM VALIDATION***/

// const validateForm = (lat, lon) => {
// };
// document.getElementById("getBtn").addEventListener("click", validateForm);
