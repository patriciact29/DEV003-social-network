import { loginWithGoogle } from '../auth.js';

export const Welcome = (onNavigate) => {
  const div = document.createElement('div');
  const logo = document.createElement('div');
  const buttonLogin = document.createElement('button');
  const buttonRegister = document.createElement('button');
  const buttonGoogle = document.createElement('button');

  div.setAttribute('class', 'container');
  logo.setAttribute('class', 'logo');
  buttonLogin.textContent = 'Iniciar sesión';
  buttonRegister.textContent = 'Crear cuenta';
  buttonGoogle.textContent = 'Continuar con Google';
  buttonGoogle.addEventListener('click', loginWithGoogle);

  buttonLogin.addEventListener('click', () => {
    onNavigate('/login');
  });

  buttonRegister.addEventListener('click', () => {
    onNavigate('/signup');
  });

  div.append(logo, buttonLogin, buttonRegister, buttonGoogle);

  return div;
};
