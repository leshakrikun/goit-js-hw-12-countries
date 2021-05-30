export default qq
function qq (countryName) {
fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
.then(response => {
    return response.json();
})
.then(country  => {
    const markup = countryCardTemplate(country)
    console.log(markup);
    refs.cardContainer.innerHTML = markup; 
})
.catch(error => {
    console.log('error');   
})  
}






import { onError } from './main';

function fetchCountries (countryName) {
   return fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
.then(response =>  {
    return response.json()
})
.catch(onError);
}

export default { fetchCountries }