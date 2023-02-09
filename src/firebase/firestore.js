import {
  getFirestore, collection, addDoc, getDocs, onSnapshot, deleteDoc, doc, getDoc, updateDoc, setDoc,
} from 'firebase/firestore';
import { app as firebase } from './firebase-config.js';

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(firebase);
export const savePost = (post) => {
  addDoc(collection(db, 'posts'), { post });
};

export const getPosts = () => getDocs(collection(db, 'posts'));

export const onGetPosts = (callback) => onSnapshot(collection(db, 'posts'), callback);

export const deletePost = (id) => deleteDoc(doc(db, 'posts', id));

export const getPost = (id) => getDoc(doc(db, 'posts', id));

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
