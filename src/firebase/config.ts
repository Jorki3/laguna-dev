import { getAuth } from "firebase-admin/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBi1YW6gtbnuNnyPh9Mh3wNjeOiDg5nY2Q",
  authDomain: "laguna-dev-80c74.firebaseapp.com",
  projectId: "laguna-dev-80c74",
  storageBucket: "laguna-dev-80c74.appspot.com",
  messagingSenderId: "1031722419256",
  appId: "1:1031722419256:web:c0431ac713496ea7de92cd",
  measurementId: "G-8LT8PGEX2F",
};

const app = initializeApp(firebaseConfig);
export const projectAuth = getAuth(app);
