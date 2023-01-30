import { loginWithGoogle } from '../auth.js';

export const Welcome = (onNavigate) => {
  const div = document.createElement('div');
  const logo = document.createElement('img');
  const buttonLogin = document.createElement('button');
  const buttonSignup = document.createElement('button');
  const buttonGoogle = document.createElement('button');

  div.setAttribute('class', 'container');
  logo.setAttribute('src', './media/logo-blanco-fems-viajando-juntas.png');
  logo.setAttribute('alt', 'logo-fems');
  buttonLogin.textContent = 'Iniciar sesión';
  buttonLogin.addEventListener('click', () => {
    onNavigate('/login');
  });
  buttonSignup.textContent = 'Crear cuenta';
  buttonSignup.addEventListener('click', () => {
    onNavigate('/signup');
  });
  buttonGoogle.textContent = 'Continuar con Google';
  buttonGoogle.addEventListener('click', () => {
    loginWithGoogle()
      .then(() => {
      // const user = result.user; // para usar result sería .then((result) => {})
      // console.log(`usuario ${user.displayName} esta logueado y su foto de perfil es ${user.photoURL}`);
        onNavigate('/home');
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
        alert(error.message);
      });
  });

  // buttonGoogle.addEventListener('click', async () => {
  //   try {
  //     const result = await loginWithGoogle();
  //     const user = result.user;
  //     console.log(`usuario ${user.displayName} esta logueado y su foto de perfil es ${user.photoURL}`);
  //     // onNavigate('./home');
  //   } catch (error) {
  //     alert(error);
  //   }
  // });

  div.append(logo, buttonLogin, buttonSignup, buttonGoogle);
  return div;
};
