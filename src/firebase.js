import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCDHKFCpq78LFLRphgEw0f7UmYyrhYj4bY",
  authDomain: "disneyplus-clone-chay.firebaseapp.com",
  projectId: "disneyplus-clone-chay",
  storageBucket: "disneyplus-clone-chay.appspot.com",
  messagingSenderId: "111445823796",
  appId: "1:111445823796:web:c0acd5f03b040fb664d561",
  measurementId: "G-L2FMSZVSHY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
