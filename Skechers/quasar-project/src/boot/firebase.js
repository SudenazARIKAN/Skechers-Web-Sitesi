// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";  
import { getDatabase, ref } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//Your web app's Firebase configuration
const firebaseConfig = {
  /*apiKey: "AIzaSyCbLkOlYnkpekpbGbDlrMvo-UO8oWxp-uQ",
  authDomain: "homework-webteknoloji.firebaseapp.com",
  projectId: "homework-webteknoloji",
  storageBucket: "homework-webteknoloji.appspot.com",
  messagingSenderId: "189509111547",
  appId: "1:189509111547:web:f8dba7daa92cd671712a5e"*/
  apiKey: "AIzaSyAr-7O1u5sFC3XyXCWYVErt9kcnEukJdCE",
  authDomain: "sudenazwebapp.firebaseapp.com",

  projectId: "sudenazwebapp",
  storageBucket: "sudenazwebapp.appspot.com",
  messagingSenderId: "669857529739",
  appId: "1:669857529739:web:9f1e205371e29ae5c9398e",
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase();
export const productListRef = ref(db, 'products');

