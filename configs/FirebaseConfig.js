// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVZ_MLKWht3_rCMQpyDd_Fpl_0EPpjztk",
  authDomain: "business-listing-app-cf42f.firebaseapp.com",
  projectId: "business-listing-app-cf42f",
  storageBucket: "business-listing-app-cf42f.appspot.com",
  messagingSenderId: "120457997310",
  appId: "1:120457997310:web:04fef7252471df483baeaf",
  measurementId: "G-L32YEF7LXJ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
