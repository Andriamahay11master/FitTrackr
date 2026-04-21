// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAL7anYfyS0Dgr6BNQhCz1ElyYdkHL3Zfk",
  authDomain: "fittrack-ad93d.firebaseapp.com",
  projectId: "fittrack-ad93d",
  storageBucket: "fittrack-ad93d.firebasestorage.app",
  messagingSenderId: "23196782753",
  appId: "1:23196782753:web:b3fbb0477310fa7f4460e0",
  measurementId: "G-1XZGW8KQ5B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
