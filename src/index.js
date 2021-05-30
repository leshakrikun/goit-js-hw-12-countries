import './sass/main.scss';
import '@pnotify/core/dist/BrightTheme.css';
var debounce = require('lodash.debounce');
/* import qq from './fetchCountries.js'; */

import countryCardTemplate from './templates/country.hbs'
import countryCardTemplates from './templates/arrCountry.hbs'

const { alert, notice, info, success, error } = require('@pnotify/core');



const refs = {
    cardContainer: document.querySelector('.card-container')
}

const searchName = document.querySelector('input')

searchName.addEventListener('input', debounce (onInput, 500));

function onInput (event) {
   event.preventDefault();
   const countryName = event.target.value;
   query(countryName);
   event.target.value = '';
}

function query(countryName) {fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
.then(response => {  
    return response.json();
})
.then(country  => {
    console.log(country.length);
    if (country.length===1){
    const markup = countryCardTemplate(country)
    refs.cardContainer.innerHTML = markup; 
    } else if(country.length<11) {
        const markup = countryCardTemplates(country)
        refs.cardContainer.innerHTML = markup; 
    }
    else {
        refs.cardContainer.innerHTML = '';
        const myAlert = alert({
                        text: "Сделайте более специфический запрос",
            type: 'info'
            
          });
    }
})
.catch(error => {
    console.log(myAlert);   
})}  

