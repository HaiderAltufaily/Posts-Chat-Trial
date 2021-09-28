import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfigs = {
  apiKey: "AIzaSyAtwCgCCkp2naBWDqDj4pIClgI4VUuJOjQ",

  authDomain: "todos-6bfa5.firebaseapp.com",

  projectId: "todos-6bfa5",

  storageBucket: "todos-6bfa5.appspot.com",

  messagingSenderId: "1059043535957",

  appId: "1:1059043535957:web:e1a3db0501a5b96686b8dc",
};
const app = initializeApp(firebaseConfigs);

export const db = getFirestore();
export const auth = getAuth();

export default getFirestore();
