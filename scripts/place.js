const yearSpan = document.getElementById("currentyear");
const currentYear= new Date().getFullYear();
yearSpan.textContent = currentYear;

const lastMod = document.getElementById("lastModified");
lastMod.textContent = document.lastModified;


const temperatureF = 30;
const windSpeedMph = 10;

function calculateWindChill(tempF, speedMph){
    return 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speedMph, 0.16) + 0.4275 * tempF * Math.pow(speedMph, 0.16);

}

let windChillDisplay = "n/a"

if (temperatureF<= 50 && windSpeedMph > 3) {
    windChillDisplay = calculateWindChill(temperatureF, windSpeedMph).toFixed(1) + "°F";
}

document.getElementById("windChill").textContent = windChillDisplay