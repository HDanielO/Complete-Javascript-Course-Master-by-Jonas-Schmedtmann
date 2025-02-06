// Remember, we're gonna use strict mode in all scripts now!
"use strict";

function printForecast(arr) {
  let forecastString = "";
  for (let i = 0; i < arr.length; i++) {
    forecastString += `... ${arr[i]}ºC in ${i + 1} days `;
  }
  console.log(forecastString);
}

printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);
