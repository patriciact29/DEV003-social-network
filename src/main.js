// import { login } from './auth.js';
import { Welcome } from './components/Welcome.js';
import { Login } from './components/Login.js';
import { Signup } from './components/Signup.js';

/* const loginBtn = document.querySelector('#google-login');
loginBtn.addEventListener('click', login); */
// ruteado
const root = document.getElementById('root');
const routes = {
  '/': Welcome,
  '/login': Login,
  '/signup': Signup,
};
export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  root.removeChild(root.firstChild);
  root.appendChild(routes[pathname]());
};
const component = routes[window.location.pathname];

root.appendChild(component());
