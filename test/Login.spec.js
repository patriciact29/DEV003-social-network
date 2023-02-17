import { loginWithEmail } from '../src/firebase/auth.js';
import { Login } from '../src/components/Login.js';
import {allInputs} from '../src/lib/validate-inputs.js';

jest.mock('../src/firebase/auth', () => ({
  loginWithEmail: () => Promise.resolve({ user: { emailVerified: true } }),
}));


// ----------------------------------
// jest.mock('../src/firebase/auth.js');
// const loginAuth = require('../src/firebase/auth.js');

// loginAuth.mockImplementation(() => Promise.resolve({ user: { emailVerified: true } }));
// ---------------
// jest.mock('../src/lib/validate-inputs.js', () => ({
//   get: jest.fn()
//     .mockImplementationOnce({ allInputs: { email: false, password: false } })
//     .mockImplementationOnce({ allInputs: { email: true, password: true } }),
// }));
// ---------------
// const validateInputs = require('../src/lib/validate-inputs.js');

// const mockValidateInputs = jest.fn()
//   .mockImplementationOnce(() => ({ allInputs: { email: false, password: false } }))
//   .mockImplementationOnce(() => ({ allInputs: { email: true, password: true } }));

// jest.mock('../src/lib/validate-inputs.js', () => mockValidateInputs);
// // ---------------
// jest.mock('../src/lib/validate-inputs.js');
// const validateInputs = require('../src/lib/validate-inputs.js');

// validateInputs.mockImplementation(() => ({ allInputs: { email: true, password: true } }));

function tick() {
  return new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
}

describe('Primer test de Login', () => {
  let divRoot;
  let divAll;
  let divImage;
  let form;
  let divContent;
  let title;
  let divEmail;
  let inputEmail;
  let labelEmail;
  let errorEmail;
  let divPassword;
  let inputPassword;
  let labelPassword;
  let errorPassword;
  let buttonLogin;
  let onNavigateMock;

  beforeEach(() => {
    onNavigateMock = jest.fn(()=> console.log("probando el h"));
    divRoot = document.createElement('div');
    divRoot.id = 'root';
    document.body.appendChild(divRoot);
    divRoot.appendChild(Login(onNavigateMock));
    divAll = document.getElementById('divAll');
    divImage = document.getElementById('divImage');
    form = document.getElementById('form');
    divContent = document.getElementById('divContent');
    title = document.getElementById('title');
    divEmail = document.getElementById('divEmail');
    inputEmail = document.getElementById('inputEmail');
    labelEmail = document.getElementById('labelEmail');
    errorEmail = document.getElementById('erroremail');
    divPassword = document.getElementById('labelPassword');
    inputPassword = document.getElementById('inputPassword');
    labelPassword = document.getElementById('labelPassword');
    errorPassword = document.getElementById('errorpassword');
    buttonLogin = document.getElementById('buttonLogin');
  });

  it('Debería mostrar mensaje de email invalido cuando el formato del email sea incorrecto', () => {   
    inputEmail.dispatchEvent(new KeyboardEvent('keyup', { key: 'a' }));
    expect(errorEmail.className).toEqual('error-display');
  });

  it('al hacer click en el boton con los campos correctos debe llamar la funcion onnavigate ', () => {
    inputEmail.value = 'h@h.com';
    inputPassword.value = 'Hola.123';
    allInputs.email = true
    allInputs.password = true

    buttonLogin.click();
    setTimeout(()=> expect(onNavigateMock).toHaveBeenCalled(),0);

    
    
  });
});
