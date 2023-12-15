const apiKey = 'd0dabadf28ac3836afa23382fde53b3b'; //your API key

function getWeather() {
    const locationInput = document.getElementById('location');
    const location = locationInput.value;

    if (location.trim() === '') {
        alert('Please enter a location.');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again.');
        });
}

function displayWeather(data) {
    const weatherInfoContainer = document.getElementById('weather-info');
    weatherInfoContainer.innerHTML = '';

    const cityName = data.name;
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const humidity = data.main.humidity;

    const weatherInfoHTML = `
        <h2>${cityName}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Description: ${description}</p>
        <p>Humidity: ${humidity}%</p>
    `;

    weatherInfoContainer.innerHTML = weatherInfoHTML;
}
