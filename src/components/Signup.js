import { onNavigate } from '../main.js';

export const Signup = () => {
  const div = document.createElement('div');
  const button = document.createElement('button');
  const title = document.createElement('h2');
  const inputUser = document.createElement('input');
  const inputName = document.createElement('input');
  const selectCountry = document.createElement('select');
  const inputEmail = document.createElement('input');
  const inputpass = document.createElement('input');

  inputpass.setAttribute('type', 'password');

  button.textContent = 'Crear';
  title.textContent = 'Registrate';

  div.append(title, inputUser, inputName, selectCountry, inputEmail, inputpass, button);

  return div;
};
