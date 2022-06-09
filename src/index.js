import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import Notiflix from 'notiflix';
var debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;
const searchBox = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.ciuntry-info');

searchBox.addEventListener('input', () => {
  fetchUsers()
    .then(users => renderUserList(users))
    .catch(error => console.log(error));
});

/*function fetchUsers() {
  return fetch('https://jsonplaceholder.typicode.com/users').then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
});
}*/

function renderUserList(users) {
  const markup = users
    .map(user => {
      return `<li>
          <p><b>Name</b>: ${user.name}</p>
          <p><b>Email</b>: ${user.email}</p>
          <p><b>Company</b>: ${user.company.name}</p>
        </li>`;
    })
    .join('');
  userList.innerHTML = markup;
}