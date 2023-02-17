import { Login } from '../src/components/Login.js';
import { loginWithEmail } from '../src/firebase/auth.js';
import { allInputs } from '../src/lib/validate-inputs.js';

jest.mock('../src/firebase/auth');
// () => ({
//   loginWithEmail: () => Promise.resolve({ user: { emailVerified: true } }),
// }));

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
    onNavigateMock = jest.fn();
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

  it('al hacer click en el boton con los campos correctos y verificados debe llamar la funcion onnavigate ', () => {
    loginWithEmail.mockImplementationOnce((emailVerified) => Promise.resolve({ user: { emailVerified: true } })),
    inputEmail.value = 'h@h.com';
    inputPassword.value = 'Hola.123';
    allInputs.email = true;
    allInputs.password = true;

    buttonLogin.click();
    setTimeout(() => expect(onNavigateMock).toHaveBeenCalled(), 0);
  });

  it('al hacer click en el boton sin el Email verificado debe ejecutarse un alert con el mensaje"Email no verificado, se le envió un correo de verificación"', () => {
    loginWithEmail.mockImplementationOnce((emailVerified) => Promise.resolve({ user: { emailVerified: false } })),
    window.alert = jest.fn();
    inputEmail.value = 'h@h.com';
    inputPassword.value = 'Hola.123';
    allInputs.email = true;
    allInputs.password = true;

    buttonLogin.click();
    setTimeout(() => expect(window.alert).toHaveBeenCalled(), 0);
  });
});
