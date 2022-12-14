
// api key : 82005d27a116c2880c8f0fcb866998a0

// SELECT ELEMENTS
const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");


// App data
const weather = {
    temperature:{
        value:20,
        unit : "celsius"
    },
    description: "few cloud",
    iconId: 00,
    city: "delhi",
    country: "India"

};



// APP CONSTS AND VARS
const KELVIN = 273;
// API KEY
const key = "0c1d39799b301cf9530211799eb4a281";

// CHECK IF BROWSER SUPPORTS GEOLOCATION
/*if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError);
}else{
    notificationElement.style.display = "block";
    notificationElement.innerHTML = "<p>Browser doesn't Support Geolocation</p>";
}

// SET USER'S POSITION
function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    
    getWeather(latitude, longitude);
}

// SHOW ERROR WHEN THERE IS AN ISSUE WITH GEOLOCATION SERVICE
function showError(error){
    notificationElement.style.display = "block";
    notificationElement.innerHTML = `<p> ${error.message} </p>`;
}
*/ 
    function refresh(){
       const cityval= document.getElementById("city_name").value;
        console.log(cityval);
        getWeather(cityval);
   }
     
// GET WEATHER FROM API PROVIDER
        
  function  getWeather(cityval){
    var url = new URL('https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=0c1d39799b301cf9530211799eb4a281');
    var search_params = url.searchParams;

// new value of "id" is set to "101"
    search_params.set('q', cityval);

// change the search property of the main url
    url.search = search_params.toString();

    fetch(url)
        .then(function(response){
            let data = response.json();
            return data;
        })
        .then(function(data){
            console.log(data);
            weather.temperature.value = Math.floor(data.main.temp - KELVIN);
            weather.description = data.weather[0].description;
            weather.iconId = data.weather[0].icon;
            weather.city = data.name;
            weather.country = data.sys.country;
        })
        .then(function(){
            displayWeather();
        });
    }

// DISPLAY WEATHER TO UI
function displayWeather(){
    iconElement.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
    tempElement.innerHTML = `${weather.temperature.value}??<span>C</span>`;
    descElement.innerHTML = weather.description;
    locationElement.innerHTML = `${weather.city}, ${weather.country}`;
}

// C to F conversion
/*
function celsiusToFahrenheit(temperature){
    return (temperature * 9/5) + 32;
}

// WHEN THE USER CLICKS ON THE TEMPERATURE ELEMENET
tempElement.addEventListener("click", function(){
    if(weather.temperature.value === undefined) return;
    
    if(weather.temperature.unit == "celsius"){
        let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
        fahrenheit = Math.floor(fahrenheit);
        
        tempElement.innerHTML = `${fahrenheit}??<span>F</span>`;
        weather.temperature.unit = "fahrenheit";
    }else{
        tempElement.innerHTML = `${weather.temperature.value}??<span>C</span>`;
        weather.temperature.unit = "celsius"
    }
});
*/

