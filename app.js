
//interação
const citySearchInput = document.getElementById("city-search-input")
const citySearchButton = document.getElementById("city-search-button")

// Exibição
const correntDate = document.getElementById("corrent-date")
const cityName = document.getElementById("city-name")
const weatherIcon = document.getElementById("weather-icon")
const weatherDescription = document.getElementById("weather-description")
const correntTemperutera = document.getElementById("corrent-temperutera")
const windSpeed = document.getElementById("wind-speed")
const feelsLikeTemperature = document.getElementById("feels-like-temperature")
const correntHumidity = document.getElementById("corrent-humidity")
const sunriseTime = document.getElementById("sunrise-time")
const sunsetTime = document.getElementById("sunset-time")

const api_key = "06f77c41a37bbd75fecda08bb37bead5"
//01061493be940f2efaba9a9f040b88a7

citySearchButton.addEventListener( "click", () => {
    
    let cityName = citySearchInput.value
    getCityWeather(cityName)
})

//06f77c41a37bbd75fecda08bb37bead5

//https://openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=pt-br&appid=${api_key}
//https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&lang=pt_br&appid=${api_key}
function getCityWeather(cityName) {

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&lang=pt_br&appid=${api_key}`)
        .then((responsa) => {responsa.json()})
        .then((data) => displayWeather(data))
}

function displayWeather(data) {
    console.log(data)
}






