import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDF8hlvvmPk5ZKe9b6MudHxygEfkpsoaAs",
  authDomain: "project-folio.firebaseapp.com",
  databaseURL: "https://project-folio.firebaseio.com",
  projectId: "project-folio",
  storageBucket: "project-folio.appspot.com",
  messagingSenderId: "642077939513",
  appId: "1:642077939513:web:217237bf9885a9ba5d3ae8",
  measurementId: "G-M3V41Z0S59"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
