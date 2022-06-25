const city = document.querySelector('.city');
const temperature = document.querySelector('.temperature');
const subDetails = document.querySelector('.sub-details');

function setCity(name) {
  city.innerHTML = name;
}

function setTemp(value) {
  temperature.innerHTML = `${Math.round(value)}°C`;
}

function setSubDetails(feels, wind, humidity) {
  subDetails.innerHTML = `feels: ${Math.round(feels)}°C, wind: ${Math.round(wind)} km/h, humidity: ${humidity}%`;
}

export { setCity, setTemp, setSubDetails };
