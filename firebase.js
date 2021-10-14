// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBuKj1bKvQSk_yjQYlIMsYsJ_PHAV6ZUJc',
  authDomain: 'almost-insta-project.firebaseapp.com',
  projectId: 'almost-insta-project',
  storageBucket: 'almost-insta-project.appspot.com',
  messagingSenderId: '639591087115',
  appId: '1:639591087115:web:9bf27dd690f8ec21329b0e',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
