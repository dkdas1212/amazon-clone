import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyAWQHc3Vo_BvoHKhbMlvnhSv6SvJqxc4oU",
    authDomain: "clone-9df31.firebaseapp.com",
    projectId: "clone-9df31",
    storageBucket: "clone-9df31.appspot.com",
    messagingSenderId: "248312270172",
    appId: "1:248312270172:web:3028ccedc8f6b709a94599",
    measurementId: "G-BHYSRHZDWH"
  
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };