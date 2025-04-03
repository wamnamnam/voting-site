import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

// Replace with your actual Firebase config!
const firebaseConfig = {
  apiKey: "AIzaSyCSrZxP6up_Rsj98bJg9oMYEfmPi7LWHi8",
  authDomain: "project-wamnam.firebaseapp.com",
  projectId: "project-wamnam",
  storageBucket: "project-wamnam.firebasestorage.app",
  messagingSenderId: "1041456749002",
  appId: "1:1041456749002:web:fe8c483c7e785a6c9d1733",
  measurementId: "G-CKRHCFNX0G"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
