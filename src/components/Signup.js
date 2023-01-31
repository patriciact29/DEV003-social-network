import { registerNewUser, verifyEmail } from '../auth.js';

export const Signup = (onNavigate) => {
  const title = document.createElement('h2');
  const form = document.createElement('form');
  const button = document.createElement('button');
  const labelUser = document.createElement('label');
  const inputUser = document.createElement('input');
  const errorUser = document.createElement('p');
  const labelName = document.createElement('label');
  const inputName = document.createElement('input');
  const errorName = document.createElement('p');
  const labelEmail = document.createElement('label');
  const inputEmail = document.createElement('input');
  const errorEmail = document.createElement('p');
  const labelPassword = document.createElement('label');
  const inputPassword = document.createElement('input');
  const errorPassword = document.createElement('p');
  const labelPassword2 = document.createElement('label');
  const inputPassword2 = document.createElement('input');
  const errorPassword2 = document.createElement('p');

  form.setAttribute('class', 'container secondView');
  labelUser.setAttribute('for', 'user');
  inputUser.setAttribute('name', 'user');
  inputUser.setAttribute('type', 'text');
  inputUser.setAttribute('placeholder', '@nombre_usuario');
  inputUser.setAttribute('required', '');
  errorUser.setAttribute('class', 'error user');
  labelName.setAttribute('for', 'name');
  inputName.setAttribute('name', 'name');
  inputName.setAttribute('type', 'text');
  inputName.setAttribute('placeholder', 'Nombre Apellido');
  inputName.setAttribute('required', '');
  errorName.setAttribute('class', 'error name');
  labelEmail.setAttribute('for', 'email');
  inputEmail.setAttribute('name', 'email');
  inputEmail.setAttribute('type', 'email');
  inputEmail.setAttribute('placeholder', 'xxxxxx@gmail.com');
  inputEmail.setAttribute('required', '');
  errorEmail.setAttribute('class', 'error email');
  labelPassword.setAttribute('for', 'password');
  inputPassword.setAttribute('name', 'password');
  inputPassword.setAttribute('type', 'password');
  inputPassword.setAttribute('placeholder', '*********');
  inputPassword.setAttribute('required', '');
  errorPassword.setAttribute('class', 'error password');
  labelPassword2.setAttribute('for', 'password');
  inputPassword2.setAttribute('name', 'password');
  inputPassword2.setAttribute('type', 'password');
  inputPassword2.setAttribute('placeholder', '*********');
  inputPassword2.setAttribute('required', '');
  errorPassword2.setAttribute('class', 'error password2');

  button.setAttribute('type', 'submit');

  title.textContent = 'Crear cuenta';
  button.textContent = 'Crear';
  labelUser.textContent = 'Usuario';
  errorUser.textContent = 'El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo.';
  labelName.textContent = 'Nombre y Apellido';
  errorName.textContent = 'El usuario tiene que ser de 4 a 16 dígitos y solo puede contener letras. ';
  labelEmail.textContent = 'E-mail';
  errorEmail.textContent = 'El email debe tener un formato valido. ';
  labelPassword.textContent = 'Contraseña';
  errorPassword.textContent = 'La contraseña tiene que ser de 4 a 12 dígitos.';
  labelPassword2.textContent = 'Confirmar contraseña';
  errorPassword2.textContent = 'Ambas contraseñas deben ser iguales.';

  button.addEventListener('click', () => {
    const email = inputEmail.value;
    const password = inputPassword.value;
    registerNewUser(email, password)
      .catch((error) => {
        alert(error.message);
      })
      .then(() => {
        alert('Verifica tu email e inicia sesión.');
        verifyEmail();
        onNavigate('/login');
      });
  });

  const inputs = document.querySelectorAll('input');
  console.log(inputs);
  const expresions = {
    user: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  };
  const allInputs = {
    user: false,
    name: false,
    email: false,
    password: false,

  };
  const validForm = (e) => {
    switch (e.target.name) {
      case 'user':
        validateInput(expresions.user, e.target, 'user');
        break;
      case 'name':
        validateInput(expresions.name, e.target, 'name');
        break;
      case 'password':
        validateInput(expresions.password, e.target, 'password');
        validarPassword2();
        break;
      case 'password2':
        validarPassword2();
        break;
      case 'email':
        validateInput(expresions.email, e.target, 'email');
        break;
    }
  };

  const validateInput = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
      document.querySelector(`.error ${campo}`).style.display = 'none';
      allInputs[input] = true;
    } else {
      document.querySelector(`.error ${campo}`).style.display = 'block';
      allInputs[input] = false;
    }
  };

  inputs.forEach((input) => {
    input.addEventListener('keyup', validForm);
    input.addEventListener('blur', validForm);
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
  });

  form.append(
    title,
    labelUser,
    inputUser,
    errorUser,
    labelName,
    inputName,
    errorName,
    labelEmail,
    inputEmail,
    errorEmail,
    labelPassword,
    inputPassword,
    errorPassword,
    labelPassword2,
    inputPassword2,
    errorPassword2,
    button,

  );

  return form;
};
