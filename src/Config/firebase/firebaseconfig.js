import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage,  } from "firebase/storage";



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDs7a4o79Nyo1GVYB1bzGqxolu6IH0sszM",
  authDomain: "react-blogging-app-4d288.firebaseapp.com",
  projectId: "react-blogging-app-4d288",
  storageBucket: "react-blogging-app-4d288.appspot.com",
  messagingSenderId: "990896452382",
  appId: "1:990896452382:web:e2999aff088be658da8f0f",
  measurementId: "G-76GVFZM743"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


 export const storage = getStorage(app);