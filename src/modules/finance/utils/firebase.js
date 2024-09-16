// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup  } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXen3fBJcGnwm71umDo0E0jdAAUyFHfnE",
  authDomain: "my-web-site-800cf.firebaseapp.com",
  projectId: "my-web-site-800cf",
  storageBucket: "my-web-site-800cf.appspot.com",
  messagingSenderId: "357617575957",
  appId: "1:357617575957:web:0b6d0b40a2f89138e2461c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const db = getFirestore(app);

const provider = new GoogleAuthProvider();

// Exports
export {app, db, auth, provider, signInWithPopup};