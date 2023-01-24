import { onNavigate } from '../main.js';

export const Login = () => {
  const div = document.createElement('div');
  const button = document.createElement('button');
  const buttonBack = document.createElement('button');
  const title = document.createElement('h2');
  const inputEmail = document.createElement('input');
  const inputpass = document.createElement('input');

  button.textContent = 'Iniciar sesión';
  buttonBack.textContent = 'Retroceder';
  title.textContent = 'Login';
  buttonBack.addEventListener('click', () => {
    onNavigate('/');
  });

  div.append(title, inputEmail, inputpass, button, buttonBack);

  return div;
};
