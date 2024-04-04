import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAyPTjYunJmiSrsSHZhg-BC3xfkIuNvRRE",
  authDomain: "lil-kido.firebaseapp.com",
  projectId: "lil-kido",
  storageBucket: "lil-kido.appspot.com",
  messagingSenderId: "94685285310",
  appId: "1:94685285310:web:cee2e04608afbd4ac3c7ef"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);
