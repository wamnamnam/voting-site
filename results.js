import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {
  getFirestore,
  doc,
  onSnapshot
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

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
const db = getFirestore(app);

const docRef = doc(db, "votes", "totals");

onSnapshot(docRef, (docSnap) => {
  if (docSnap.exists()) {
    const data = docSnap.data();

    // loop through each person and update their span
    Object.keys(data).forEach((name) => {
      const el = document.getElementById(name.toLowerCase());
      if (el) {
        el.textContent = data[name];
      }
    });
  } else {
    console.log("No such document!");
  }
});
