// promise lifecycle - pending, settled (fulfilled, rejected)
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const getCountryData = function (country) {
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(response => {

      if (!response.ok) throw new Error(`Country ${country} not found!`);

      return response.json()
    })
    .then(data => {
      renderCountry(data[0]);
      
      const neighbour = data[0].borders[0];

      if (!neighbour) throw new Error('No neighbour found');

      return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(neighbourData => renderCountry(neighbourData, 'neighbour'))
    .catch(err => renderError(`Something went wrong! ${err}`))
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentHTML('beforeend', msg);
}

const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${data.population}</p> 
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
}

btn.addEventListener('click', () => {
  getCountryData('portugalx');
});