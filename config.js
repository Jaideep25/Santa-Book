import firebase from 'firebase';
require('@firebase/firestore')

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASbSoVXls_-FB9T4AM9QTwvuI0ZZ5-x9w",
  authDomain: "book-santa-7a431.firebaseapp.com",
  databaseURL: "https://book-santa-7a431.firebaseio.com",
  projectId: "book-santa-7a431",
  storageBucket: "book-santa-7a431.appspot.com",
  messagingSenderId: "928664733886",
  appId: "1:928664733886:web:17ca86a5ea88175f9ff6ef",
  measurementId: "G-7E3R522167"
};

if(!firebase.apps.length) { 
  firebase.initializeApp(firebaseConfig) } 
  export default firebase.database()