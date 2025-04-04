import { db } from "./firebase-init.js";
import {
  collection,
  onSnapshot
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

// Match these IDs to your HTML
const names = ["caitlin", "ggia", "jae", "matt", "max", "stefani", "zoe"];

// Set up real-time listener to the votes collection
onSnapshot(collection(db, "votes"), (snapshot) => {
  const voteCounts = {};

  // Initialize count for each name
  names.forEach(name => voteCounts[name] = 0);

  // Count each vote in Firestore
  snapshot.forEach(doc => {
    const data = doc.data();
    const vote = data.name?.toLowerCase();
    if (names.includes(vote)) {
      voteCounts[vote]++;
    }
  });

  // Update the HTML with the counts
  names.forEach(name => {
    document.getElementById(name).textContent = voteCounts[name] || 0;
  });
});
