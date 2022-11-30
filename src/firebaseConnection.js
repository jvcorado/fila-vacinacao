import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBHyo7QFFJRXDk2JwVA-LL_wzKGaHPuaD4",
  authDomain: "filavacinacao.firebaseapp.com",
  projectId: "filavacinacao",
  storageBucket: "filavacinacao.appspot.com",
  messagingSenderId: "415856818135",
  appId: "1:415856818135:web:0b30baddcc1e3718863d92",
  measurementId: "G-ES5D221WCW"
};

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };