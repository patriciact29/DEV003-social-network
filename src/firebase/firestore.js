import {
  getFirestore, collection, addDoc, onSnapshot, deleteDoc, doc, getDoc, updateDoc, setDoc,
} from 'firebase/firestore';
import { app as firebase } from './firebase-config.js';

// constante que inicializa a firesotre (db = data base)
export const db = getFirestore(firebase);

// addDoc fx desde firestore que nos permite guardar los post
export const savePost = (post) => {
  addDoc(collection(db, 'posts'), { post });
};

// no sabemos por qué esya aquí...
// export const getPosts = () => getDocs(collection(db, 'posts'));

// onSnapShot fx desde forestore 
export const onGetPosts = (callback) => onSnapshot(collection(db, 'posts'), callback);

export const deletePost = (id) => deleteDoc(doc(db, 'posts', id));

export const getPost = (id) => getDoc(doc(db, 'posts', id));

// fx desde firetore que nos permite actualizar el post a traves de su ID.
// NewField -> el texto actualizado en el input
export const updatePost = (id, newFields) => updateDoc(doc(db, 'posts', id), newFields);

// 08/02 guardando usuario (con google: welcome 48-50)
export const saveUser = (user, fullName, userName) => {
  setDoc(doc(db, 'users', user.uid), {
    id: user.uid,
    email: user.email,
    name: fullName,
    userUser: userName,
  });
};
