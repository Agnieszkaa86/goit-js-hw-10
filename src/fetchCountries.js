export function fetchCountries(name) {
    fetch('https://restcountries.com/v2/name/${name}?fields=name,capital,population,flags,languages',)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            console.log(response);
            return response.json();
        })
  
        .catch(error => console.log(err))
}
