import { logout } from '../firebase/auth.js';
import {
  deletePost, onGetPosts, savePost, getPost, updatePost,
} from '../firebase/firestore.js';

export const Home = (onNavigate) => {
  const menuBg = document.createElement('div');
  const iconMenu = document.createElement('i');
  const header = document.createElement('header');
  const title = document.createElement('p');
  const nav = document.createElement('nav');
  const buttonHome = document.createElement('button');
  const buttonProfile = document.createElement('button');
  const buttonLogout = document.createElement('button');
  const home = document.createElement('div');
  const formNewPost = document.createElement('form');
  const inputPost = document.createElement('input');
  const buttonPost = document.createElement('button');
  const divAllPost = document.createElement('div');

  home.setAttribute('class', 'home');
  menuBg.setAttribute('class', 'menuBg');
  iconMenu.setAttribute('id', 'btn-menu');
  iconMenu.setAttribute('class', 'fa-solid fa-bars');
  header.setAttribute('class', 'header');
  nav.setAttribute('class', 'hide');
  buttonHome.setAttribute('class', 'buttonHome');
  buttonProfile.setAttribute('class', 'buttonProfile');
  buttonLogout.setAttribute('class', 'buttonLogout');
  formNewPost.setAttribute('id', 'formNewPost');
  formNewPost.setAttribute('class', 'containerNewPost home');
  divAllPost.setAttribute('id', 'allPost');
  divAllPost.setAttribute('class', 'containerAllPost home');
  inputPost.setAttribute('placeholder', 'Comparte tu experiencia aqui');
  inputPost.setAttribute('id', 'inputPost');
  buttonPost.setAttribute('id', 'buttonPost');

  title.textContent = 'FEMS';
  buttonHome.textContent = 'Inicio';
  buttonProfile.textContent = 'Mi Perfil';
  buttonLogout.textContent = 'Cerrar sesión';
  buttonPost.textContent = 'Publicar';

  // Cerrar sesión
  buttonLogout.addEventListener('click', logout);
  buttonLogout.addEventListener('click', () => {
    onNavigate('/');
  });

  // Escucha todo el tiempo...
  // para crear post
  let editStatus = false;
  let id = '';
  // window.addEventListener('DOMContentLoaded', async () => {
  onGetPosts((querySnapshot) => {
    let html = '';

    querySnapshot.forEach((doc) => {
      const inputPosts = doc.data();
      html += `
        <div class = 'containerPost home'>
          <div class="optionsMenu">
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>
          <section id="options" class="hide">
            <button class='btn-delete' data-id="${doc.id}">Eliminar</button>
            <button class='btn-edit' data-id="${doc.id}">Editar</button>
          </section>
          <p>${inputPosts.post}</p>
        </div>
  `;
    });

    // para eliminar post
    divAllPost.innerHTML = html;
    const btnsDelete = divAllPost.querySelectorAll('.btn-delete');
    btnsDelete.forEach((btn) => {
      // btn.addEventListener('click', async ({ target: { dataset } }) => {
      //   try {
      //     await deletePost(dataset.id);
      //   } catch (error) {
      //     // console.log(error);
      //   }
      // });
      btn.addEventListener('click', ({ target: { dataset } }) => {
        const confirmDelete = confirm('¿Segura que deseas eliminar este post?');
        if (confirmDelete) {
          deletePost(dataset.id);
        }
      });
    });

    // para editar post
    const btnsEdit = divAllPost.querySelectorAll('.btn-edit');
    btnsEdit.forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        try {
          const doc = await getPost(e.target.dataset.id);
          const post = doc.data();
          formNewPost.inputPost.value = post.post;

          editStatus = true;
          id = doc.id;
          formNewPost.buttonPost.innerText = 'Actualizar';
        } catch (error) {
          // console.log(error);
        }
      });
    });

    // Menu opciones
    const optionsMenu = divAllPost.querySelector('.optionsMenu');
    const options = divAllPost.querySelector('.hide');

    function showOptions() {
      options.classList.replace('hide', 'showOptions');
    }
    optionsMenu.addEventListener('click', showOptions);

    // Probando codigo
    // const optionsMenu = divAllPost.querySelectorAll('.optionsMenu');
    // optionsMenu.forEach((option) => {
    //   option.addEventListener('click', () => {
    //     option.classList.replace('hide', 'showOptions');
    //   });
    // });
  });
  // });

  // ejecutando lo que se desee hacer (guardar nuevo post o editar actulizar post existente)
  formNewPost.addEventListener('submit', /* async */ (e) => {
    e.preventDefault();

    try {
      if (inputPost.value !== '') {
        if (!editStatus) {
          /* await */ savePost(inputPost.value);
        } else {
          /* await */ updatePost(id, {
            post: inputPost.value,
          });

          editStatus = false;
          id = '';
          formNewPost.buttonPost.innerText = 'Publicar';
        }

        formNewPost.reset(); // formatea formulario
      }
    } catch (error) {
      // console.log(error);
    }
  });

  // Menu hamburguesa
  function showMenu() {
    menuBg.style.display = 'block';
    nav.classList.replace('hide', 'nav');
  }

  function hideMenu() {
    nav.classList.replace('nav', 'hide');
    menuBg.style.display = 'none';
  }

  iconMenu.addEventListener('click', showMenu);
  menuBg.addEventListener('click', hideMenu);

  // mostrando elementos
  formNewPost.append(inputPost, buttonPost);
  header.append(iconMenu, title, nav);
  nav.append(buttonHome, buttonProfile, buttonLogout);

  // divAllPost.append(divPost);
  home.append(menuBg, header, formNewPost, divAllPost);
  return home;
};
