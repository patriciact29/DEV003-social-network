import { Welcome } from './components/Welcome.js';
import { Login } from './components/Login.js';
import { Signup } from './components/Signup.js';
import { Home } from './components/Home.js';

// ruteado
const root = document.getElementById('root');
const routes = {
  '/': Welcome,
  '/login': Login,
  '/signup': Signup,
  '/home': Home,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  root.removeChild(root.firstChild);
  root.appendChild(routes[pathname](onNavigate));
};

const component = routes[window.location.pathname];

window.onpopstate = () => {
  root.removeChild(root.firstChild);
  root.append(component(onNavigate));
};

root.appendChild(component(onNavigate));
