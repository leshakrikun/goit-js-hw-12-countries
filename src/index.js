import './sass/main.scss';
import '@pnotify/core/dist/BrightTheme.css';
var debounce = require('lodash.debounce');
import query from './fetchCountries.js';


const refs = {
    cardContainer: document.querySelector('.card-container')
}

const searchName = document.querySelector('input')

searchName.addEventListener('input', debounce (onInput, 500));

function onInput (event) {
   event.preventDefault();
  let countryName = event.target.value;
  countryName = countryName.trim();
consol.log(countryName);
  query(countryName);
  
}



