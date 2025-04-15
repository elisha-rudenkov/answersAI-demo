// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZdv8BSz6Eo9Ria13gmCGRiTiVfSWPuvU",
  authDomain: "answersai-demo.firebaseapp.com",
  projectId: "answersai-demo",
  storageBucket: "answersai-demo.firebasestorage.app",
  messagingSenderId: "638769392730",
  appId: "1:638769392730:web:6b22bddf35d4c901fa7c63",
  measurementId: "G-9RWQ2HV079"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Optional: Configure persistence and session handling if needed
// setPersistence(auth, browserLocalPersistence);

export { app, analytics, auth, googleProvider }; 