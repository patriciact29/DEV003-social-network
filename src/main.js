import { login } from './auth.js';

const loginBtn = document.querySelector('#google-login');

loginBtn.addEventListener('click', login);