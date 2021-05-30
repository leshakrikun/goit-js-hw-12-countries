import '@pnotify/core/dist/BrightTheme.css';
import countryCardTemplate from './templates/country.hbs'
import countryCardTemplates from './templates/arrCountry.hbs'
var debounce = require('lodash.debounce');
export default query

const { alert, notice, info, success, error } = require('@pnotify/core');
const refs = {
    cardContainer: document.querySelector('.card-container')
}
let markup = '';
function query(countryName) {fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
.then(response => {  
    return response.json()
})
.then(country  => {
    if (country.length===1){
        markup = countryCardTemplate(country)
        refs.cardContainer.innerHTML = markup; 
    } else if(country.length<11) {
        
        markup = countryCardTemplates(country)
        refs.cardContainer.innerHTML = markup; 
    }
    else {
        refs.cardContainer.innerHTML = '';
        debounce_fun();
        document.querySelector('input').setAttribute("disabled", true);
        alert({
            text: "Сделайте более специфичный запрос",
            type: 'info'
        });
    }
})
}
const debounce_fun = debounce(function () {
    document.querySelector('input').removeAttribute("disabled");
}, 2000);