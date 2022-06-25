import './styles.css';
import './assets/icons/01d.png';
import './assets/icons/01n.png';
import './assets/icons/02d.png';
import './assets/icons/02n.png';
import './assets/icons/03d.png';
import './assets/icons/04d.png';
import './assets/icons/09d.png';
import './assets/icons/10d.png';
import './assets/icons/10n.png';
import './assets/icons/11d.png';
import './assets/icons/13d.png';
import './assets/icons/50d.png';
import getData from './weather';
import {
  changeIcon, setCity, setSubDetails, setTemp,
} from './DOM';

const searchField = document.querySelector('#search_field');

async function setDetails(city) {
  const obj = await getData(city);

  setCity(obj.name);
  setTemp(obj.temp);
  changeIcon(obj.icon);
  setSubDetails(obj.feels, obj.wind, obj.humidity);
}

setDetails('Vilnius');

searchField.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    setDetails(e.target.value);
  }
});
