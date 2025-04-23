import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBn15C3XBYr-IbtXW3uX6qRc0aGwS-ME2M",
  authDomain: "finance-ff36b.firebaseapp.com",
  projectId: "finance-ff36b",
  storageBucket: "finance-ff36b.firebasestorage.app",
  messagingSenderId: "560718554142",
  appId: "1:560718554142:web:76109803a55bd95798ba0f",
  measurementId: "G-5JK6XGQJ9N",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 
export const db = getFirestore(app);
const analytics = getAnalytics(app);
