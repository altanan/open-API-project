const apiKey = "ee4a5b05be34c53f5e05502708aee5ce";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  
  if(response.status == 404){
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }else{
    //variable data contains all weather information from apiUrl
    var data = await response.json(); //object that contains method for parsing values and convert values to JSON

    //queryselector returns first element within document that matches specified selector, if no matches are found null is returned
    //innerHTML = gets/sets HTML markup contained within the element
    //in this case it will search for the class city, select the h2 element and replace the city name
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
  
    if(data.weather[0].main == "Clouds")
    {
      weatherIcon.src = src = "images/clouds.jpeg";
    }
    else if(data.weather[0].main == "Clear"){
      weatherIcon.src = src = "images/clear.jpeg";
    }
    else if(data.weather[0].main == "Rain"){
      weatherIcon.src = src = "images/rain.jpeg";
    }
    else if(data.weather[0].main == "Drizzle"){
      weatherIcon.src = src = "images/drizzle.jpeg";
    }
    else if(data.weather[0].main == "Mist"){
      weatherIcon.src = src = "images/mist.jpeg";
    }
    else{
      weatherIcon.src = src = "images/wind.jpeg";
    }

    document.querySelector(".weather").style.display = "block"; // block the display element -> display weather
    document.querySelector(".error").style.display = "none"; 
  }
}

searchBtn.addEventListener("click", ()=>{
  checkWeather(searchBox.value);
})