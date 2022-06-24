async function getInfo(city) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=341fe8633e701e35777d460e90f2e203`);
  const json = response.json();

  return json;
}

export default async function getData(city) {
  const data = await getInfo(city);

  const obj = {
    name: data.name,
    weather: data.weather[0].main,
    temp: data.main.temp,
    feels: data.main.feels_like,
    humidity: data.main.humidity,
  };

  return obj;
}
