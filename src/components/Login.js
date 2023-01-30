import { loginWithEmail } from '../auth.js';

export const Login = (onNavigate) => {
  const form = document.createElement('div');
  const buttonLogin = document.createElement('button');
  // const buttonBack = document.createElement('button');
  const title = document.createElement('h2');
  const inputEmail = document.createElement('input');
  const labelEmail = document.createElement('label');
  const inputPassword = document.createElement('input');
  const labelPassword = document.createElement('label');

  form.setAttribute('class', 'container secondView');
  labelEmail.setAttribute('for', 'email');
  inputEmail.setAttribute('name', 'email');
  inputEmail.setAttribute('type', 'text');
  inputEmail.setAttribute('placeholder', 'xxxxxx@gmail.com');
  inputEmail.setAttribute('required', '');
  labelPassword.setAttribute('for', 'password');
  inputPassword.setAttribute('name', 'password');
  inputPassword.setAttribute('type', 'password');
  inputPassword.setAttribute('placeholder', '*********');
  inputPassword.setAttribute('required', '');
  buttonLogin.setAttribute('name', 'login');
  buttonLogin.setAttribute('type', 'submit');

  title.textContent = 'Iniciar sesión';
  labelEmail.textContent = 'E-mail';
  labelPassword.textContent = 'Contraseña';
  buttonLogin.textContent = 'Iniciar sesión';

  buttonLogin.addEventListener('click', () => {
    // const name = inputName.value;
    // const userName = inputUser.value;
    const email = inputEmail.value;
    const password = inputPassword.value;
    // console.log(email, password);
    loginWithEmail(email, password)
      .then(() => {
        onNavigate('/home');
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
        alert(error.message);
      });
  });

  form.append(title, labelEmail, inputEmail, labelPassword, inputPassword, buttonLogin);
  return form;
};
