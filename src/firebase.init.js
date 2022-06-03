// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-2yQ3upT_2sFd12vbMrB9vCXPt0JXs7Q",
  authDomain: "client-warehouse.firebaseapp.com",
  projectId: "client-warehouse",
  storageBucket: "client-warehouse.appspot.com",
  messagingSenderId: "420619711325",
  appId: "1:420619711325:web:ae6642a9465f3bc4ce2eb4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;