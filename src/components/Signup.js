import { registerNewUser } from '../auth.js';

export const Signup = (onNavigate) => {
  const title = document.createElement('h2');
  const form = document.createElement('div');
  const button = document.createElement('button');
  const labelUser = document.createElement('label');
  const inputUser = document.createElement('input');
  const labelName = document.createElement('label');
  const inputName = document.createElement('input');
  const labelEmail = document.createElement('label');
  const inputEmail = document.createElement('input');
  const labelPassword = document.createElement('label');
  const inputPassword = document.createElement('input');

  form.setAttribute('class', 'container secondView');
  labelUser.setAttribute('for', 'usuario');
  inputUser.setAttribute('name', 'usuario');
  inputUser.setAttribute('type', 'text');
  inputUser.setAttribute('placeholder', '@nombre_usuario');
  inputUser.setAttribute('required', '');
  labelName.setAttribute('for', 'name');
  inputName.setAttribute('name', 'name');
  inputName.setAttribute('type', 'text');
  inputName.setAttribute('placeholder', 'Nombre Apellido');
  inputName.setAttribute('required', '');
  labelEmail.setAttribute('for', 'email');
  inputEmail.setAttribute('name', 'email');
  inputEmail.setAttribute('type', 'email');
  inputEmail.setAttribute('placeholder', 'xxxxxx@gmail.com');
  inputEmail.setAttribute('required', '');
  labelPassword.setAttribute('for', 'password');
  inputPassword.setAttribute('name', 'password');
  inputPassword.setAttribute('type', 'password');
  inputPassword.setAttribute('placeholder', '*********');
  inputPassword.setAttribute('required', '');
  button.setAttribute('type', 'submit');

  title.textContent = 'Crear cuenta';
  button.textContent = 'Crear';
  labelUser.textContent = 'Usuario';
  labelName.textContent = 'Nombre y Apellido';
  labelEmail.textContent = 'E-mail';
  labelPassword.textContent = 'Contraseña';

  button.addEventListener('click', () => {
    // const name = inputName.value;
    // const userName = inputUser.value;
    const email = inputEmail.value;
    const password = inputPassword.value;
    registerNewUser(email, password)
      .then(() => {
        alert('verifica tu correo e inicia sesión')
        onNavigate('/login');
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
        alert(error.message);
      });
  });

  form.append(
    title,
    labelUser,
    inputUser,
    labelName,
    inputName,
    labelEmail,
    inputEmail,
    labelPassword,
    inputPassword,
    button,
  );

  return form;
};
