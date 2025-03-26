
import { initializeApp,getApp,getApps } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDcdowDtb2U1dV4D_iOsFnp05f_ejHUCyY",
  authDomain: "dr-interview-75d3e.firebaseapp.com",
  projectId: "dr-interview-75d3e",
  storageBucket: "dr-interview-75d3e.firebasestorage.app",
  messagingSenderId: "577466323537",
  appId: "1:577466323537:web:0fb763f72df2dc8cac5e70",
  measurementId: "G-ZQPE4WNLZ5"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);