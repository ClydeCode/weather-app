const city = document.querySelector('.city');
const temperature = document.querySelector('.temperature');
const subDetails = document.querySelector('.sub-details');
const icon = document.querySelector('img');
const optionalTemp = document.querySelector('.optional');

let tempMeasurement = '°C';
let windMeasurement = 'km/h';

const icons = {
  '01d': './icons/5c6aa2edc37bc31f0168.png',
  '01n': './icons/8b8fa17863da201aa9e7.png',
  '02d': './icons/6d3e5a881c16fd843dae.png',
  '02n': './icons/e83e444a5dec03b1c425.png',
  '03d': './icons/a3d2efa325e8a9abd41b.png',
  '03n': './icons/a3d2efa325e8a9abd41b.png',
  '04d': './icons/8f978ee3cd11fb109c5f.png',
  '04n': './icons/8f978ee3cd11fb109c5f.png',
  '09d': './icons/cf55321a1c93e0248def.png',
  '09n': './icons/cf55321a1c93e0248def.png',
  '10d': './icons/d0c78077e8142ec3d7f9.png',
  '10n': './icons/0d5f576ea2f89d0e6026.png',
  '11d': './icons/493f0bb3e92426d033fa.png',
  '11n': './icons/493f0bb3e92426d033fa.png',
  '13d': './icons/755849b002a0236f5c97.png',
  '13n': './icons/755849b002a0236f5c97.png',
  '50d': './icons/0040120074f76d1c3eec.png',
  '50n': './icons/0040120074f76d1c3eec.png',
};

function setCity(name) {
  city.innerHTML = name;
}

function setTemp(value) {
  temperature.innerHTML = `${Math.round(value)}${tempMeasurement}`;
}

function setSubDetails(feels, wind, humidity) {
  subDetails.innerHTML = `feels: ${Math.round(feels)}${tempMeasurement} wind: ${Math.round(wind)} ${windMeasurement} humidity: ${humidity}%`;
}

function changeIcon(type) {
  icon.src = icons[type];
}

function setMeasurement(value) {
  optionalTemp.innerHTML = value;

  if (value === '°C') {
    tempMeasurement = '°F';
    windMeasurement = 'mp/h';
  } else {
    tempMeasurement = '°C';
    windMeasurement = 'km/h';
  }
}

export {
  setCity, setTemp, setSubDetails, changeIcon, setMeasurement,
};
