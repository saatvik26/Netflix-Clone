
// import firebase from "firebase"
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBVwKVlhBKgEdXpHd0K3bM6bR__mIJBHtE",
  authDomain: "netflix-clone-2-7e152.firebaseapp.com",
  projectId: "netflix-clone-2-7e152",
  storageBucket: "netflix-clone-2-7e152.appspot.com",
  messagingSenderId: "669827662278",
  appId: "1:669827662278:web:131d3d41fe8129ab20b2c7"
};


const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp);

export { auth };
export default db;