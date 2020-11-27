import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    
    apiKey: "AIzaSyB_iyZLkWSUmzTUgEynRW1yIQ1e6a0IB4Y",
    authDomain: "tinder-clone-f50b1.firebaseapp.com",
    databaseURL: "https://tinder-clone-f50b1.firebaseio.com",
    projectId: "tinder-clone-f50b1",
    storageBucket: "tinder-clone-f50b1.appspot.com",
    messagingSenderId: "1018317003915",
    appId: "1:1018317003915:web:fe1b0ae3c7a8d97463c88e",
    measurementId: "G-9Z4X0ZE23G"
    
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;