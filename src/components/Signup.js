import { onNavigate } from '../main.js';

export const Signup = () => {
  const form = document.createElement('form');
  const button = document.createElement('button');
  const labelUser = document.createElement('label');
  const inputUser = document.createElement('input');
 // const labelName = document.createElement('label');
  const inputName = document.createElement('input');
 // const labelCountry = document.createElement('label');
  const selectCountry = document.createElement('select');
 // const labelEmail = document.createElement('label');
  const inputEmail = document.createElement('input');
 // const labelPassword = document.createElement('label');
  const inputPass = document.createElement('input');

  form.setAttribute('class', 'container secondView');
  inputUser.setAttribute('placeholder', 'Usuario');
  inputName.setAttribute('placeholder', 'Nombre Apellido');
  inputEmail.setAttribute('placeholder', 'E-mail');
  inputEmail.setAttribute('type', 'email');
  inputEmail.setAttribute('required', '');
  inputPass.setAttribute('placeholder', 'Contraseña');
  inputPass.setAttribute('type', 'password');
  inputPass.setAttribute('required', '');
  button.setAttribute('type', 'submit');

  button.textContent = 'Crear';
  labelUser.textContent = 'Usuario';

  // labelUser.append(inputUser);
  // labelName.append(inputName);
  // labelCountry.append(selectCountry);
  // labelEmail.append(inputEmail);
  // labelPassword.append(inputPass);
  form.append(inputUser, inputName, selectCountry, inputEmail, inputPass, button);

  return form;
};
