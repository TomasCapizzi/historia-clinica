import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
export const app = firebase.initializeApp({
  apiKey: "AIzaSyBMoMUNf2H2Ojs5EtEXy6jw_IyS4EMPe5w",
  authDomain: "historia-clinica-ba195.firebaseapp.com",
  projectId: "historia-clinica-ba195",
  storageBucket: "historia-clinica-ba195.appspot.com",
  messagingSenderId: "204378522842",
  appId: "1:204378522842:web:17a61dd834af82197251e3"
});

export const db = firebase.firestore();
//export default app;