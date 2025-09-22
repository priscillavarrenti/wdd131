function calculateWindChill(temp, windspeed) {
    if (temp <= 50 && windspeed >3)
        return Math.round(35.74 + 0.6215 * temp - 35.75 * Math.pow(windspeed, 0.16) + 0.4275 * temp * math-pow (windspeed, 0.16));
    else { 
        return 'n/a';
    }
}

document.addEventListener('DOMContentLoaded', function(){
    const temperature= 50;
    const windspeed= 10;

    const windChill= calculateWindChill (temperature, windspeed);

    const windchillElement= document.getElementById('windchill')
    windchillElement.textContent= windChill;

});

const yearSpan = document.getElementById("currentyear");
const currentYear= new Date().getFullYear();
yearSpan.textContent = currentYear;

const lastMod = document.getElementById("lastModified");
lastMod.textContent = document.lastModified;