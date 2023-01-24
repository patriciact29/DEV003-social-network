import { onNavigate } from '../main.js';

export const Welcome = () => {
  const div = document.createElement('div');
  const buttonLogin = document.createElement('button');
  const buttonRegister = document.createElement('button');
  const buttonGoogle = document.createElement('button');

  //div.setAttribute('class', 'container');
  buttonLogin.textContent = 'Iniciar sesión';
  buttonRegister.textContent = 'Crear cuenta';
  buttonGoogle.textContent = 'Continuar con Google';

  buttonLogin.addEventListener('click', () => {
    onNavigate('/login');
  });
  buttonRegister.addEventListener('click', () => {
    onNavigate('/signup');
  });
  div.append(buttonLogin, buttonRegister, buttonGoogle);

  return div;
};
