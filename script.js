//default calling
getWeather("Chittagong");

//event handler user calling
document.getElementById("city-btn").addEventListener("click", function () {
    const cityName = document.getElementById('user-input').value;
    getWeather(cityName)
})

//call api and setting value
function getWeather(cityName) {
    let api = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=b0044137edcf677dcfc3a7248e7e6f31`
    fetch(api)
        .then(res => res.json())
        .then(data => {
            document.getElementById("city-name").innerText = data.name;
            document.getElementById("temperature").innerText = ((data.main.temp) - 273).toFixed(0);
            document.getElementById("weather-state").innerText = data.weather[0].main;
            document.getElementById("icon").attributes[1].value = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        })
}
