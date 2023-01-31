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
  const correctMessage = document.createElement('p');
  const errorMessage = document.createElement('p');

  form.setAttribute('id', 'form');
  form.setAttribute('class', 'container secondView');
  labelUser.setAttribute('for', 'user');
  inputUser.setAttribute('name', 'user');
  inputUser.setAttribute('type', 'text');
  inputUser.setAttribute('placeholder', '@nombre_usuario');
  inputUser.setAttribute('required', '');
  errorUser.setAttribute('id', 'erroruser');
  errorUser.setAttribute('class', 'error');
  labelName.setAttribute('for', 'name');
  inputName.setAttribute('name', 'name');
  inputName.setAttribute('type', 'text');
  inputName.setAttribute('placeholder', 'Nombre Apellido');
  inputName.setAttribute('required', '');
  errorName.setAttribute('id', 'errorname');
  errorName.setAttribute('class', 'error');
  labelEmail.setAttribute('for', 'email');
  inputEmail.setAttribute('name', 'email');
  inputEmail.setAttribute('type', 'email');
  inputEmail.setAttribute('placeholder', 'xxxxxx@gmail.com');
  inputEmail.setAttribute('required', '');
  errorEmail.setAttribute('id', 'erroremail');
  errorEmail.setAttribute('class', 'error');
  labelPassword.setAttribute('for', 'password');
  inputPassword.setAttribute('id', 'password');
  inputPassword.setAttribute('name', 'password');
  inputPassword.setAttribute('type', 'password');
  inputPassword.setAttribute('placeholder', '*********');
  inputPassword.setAttribute('required', '');
  errorPassword.setAttribute('id', 'errorpassword');
  errorPassword.setAttribute('class', 'error');
  inputPassword2.setAttribute('id', 'password2');
  labelPassword2.setAttribute('for', 'password');
  inputPassword2.setAttribute('name', 'password');
  inputPassword2.setAttribute('type', 'password');
  inputPassword2.setAttribute('placeholder', '*********');
  inputPassword2.setAttribute('required', '');
  errorPassword2.setAttribute('id', 'errorpassword2');
  errorPassword2.setAttribute('class', 'error');
  correctMessage.setAttribute('id', 'correctMessage');
  errorMessage.setAttribute('id', 'errorMessage');

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
  correctMessage.textContent = 'Formulario enviado, verifica tu email e inicia sesión.';
  errorMessage.textContent = 'Por favor verifica que tus datos sean válidos.';

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

  const validateInput = (expresion, input, element) => {
    if (expresion.test(input.value)) {
      document.querySelector(`#error${element}`).classList.replace('error-display', 'error');
      allInputs[element] = true;
    } else {
      document.querySelector(`#error${element}`).classList.replace('error', 'error-display');
      allInputs[element] = false;
    }
  };

  const validarPassword2 = () => {
    const inputPassword1 = document.getElementById('password');
    const inputPasswordConfirm = document.getElementById('password2');

    if (inputPassword1.value !== inputPasswordConfirm.value) {
      document.querySelector('#errorpassword2').classList.replace('error', 'error-display');
      allInputs.password = false;
    } else {
      document.querySelector('#errorpassword2').classList.replace('error-display', 'error');
      allInputs.password = true;
    }
  };

  const validForm = (e) => {
    switch (e.target.name) {
      case 'user':
        validateInput(expresions.user, e.target, 'user');
        break;
      case 'name':
        validateInput(expresions.name, e.target, 'name');
        break;
      case 'email':
        validateInput(expresions.email, e.target, 'email');
        break;
      case 'password':
        validateInput(expresions.password, e.target, 'password');
        validarPassword2();
        break;
      case 'password2':
        validarPassword2();
        break;
      default:
        console.log('default');
    }
  };

  inputUser.addEventListener('keyup', validForm);
  inputUser.addEventListener('blur', validForm);
  inputName.addEventListener('keyup', validForm);
  inputName.addEventListener('blur', validForm);
  inputEmail.addEventListener('keyup', validForm);
  inputEmail.addEventListener('blur', validForm);
  inputPassword.addEventListener('keyup', validForm);
  inputPassword.addEventListener('blur', validForm);
  inputPassword2.addEventListener('keyup', validForm);
  inputPassword2.addEventListener('blur', validForm);

  function register() {
    const email = inputEmail.value;
    const password = inputPassword.value;
    registerNewUser(email, password)
      .catch((error) => {
        alert(error.message);
      })
      .then(() => {
        verifyEmail();
        onNavigate('/login');
      });
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (allInputs.user && allInputs.name && allInputs.email && allInputs.password) {
      // form.reset();
      document.getElementById('correctMessage').style.display = 'block';
      setTimeout(() => {
        register();
      }, 5000);
    } else {
      document.getElementById('errorMessage').style.display = 'block';
    }
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
    correctMessage,
    errorMessage,
  );

  return form;
};
