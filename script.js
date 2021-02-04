document.getElementById("city-btn").addEventListener("click", function () {
    const cityName = document.getElementById('user-input').value;

    let api = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=b0044137edcf677dcfc3a7248e7e6f31`
    fetch(api)
    .then(res => res.json())
    .then(data => {
        document.getElementById("city-name").innerText = data.name;
        document.getElementById("temperature").innerText = ((data.main.temp)-273).toFixed(0);
        document.getElementById("weather-state").innerText = data.weather[0].main;
        let iconLink = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

        document.getElementById("icon").attributes[1].value = iconLink;

    })
})