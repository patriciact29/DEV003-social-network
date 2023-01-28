import { loginWithEmail } from '../auth.js';

export const Login = (onNavigate) => {
  const form = document.createElement('form');
  const buttonLogin = document.createElement('button');
  // const buttonBack = document.createElement('button');
  const title = document.createElement('h2');
  const inputEmail = document.createElement('input');
  const labelEmail = document.createElement('label');
  const inputpass = document.createElement('input');
  const labelPassword = document.createElement('label');

  form.setAttribute('class', 'container secondView');
  inputEmail.setAttribute('placeholder', 'xxxxxx@gmail.com');
  inputEmail.setAttribute('required', '');
  inputEmail.setAttribute('name', 'email');
  inputEmail.setAttribute('required', '');
  labelEmail.setAttribute('for', 'email');
  inputpass.setAttribute('placeholder', '*********');
  inputpass.setAttribute('required', '');
  inputpass.setAttribute('name', 'password');
  inputpass.setAttribute('required', '');
  inputpass.setAttribute('type', 'password');
  labelPassword.setAttribute('for', 'password');

  title.textContent = 'Iniciar sesión';
  labelEmail.textContent = 'E-mail';
  labelPassword.textContent = 'Contraseña';

  buttonLogin.textContent = 'Iniciar sesión';
  // buttonLogin.addEventListener('click', loginWithEmail);
  // buttonLogin.addEventListener('click', () => {
  //   onNavigate('/home');
  // });

  buttonLogin.addEventListener('click', () => {
    if (loginWithEmail) {
      onNavigate('/home');
    } else {
      alert('Por favor, revisa tus datos.');
    }
  });
  // buttonBack.textContent = 'Retroceder';
  // buttonBack.addEventListener('click', () => {
  //   onNavigate('/');
  // });

  form.append(title, labelEmail, inputEmail, labelPassword, inputpass, buttonLogin);

  return form;
};
