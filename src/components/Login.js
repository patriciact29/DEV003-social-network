import { onNavigate } from '../main.js';

export const Login = () => {
  const form = document.createElement('form');
  const button = document.createElement('button');
  const buttonBack = document.createElement('button');
  const inputEmail = document.createElement('input');
  const inputpass = document.createElement('input');

  form.setAttribute('class', 'container secondView');
  inputEmail.setAttribute('placeholder', 'E-mail');
  inputpass.setAttribute('placeholder', 'Contraseña');
  button.textContent = 'Iniciar sesión';
  buttonBack.textContent = 'Retroceder';
  buttonBack.addEventListener('click', () => {
    onNavigate('/');
  });

  form.append(inputEmail, inputpass, button, buttonBack);

  return form;
};
