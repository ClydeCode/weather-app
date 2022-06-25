import './styles.css';
import './assets/icons/sunny.png';
import getData from './weather';
import { setCity, setSubDetails, setTemp } from './DOM';

const searchField = document.querySelector('#search_field');

async function setDetails(city) {
  const obj = await getData(city);

  setCity(obj.name);
  setTemp(obj.temp);
  setSubDetails(obj.feels, obj.wind, obj.humidity);
}

searchField.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    setDetails(e.target.value);
  }
});
