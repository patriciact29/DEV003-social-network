import { logout } from '../auth.js';

export const Home = (onNavigate) => {
  const div = document.createElement('div');
  const title = document.createElement('h2');
  const buttonLogout = document.createElement('button');

  div.setAttribute('class', 'container');

  title.textContent = 'Página de Inicio';
  buttonLogout.textContent = 'Cerrar sesión';
  buttonLogout.addEventListener('click', logout);
  buttonLogout.addEventListener('click', () => {
    onNavigate('/');
  });

  div.append(title, buttonLogout);
  return div;
};
