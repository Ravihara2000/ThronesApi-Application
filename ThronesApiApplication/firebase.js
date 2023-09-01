import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics, isSupported as isAnalyticsSupported } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC22rciNg3ET48Ouds_8GnUCt7KTEe0PSw",
  authDomain: "test-452d5.firebaseapp.com",
  projectId: "test-452d5",
  storageBucket: "test-452d5.appspot.com",
  messagingSenderId: "337545480715",
  appId: "1:337545480715:web:e3609620de7c681869550e",
  measurementId: "G-ZWGDV1BR67",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app);

// Check if Firebase Analytics is supported
if (isAnalyticsSupported()) {
  // Initialize Firebase Analytics only if supported
  const analytics = getAnalytics(app);
}

export { auth }; // Export Firebase Authentication