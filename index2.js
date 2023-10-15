document.addEventListener('DOMContentLoaded', () => {
   const countryname = new URLSearchParams(window.location.search).get('name');
   const flagimage = document.querySelector('.country_details img');
   const countrytitle = document.querySelector(".country_title");
   const population = document.querySelector(".Population");
   const continent = document.querySelector(".Continent");
   const capital = document.querySelector(".Capital");
   const region = document.querySelector(".Region");
   const native = document.querySelector(".Native");
   const languages = document.querySelector(".Languages");
   const currency = document.querySelector(".Currency");
   const toplevel = document.querySelector(".Toplevel");
   const neighbouring = document.querySelector(".Neighbouring");
   const time = document.querySelector(".Time");

   fetch(`https://restcountries.com/v3.1/name/${countryname}?fullText=true`)
   .then((res)=>res.json())
   .then(([country])=>{
      flagimage.src=country.flags.svg
      countrytitle.innerHTML=country.name.common
      population.innerHTML="<b>Population : </b>" + country.population
      continent.innerHTML="<b>Continent : </b>" + country.continents[0]
      capital.innerHTML="<b>Capital : </b>" + country.capital[0]
      region.innerHTML="<b>Region : </b>" + country.subregion
      native.innerHTML="<b>Official Name : </b>" + country.name.official
      languages.innerHTML="<b>Languages : </b>" + Object.values(country.languages)[0]
      currency.innerHTML="<b>Currency : </b>" + Object.values(country.currencies)[0].name
      toplevel.innerHTML="<b>Toplevel Domain : </b>" + country.tld[0]
      // neighbouring.innerHTML="<b>Neighbouring Countries : </b>" + country.borders[0]
      // time.innerHTML="<b>Time Zones : </b>" + country.timezones[0]
   })
});
