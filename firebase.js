import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "firebase/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAPazLuY00D3gB4DgXN858aLObeYSOMh3I",
  authDomain: "ekrilidb.firebaseapp.com",
  projectId: "ekrilidb",
  storageBucket: "ekrilidb.appspot.com",
  messagingSenderId: "951676460373",
  appId: "1:951676460373:web:4c0fdae11cd8e9402da3dc",
};

const app = initializeApp(firebaseConfig);
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

export { db };
