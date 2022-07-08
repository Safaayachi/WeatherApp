const locationElement = document.getElementById("location");
const mainSectionIconElement = document.getElementById("main-section-icon");
const temperatureElement = document.getElementById("temperature");
const zoneElement = document.getElementById("zone");
const descriptionElement = document.getElementById("description");
const windElement = document.getElementById("wind");
const sunriseTimeElement = document.getElementById("sunrise-time");
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
const API_KEY = "e03a3b2997250f7da20541262be728ad";

  function getWeatherData() {
    navigator.geolocation.getCurrentPosition((success) => {
    let { latitude, longitude } = success.coords;
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res => res.json()).then(data =>{
    console.log(data)
    showWeatherData(data);
    })
  })
}


function showWeatherData(data){
  let { sunrise, sunset, wind_speed, temp } = data.current;
  let weatherDesc = data.current.weather[0].description;
  let timezone = data.timezone;
  temperatureElement.innerText=`${temp}°C`;
  zoneElement.innerText=timezone;
  descriptionElement.innerText=weatherDesc;
  windElement.innerText=`${wind_speed} km/h`;
  sunriseTimeElement.innerText=convertTime(sunrise);
  console.log(typeof sunrise);
  sunsetTimeElement.innerText=convertTime(sunset);
  console.log(typeof sunrise);
  firstDayWeatherElement.innerText=data.daily[1].weather[0].main;
  firstDayMaxTempElement.innerText=`${data.daily[1].temp.max}°`;
  firstDayMinTempElement.innerText=`${data.daily[1].temp.min}°`;
  secondDayWeatherElement.innerText=data.daily[2].weather[0].main;
  secondDayMaxTempElement.innerText=`${data.daily[2].temp.max}°`;
  secondDayMinTempElement.innerText=`${data.daily[2].temp.min}°`;
  thirdDayWeatherElement.innerText=data.daily[3].weather[0].main;
  thirdDayMaxTempElement.innerText=`${data.daily[3].temp.max}°`;
  thirdDayMinTempElement.innerText=`${data.daily[3].temp.min}°`;
  forthDayWeatherElement.innerText=data.daily[4].weather[0].main;
  forthDayMaxTempElement.innerText=`${data.daily[4].temp.max}°`;
  forthDayMinTempElement.innerText=`${data.daily[4].temp.min}°`;
  fifthDayWeatherElement.innerText=data.daily[5].weather[0].main;
  fifthDayMaxTempElement.innerText=`${data.daily[5].temp.max}°`;
  fifthDayMinTempElement.innerText=`${data.daily[5].temp.min}°`;
  var currentWeatherIcon=data.current.weather[0].icon;
  var firstDayIcon=data.daily[1].weather[0].icon;
  var secondDayIcon=data.daily[2].weather[0].icon;
  var thirdDayIcon=data.daily[3].weather[0].icon;
  var forthDayIcon=data.daily[4].weather[0].icon;
  var fifthDayIcon=data.daily[5].weather[0].icon;
  var iconurl = "http://openweathermap.org/img/w/" + currentWeatherIcon + ".png";
  console.log(iconurl);
  mainSectionIconElement.src=iconurl;
  firstDayIconElement.src="http://openweathermap.org/img/w/" + firstDayIcon + ".png";
  secondDayIconElement.src="http://openweathermap.org/img/w/" + secondDayIcon + ".png";
  thirdDayIconElement.src="http://openweathermap.org/img/w/" + thirdDayIcon + ".png";
  forthDayIconElement.src="http://openweathermap.org/img/w/" + forthDayIcon + ".png";
  fifthDayIconElement.src="http://openweathermap.org/img/w/" + fifthDayIcon + ".png";
  function convertTime(x){
    var hours =new Date(x*1000).getHours();
    if (hours>12)
    {
      hours=hours-12;
    }
    var minutes =new Date(x*1000).getMinutes();
    var convertedTime=`${hours}:${minutes}`;
    return convertedTime;
  }


}


