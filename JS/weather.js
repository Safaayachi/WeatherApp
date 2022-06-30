const locationElement = document.getElementById("location");
const mainSectionIconElement = document.getElementById("main-section-icon");
const temperatureElement = document.getElementById("temperature");
const zoneElement = document.getElementById("zone");
const descriptionElement = document.getElementById("description");
const windIconElement = document.getElementById("wind-icon");
const windElement = document.getElementById("wind");
const sunriseIconElement = document.getElementById("sunrise-icon");
const sunriseTimeElement = document.getElementById("sunrise-time");
const sunsetIconElement = document.getElementById("sunset-icon");
const sunsetTimeElement = document.getElementById("sunset-time");
const firstDayIconElement = document.getElementById("firstDay-icon");
const firstDayWeatherElement = document.getElementById("firstDay-weather");
const firstDayMaxTempElement = document.getElementById("firstDayMax-temperature");
const firstDayMinTempElement = document.getElementById("firstDayMin-temperature");
const secondDayIconElement = document.getElementById("secondDay-icon");
const secondDayWeatherElement = document.getElementById("secondDay-weather");
const secondDayMaxTempElement = document.getElementById("secondDayMax-temperature");
const secondDayMinTempElement = document.getElementById("secondDayMin-temperature");
const thirdDayIconElement = document.getElementById("thirdDay-icon");
const thirdDayWeatherElement = document.getElementById("thirdDay-weather");
const thirdDayMaxTempElement = document.getElementById("thirdDayMax-temperature");
const thirdDayMinTempElement = document.getElementById("thirdDayMin-temperature");
const forthDayIconElement = document.getElementById("forthDay-icon");
const forthDayWeatherElement = document.getElementById("forthDay-weather");
const forthDayMaxTempElement = document.getElementById("forthDayMax-temperature");
const forthDayMinTempElement = document.getElementById("forthDayMin-temperature");
const fifthDayIconElement = document.getElementById("fifthDay-icon");
const fifthDayWeatherElement = document.getElementById("fifthDay-weather");
const fifthDayMaxTempElement = document.getElementById("fifthDayMax-temperature");
const fifthDayMinTempElement = document.getElementById("fifthDayMin-temperature");
const API_KEY = "3a61d03d191e00e1fa908edb1ff5d13c";

 async function getWeatherData() {
    navigator.geolocation.getCurrentPosition((success) => {
    console.log(success);
    let { latitude, longitude } = success.coords;
    const res=  fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`);
    return await  res.json();
      
        
        
      });
    };

locationElement.addEventListener("click", async() => {
    const data = await getWeatherData();
    descriptionElement.innerText= data.current.weather[0].description;
});




