async function getInfo(city, type) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=341fe8633e701e35777d460e90f2e203&units=${type}`);
  const json = response.json();

  return json;
}

export default async function getData(city, type) {
  const data = await getInfo(city, type);

  const obj = {
    name: data.name,
    weather: data.weather[0].main,
    icon: data.weather[0].icon,
    temp: data.main.temp,
    feels: data.main.feels_like,
    wind: data.wind.speed,
    humidity: data.main.humidity,
  };

  return obj;
}
