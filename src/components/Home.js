// import { updateDoc } from 'firebase/firestore';
import { logout } from '../auth.js';
import {
  deletePost, onGetPosts, savePost, getPost, updatePost,
} from '../firestore.js';

export const Home = (onNavigate) => {
  const home = document.createElement('div');
  const title = document.createElement('h2');
  const formNewPost = document.createElement('form');
  const inputPost = document.createElement('input');
  const buttonPost = document.createElement('button');
  const divAllPost = document.createElement('div');
  // const divPost = document.createElement('div');
  const buttonLogout = document.createElement('button');

  home.setAttribute('class', 'home');
  formNewPost.setAttribute('id', 'formNewPost');
  formNewPost.setAttribute('class', 'containerNewPost home');
  divAllPost.setAttribute('id', 'allPost');
  divAllPost.setAttribute('class', 'containerAllPost home');
  // divPost.setAttribute('id', 'post');
  // divPost.setAttribute('class', 'containerPost home');
  inputPost.setAttribute('placeholder', 'Comparte tu experiencia aqui');
  inputPost.setAttribute('id', 'inputPost');
  buttonPost.setAttribute('id', 'buttonPost');

  title.textContent = 'Página de Inicio';
  buttonLogout.textContent = 'Cerrar sesión';
  buttonPost.textContent = 'Publicar';
  buttonLogout.addEventListener('click', logout);
  buttonLogout.addEventListener('click', () => {
    onNavigate('/');
  });

  let editStatus = false;
  let id = '';
  window.addEventListener('DOMContentLoaded', async () => {
    onGetPosts((querySnapshot) => {
      let html = '';

      querySnapshot.forEach((doc) => {
        const inputPosts = doc.data();
        html += `
          <div class = 'containerPost home'>
            <p>${inputPosts.post}</p>
            <button class='btn-delete' data-id="${doc.id}">Eliminar</button>
            <button class='btn-edit' data-id="${doc.id}">Editar</button>
         </div>
    `;
      });
      divAllPost.innerHTML = html;
      const btnsDelete = divAllPost.querySelectorAll('.btn-delete');
      btnsDelete.forEach((btn) => {
        btn.addEventListener('click', async ({ target: { dataset } }) => {
          try {
            await deletePost(dataset.id);
          } catch (error) {
            console.log(error);
          }
        });
      });
      const btnsEdit = divAllPost.querySelectorAll('.btn-edit');
      btnsEdit.forEach((btn) => {
        btn.addEventListener('click', async (e) => {
          try {
            const doc = await getPost(e.target.dataset.id);
            const post = doc.data();
            formNewPost.inputPost.value = post.post;

            editStatus = true;
            id = doc.id;
            formNewPost.buttonPost.innerText = 'Update';
          } catch (eror) {
            console.log(error);
          }
        });
      });
    });
  });
  formNewPost.addEventListener('submit', async (e) => {
    e.preventDefault();

    try {
      if (!editStatus) {
        await savePost(inputPost.value);
      } else {
        await updatePost(id, {
          post: inputPost.value,
        });

        editStatus = false;
        id = '';
        formNewPost.buttonPost.innerText = 'Guardar';
      }

      formNewPost.reset();
    } catch (error) {
      console.log(error);
    }
  });
  formNewPost.append(inputPost, buttonPost);
  // divAllPost.append(divPost);
  home.append(title, buttonLogout, formNewPost, divAllPost);
  return home;
};
