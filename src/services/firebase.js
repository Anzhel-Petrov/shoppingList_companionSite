import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCvgd3Q-3MUWE7BTTeXovpxpZnTz7qIACQ",
    authDomain: "shoppinglistkotlin-4c71a.firebaseapp.com",
    databaseURL: "https://shoppinglistkotlin-4c71a-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "shoppinglistkotlin-4c71a",
    storageBucket: "shoppinglistkotlin-4c71a.appspot.com",
    messagingSenderId: "590555212742",
    appId: "1:590555212742:web:c7b16b3f50831ae81be0c7",
    measurementId: "G-E02GWWP1VS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();

  const db = firebase.firestore();

  export { db };