import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfigs = {
  apiKey: process.env.key,

  authDomain: process.env.authDomain,

  projectId: process.env.projectId,

  storageBucket: process.env.storageBucket,

  messagingSenderId: process.env.messagingSender,

  appId: process.env.appId,
};
const app = initializeApp(firebaseConfigs);

export const db = getFirestore();
export const auth = getAuth();

export default getFirestore();
