import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdJTfPkxa7uHidi4zxZVJOc_XNP_GUkDQ",
  authDomain: "ebook-landing-page-7c285.firebaseapp.com",
  projectId: "ebook-landing-page-7c285",
  storageBucket: "ebook-landing-page-7c285.firebasestorage.app",
  messagingSenderId: "861610619522",
  appId: "1:861610619522:web:10fcd0acf6a1cc932afa9b",
  measurementId: "G-K63DK0K3JM"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
