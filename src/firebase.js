// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDvOLjRU15f7-WCYmM0kk-XmL3JN5wp_uM",
    authDomain: "facebook-clone-ccdb2.firebaseapp.com",
    projectId: "facebook-clone-ccdb2",
    storageBucket: "facebook-clone-ccdb2.appspot.com",
    messagingSenderId: "275017605717",
    appId: "1:275017605717:web:dd0a2013f500f077e6eadc",
    measurementId: "G-Q80E90BX9Q"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);  
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;