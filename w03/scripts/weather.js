const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75008&lon=6.63799&units=imperial&appid=918a9b08387f62f77d54e582cc9ef367";

async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();

            displayWeather(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error)
    }
};

function displayWeather(data) {
    //0 decimal places temperature
    const temp = data.main.temp;
    const fixedTemp = temp.toFixed(0);
    currentTemp.textContent = `${fixedTemp}°F`;

    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", "weather icon");

    //I couldn't capitalize the description
    captionDesc.textContent = `${data.weather[0].description}`;
};

apiFetch(url);