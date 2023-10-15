document.addEventListener('DOMContentLoaded', () => {
  const countriescontainer = document.querySelector('.countries_container');
  const searchinpt = document.getElementById('search');
  let countries = []; 

  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => {
      countries = data.map((country) => { 
        const countrycard = document.createElement('a');
        countrycard.classList.add('country_card');
        countrycard.href = `indicountry.html?name=${encodeURIComponent(country.name.common)}`;
        const cardhtml = `
          <img src=${country.flags.svg} alt="flag"/>
          <h3 class="country_name">${country.name.common}</h3>
        `;

        countrycard.innerHTML = cardhtml;
        countriescontainer.append(countrycard);
        return {name: country.name.common.toLowerCase(), element: countrycard} 
      });

      searchinpt.addEventListener("input",(e)=>{
        const value = e.target.value.toLowerCase();
        countries.forEach(country=>{
          const visible = country.name.includes(value)
          country.element.classList.toggle("hide", !visible)
        })
      })
    })
    .catch(error => console.error('Error fetching data:', error));
});
