import '@pnotify/core/dist/BrightTheme.css';
import countryCardTemplate from './templates/country.hbs'
import countryCardTemplates from './templates/arrCountry.hbs'
export default query

const { alert, notice, info, success, error } = require('@pnotify/core');
const refs = {
    cardContainer: document.querySelector('.card-container')
}

function query(countryName) {fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
.then(response => {  
    return response.json()
})
.then(country  => {
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
                        text: "Сделайте более специфичный запрос",
            type: 'info'
            
          });
    }
})
}  