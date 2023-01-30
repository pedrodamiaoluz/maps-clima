
//interação
const citySearchInput = document.getElementById("city-search-input");
const citySearchButton = document.getElementById("city-search-button");

// Exibição
const correntDate = document.getElementById("corrent-date");
const cityName = document.getElementById("city-name");
const weatherIcon = document.getElementById("weather-icon");
const weatherDescription = document.getElementById("weather-description");
const correntTemperutera = document.getElementById("corrent-temperutera");
const windSpeed = document.getElementById("wind-speed");
const feelsLikeTemperature = document.getElementById("feels-like-temperature");
const correntHumidity = document.getElementById("corrent-humidity");
const sunriseTime = document.getElementById("sunrise-time");
const sunsetTime = document.getElementById("sunset-time");

const api_key = "06f77c41a37bbd75fecda08bb37bead5";

citySearchButton.addEventListener( "click", () => {
    
    let cityName = citySearchInput.value
    getCityWeather(cityName)
})

//06f77c41a37bbd75fecda08bb37bead5

//https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&lang=pt_br&appid=${api_key}

navigator.geolocation.getCurrentPosition(
    (position) => {
        let lat = position.coords.latitude
        let lon = position.coords.longitude
        getCurrentLocationWeather(lat, lon)
    },
    (err) => {
        if (err.code === 1) {
            alert("Geolocalização negada pelo usuario, busque manualmente por uma cidade através da barra de pesquisa ")
        } else {
            console.log(err)
        }
        
    }
)

// responsavel para busca a temperatura no momento que o usuario carregue
function getCurrentLocationWeather(lat, lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=pt_br&appid=${api_key}`)
      .then((response) => response.json())
      .then((data) => displayWeather(data))   

}

// Busca uma temperatura atravez de uma pesquisa
function getCityWeather(cityName) {

    weatherIcon.src = `./assets/loading-icon.svg`

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&lang=pt_br&appid=${api_key}`)
        .then((response) => response.json())
        .then((data) => displayWeather(data))
}

function displayWeather(data) {
    let {
        dt,
        name,
        weather: [{ icon, description}],
        main: { temp, feels_like, humidity },
        wind: { speed },
        sys: { sunrise, sunset},
    } = data

    correntDate.textContent = formatDate(dt);
    cityName.textContent = name;
    weatherIcon.src = `./assets/${icon}.svg`
    weatherDescription.textContent = description;
    correntTemperutera.textContent = `${Math.round(temp)}°C`;
    windSpeed.textContent = `${Math.round(speed * 3.6)}Km/h`;
    feelsLikeTemperature.textContent = `${Math.round(feels_like)}°C`;
    correntHumidity.textContent = `${humidity}%`;
    sunriseTime.textContent = formatTime(sunrise);
    sunsetTime.textContent = formatTime(sunset);

}

function formatDate(epochTime) {
    let date = new Date(epochTime * 1000)
    let formattedDate = date.toLocaleDateString('pt-BR', {month: "long", day: 'numeric'})
    return `Hoje, ${formattedDate}`
}

function formatTime(epochTime) {
    let date = new Date(epochTime * 1000)
    let hours = date.getHours();
    let minutes = date.getMinutes();
    return `${hours}:${minutes}`
}




